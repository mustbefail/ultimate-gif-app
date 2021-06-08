import React, { createElement, useEffect } from 'react';
import MasonryLayout from './MasonryLayout/MasonryLayout';
import Gif from './Gif';
import { useGif } from '../useGif';
import GifList from './GifList';

export default function SearchedGifsContainer({ action, searchParams }) {
  const { error, gifData, dataLoading } = useGif(action, searchParams);
  if (dataLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p className={`text-light`}>{error}</p>;
  }

  return (
    <MasonryLayout>
      <GifList gifData={gifData} />
    </MasonryLayout>
  );
}
