import React from 'react';
import { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import SearchedGifsContainer from './Gifs/SearchedGifsContainer';
import CategoryContainer from './Categories';
import SearchGif from './SearchGif';
import Footer from './Footer';
import Trends from './Trends';
import RandomGif from './RandomGif';

export default function App() {
  const [route, setRoute] = useState('trending');
  const [action, setAction] = useState('');
  const [newLoad, setNewLoad] = useState(null);
  const [searchParams, setSearchParams] = useState({});

  let content;
  switch (route) {
    case 'random':
      content = <RandomGif action={action} newLoad={newLoad} />;
      break;
    case 'categories':
      content = <CategoryContainer />;
      break;
    case 'search':
      content = (
        <SearchedGifsContainer action={action} searchParams={searchParams} />
      );
      break;
    case 'trending':
      content = <Trends action={action} />;
      break;
    default:
      content = <Trends />;
      break;
  }

  return (
    <div className={`container d-flex flex-column h-100`}>
      <Navigation
        setRoute={setRoute}
        setAction={setAction}
        setNewLoad={setNewLoad}
        newLoad={newLoad}
      />
      <SearchGif
        setRoute={setRoute}
        setAction={setAction}
        setSearchParam={setSearchParams}
      />

      {content}
      <Footer />
    </div>
  );
}
