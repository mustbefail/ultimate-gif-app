import React, { useEffect, useState } from 'react';
import { loadRandomGif } from '../data/giphyApi';

import { backgrounds, getRandomElement } from '../utils';

export default function BigGif({ singleGifID }) {
  const [gifData, setGifData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadRandomGif(singleGifID)
      .then(({ data }) => {
        setIsLoading(true);
        const { images, title } = data;
        const {
          original: { height, width, url },
        } = images;

        setGifData({ url, height, width, title });
      })
      .finally(() => setIsLoading(false));
  }, [singleGifID]);
  const gifStyle = {
    height: gifData.height,
    width: gifData.width,
    borderRadius: 5,
    backgroundColor: getRandomElement(backgrounds),
  };
  return (
    <div className={`d-flex align-items-center flex-column`}>
      <div style={gifStyle}>
        <img src={gifData.url} alt={gifData.title} className={'rounded'} />
      </div>
    </div>
  );
}
