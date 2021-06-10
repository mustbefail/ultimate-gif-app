import React from 'react';
import { useState } from 'react';
import Navigation from './Navigation/Navigation';
import SearchedGifsContainer from './SearchedGifsContainer';
import CategoryContainer from './Categories';
import SearchGif from './SearchGif';
import Footer from './Footer';
import Trends from './Trends';
import RandomGif from './RandomGif';
import useSearchForm from '../Hooks/useSearchForm';
import useDebounce from '../Hooks/useDebounce';

export default function App() {
  const [newLoad, setNewLoad] = useState(null);
  const [apiEndpoint, setApiEndpoint] = useState('trending');
  const { query, handleSubmit, handleInput } = useSearchForm();
  const debouncedQuery = useDebounce(query, 500);

  let content;
  switch (apiEndpoint) {
    case 'random':
      content = <RandomGif newLoad={newLoad} />;
      break;
    case 'categories':
      content = <CategoryContainer />;
      break;
    case 'search':
      content = (
        <SearchedGifsContainer
          debouncedQuery={debouncedQuery}
          apiEndpoint={apiEndpoint}
        />
      );
      break;
    case 'trending':
      content = <Trends apiEndpoint={apiEndpoint} />;
      break;
  }

  return (
    <div className={`container d-flex flex-column h-100`}>
      <div className={`row justify-content-center`}>
        <Navigation
          setApiEndpoint={setApiEndpoint}
          setNewLoad={setNewLoad}
          newLoad={newLoad}
        />
        <SearchGif
          value={query}
          onSubmit={handleSubmit}
          setValue={handleInput}
          setApiEndpoint={setApiEndpoint}
        />

        {content}
        <Footer />
      </div>
    </div>
  );
}
