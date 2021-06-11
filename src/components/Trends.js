import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import GifList from './GifList';

import useApi from '../Hooks/useApi';
import MasonryLayout from './MasonryLayout/MasonryLayout';
import { getGiphyReqUrl } from '../data/giphyApi';

export default function Trends({ apiEndpoint }) {
  const gifPerPage = 25;

  const [{ data, error, loading, currPage, lastPage }, fetchGifs] = useApi();

  const apiUrl = (offset) => getGiphyReqUrl(apiEndpoint, { offset });

  useEffect(() => {
    fetchGifs(apiUrl(0));
  }, []);

  return (
    <InfiniteScroll
      next={() => fetchGifs(apiUrl(currPage * gifPerPage), true)}
      hasMore={!lastPage && !loading}
      loader={`Loading...`}
      dataLength={data.length}
      scrollThreshold={1}
    >
      {error && !loading ? (
        <div className={`text-light text-center`}>
          <h3>Some error</h3>
        </div>
      ) : (
        <MasonryLayout>
          <GifList gifData={data} isLoading={loading} />
        </MasonryLayout>
      )}
    </InfiniteScroll>
  );
}
