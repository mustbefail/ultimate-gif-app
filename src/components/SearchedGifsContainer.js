import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GifList from './GifList';
import InfiniteScroll from 'react-infinite-scroll-component';
import MasonryLayout from './MasonryLayout';
import useApi from '../Hooks/useApi';
import Spinner from './Spinner';

import { getGifsCollection } from '../api/giphyApi';
import SingleGif from './SingleGif';

export default function SearchedGifsContainer() {
  const gifPerPage = 25;
  const location = useLocation();
  const apiEndpoint = location.pathname.slice(1);
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get('query');

  const [{ data, error, loading, currPage, lastPage }, fetchGifs] = useApi(
    getGifsCollection,
  );

  useEffect(() => {
    fetchGifs(apiEndpoint, { q: search, limit: gifPerPage });
  }, [location.search]);

  if (error && !loading) {
    return (
      <div className="text-light text-center">
        <h3>Some error</h3>
      </div>
    );
  }

  if (data.length === 0 && !loading && !error) {
    return (
      <>
        <h3 className="text-light text-center">
          We did not find any gifs for your request{' '}
          <span className="badge">
            <u>{search}</u>
          </span>
          <br />
          Here's a random GIF
        </h3>
        <SingleGif />
      </>
    );
  }
  return (
    <>
      <h3 className="text-light text-center m-3">
        GIF on request{' '}
        <span className="badge">
          <u>{search}</u>
        </span>
      </h3>
      <InfiniteScroll
        next={() =>
          fetchGifs(
            apiEndpoint,
            { q: search, offset: currPage * gifPerPage },
            true,
          )
        }
        hasMore={!lastPage && !loading}
        loader={<Spinner />}
        dataLength={data.length}
        scrollThreshold={1}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {error ? (
          <div className="text-light text-center">{error} </div>
        ) : (
          <MasonryLayout>
            <GifList gifData={data} />
          </MasonryLayout>
        )}
      </InfiniteScroll>
    </>
  );
}
