import React, { useState, useEffect } from 'react';

import MasonryLayout from './MasonryLayout/MasonryLayout';
import GifList from './GifList';
import { loadData } from '../data/giphyApi';
import MasonryItem from './MasonryLayout/MasonryItem';

export default function Trends({ action }) {
  const [error, setError] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [gifData, setGifData] = useState([]);
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (action) {
      loadData(action, isBottom ? { offset: 36 } : {})
        .then((data) => {
          const { data: gifData } = data;

          if (data.message) throw Error(data.message);
          setDataLoading(true);
          setError(null);
          setGifData((prevState) => [...prevState, ...gifData]);
        })
        .catch(setError)
        .finally(() => {
          setDataLoading(false);
          setIsBottom(false);
        });
    }
  }, [action, isBottom]);

  if (error) {
    return <div>error</div>;
  }
  if (dataLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MasonryLayout>
      <GifList gifData={gifData} />
    </MasonryLayout>
  );
}
