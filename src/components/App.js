import React from 'react';
import { useState } from 'react';
import Navigation from './Navigation';
import SearchedGifsContainer from './SearchedGifsContainer';
import CategoryContainer from './Categories';
import SearchGif from './SearchGif';
import Footer from './Footer';
import Trends from './Trends';
import RandomGif from './RandomGif';

import useDebounce from '../Hooks/useDebounce';
import BigGif from './BigGif';

export default function App() {
  const [apiEndpoint, setApiEndpoint] = useState('trending');
  const [singleGifID, setSingleGifID] = useState('');
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  let content;
  switch (apiEndpoint) {
    case 'random':
      content = <RandomGif apiEndpoint={apiEndpoint} />;
      break;
    case 'categories':
      content = (
        <CategoryContainer
          apiEndpoint={apiEndpoint}
          setSearch={setQuery}
          setApiEndpoint={setApiEndpoint}
        />
      );
      break;
    case 'search':
      content = (
        <SearchedGifsContainer
          debouncedQuery={debouncedQuery}
          apiEndpoint={apiEndpoint}
          setApiEndpoint={setApiEndpoint}
          setSingleGifId={setSingleGifID}
        />
      );
      break;
    case 'single':
      content = <BigGif singleGifID={singleGifID} />;
      break;
    case 'trending':
      content = (
        <Trends
          apiEndpoint={apiEndpoint}
          setApiEndpoint={setApiEndpoint}
          setSingleGifID={setSingleGifID}
        />
      );
      break;
  }

  return (
    <div className={`container d-flex flex-column h-100`}>
      <div className={`row justify-content-center`}>
        <Navigation setApiEndpoint={setApiEndpoint} />
        <SearchGif
          value={query}
          setValue={setQuery}
          setApiEndpoint={setApiEndpoint}
        />
        {content}
        <Footer />
      </div>
    </div>
  );
}
