import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import GifList from './GifList';

import useApi from '../Hooks/useApi';
import MasonryLayout from './MasonryLayout';
import { getGifsCollection } from '../api/giphyApi';
import Spinner from './Spinner';

export default function Trends() {
  const location = useLocation();
  const apiEndpoint = location.pathname.slice(1);
  const gifPerPage = 25;

  const [{ data, error, loading, currPage, lastPage }, fetchGifs] = useApi(
    getGifsCollection,
  );

  useEffect(() => {
    fetchGifs(apiEndpoint);
  }, [getGifsCollection]);

  if (error && !loading) {
    return (
      <div className="text-light text-center">
        <h3>Some error</h3>
      </div>
    );
  }
  return (
    <InfiniteScroll
      next={() =>
        fetchGifs(apiEndpoint, { offset: currPage * gifPerPage }, true)
      }
      hasMore={!lastPage && !loading}
      loader={<Spinner />}
      dataLength={data.length}
      scrollThreshold={1}
    >
      <MasonryLayout>
        <GifList gifData={data} isLoading={loading} />
      </MasonryLayout>
    </InfiniteScroll>
  );
}
