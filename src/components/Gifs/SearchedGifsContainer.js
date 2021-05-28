/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useEffect } from '../../framework';
import Gif from './Gif';
import s from './GifsContainer.scss';

export default function GifsContainer({ action, error, dataLoading, gifData }) {
  if (!action || !gifData.length) {
    return;
  }
  if (error) {
    return <div className={`text-light`}>{error}</div>;
  }
  if (dataLoading) {
    return <div className={`text-light`}>Loading...</div>;
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
