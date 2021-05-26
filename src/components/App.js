/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useEffect, useState } from '../framework';
import Navigation from './Navigation/Navigation';
import GifsContainer from './Gifs/GifsContainer';
import SearchGif from './Navigation/SearchGif';
import { useGif } from '../getGifDataHook';

export default function App() {
  const {
    action,
    setAction,
    setSearchParams,
    error,
    dataLoading,
    gifData,
  } = useGif();

  return (
    <div className={`container`}>
      <Navigation />
      <SearchGif onChange={setSearchParams} setAction={setAction} />
      <GifsContainer
        action={action}
        error={error}
        dataLoading={dataLoading}
        gifData={gifData}
      />
    </div>
  );
}
