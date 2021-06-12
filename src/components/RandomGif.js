import React, { useEffect, useState } from 'react';

import Gif from './Gif';

import { loadRandomGif } from '../data/giphyApi';

export default function RandomGif({ apiEndpoint }) {
  const [loadNew, setLoadNew] = useState(false);
  const [gifData, setGifData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadRandomGif(apiEndpoint)
      .then(({ data }) => {
        setIsLoading(true);
        const {
          image_url: url,
          image_height: height,
          image_width: width,
          title,
        } = data;

        setGifData({ url, height, width, title });
      })
      .finally(() => setIsLoading(false));
  }, [loadNew]);
  return (
    <div className={`d-flex align-items-center flex-column`}>
      <Gif
        height={gifData.height}
        width={gifData.width}
        url={gifData.url}
        title={gifData.title}
        isLoading={isLoading}
      />
      <button
        className={`btn btn-outline-success p-2 mt-2`}
        onClick={() => setLoadNew(!loadNew)}
      >
        NEXT
      </button>
    </div>
  );
}
