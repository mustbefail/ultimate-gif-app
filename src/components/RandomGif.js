/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useEffect, useState } from '../framework';
import { loadData } from '../data/giphyApi';
import Gif from './Gif';

export default function RandomGif({ action, newLoad }) {
  const [error, setError] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    if (action) {
      loadData(action)
        .then((data) => {
          const { data: gifData } = data;

          if (data.message) throw Error(data.message);
          setDataLoading(true);
          setError(null);
          setGifData(gifData);
        })
        .catch(setError)
        .finally(() => {
          setDataLoading(false);
        });
    }
  }, [newLoad]);

  if (error) {
    return <div>error</div>;
  }
  if (dataLoading) {
    return <div>Loading...</div>;
  }
  const {
    image_url: url,
    image_height: height,
    image_width: width,
    title,
  } = gifData;

  return (
    <div className={`d-flex justify-content-center`}>
      <Gif
        height={height || 0}
        width={width || 0}
        url={url || ''}
        title={title || ''}
      />
    </div>
  );
}
