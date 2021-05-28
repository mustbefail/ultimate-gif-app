/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useEffect, useState } from '../framework';
import { loadData } from '../data/giphyApi';
import s from './Gifs/GifsContainer.scss';
import Gif from './Gif';

export default function Trends({ action }) {
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
          setGifData(Array.isArray(gifData) ? gifData : [gifData]);
        })
        .catch(setError)
        .finally(() => setDataLoading(false));
    }
  }, [action]);

  if (!gifData.length) return;

  if (error) {
    return <div>error</div>;
  }
  if (dataLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={`mb-3 ${s['masonry-wrapper']}`}>
      <div className={`${s['masonry']}`}>
        {gifData.map((gif) => {
          const { images, title } = gif;
          const { fixed_width: smallImg } = images;
          const { url, height, width } = smallImg;

          return <Gif height={height} width={width} url={url} title={title} />;
        })}
      </div>
    </div>
  );
}
