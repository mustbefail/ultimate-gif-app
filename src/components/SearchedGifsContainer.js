import React, { useEffect } from 'react';
import GifList from './GifList';
import { getGiphyReqUrl } from '../data/giphyApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import MasonryLayout from './MasonryLayout/MasonryLayout';
import useApi from '../Hooks/useApi';

export default function SearchedGifsContainer({
  apiEndpoint,
  debouncedQuery,
  setApiEndpoint,
}) {
  const gifPerPage = 25;

  const [{ data, error, loading, currPage, lastPage }, fetchGifs] = useApi();

  const apiUrl = (offset) =>
    getGiphyReqUrl(apiEndpoint, {
      offset,
      q: debouncedQuery,
      limit: gifPerPage,
    });
  useEffect(() => {
    fetchGifs(apiUrl(0));
  }, [debouncedQuery]);
  return (
    <InfiniteScroll
      next={() => fetchGifs(apiUrl(currPage * gifPerPage), true)}
      hasMore={!lastPage && !loading}
      loader={`Loading...`}
      dataLength={data.length}
      scrollThreshold={1}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {error ? (
        <div className={`text-light text-center`}>{error} </div>
      ) : (
        <MasonryLayout>
          <GifList gifData={data} setApiEndpoint={setApiEndpoint} />
        </MasonryLayout>
      )}
    </InfiniteScroll>
  );
}
