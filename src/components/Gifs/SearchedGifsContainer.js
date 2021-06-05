/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useEffect } from '../../framework';
import Gif from '../Gif';
import s from './GifsContainer.scss';
import { useGif } from '../../useGif';
import { useRef } from '../../framework';

export default function SearchedGifsContainer({ action, searchParams }) {
  const { error, gifData, dataLoading } = useGif(action, searchParams);
  if (dataLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p className={`text-light`}>{error}</p>;
  }

  window.addEventListener('scroll', function () {
    const clientHeight = document.documentElement.clientHeight;
    console.log(
      document.documentElement.getBoundingClientRect().top,

      // координата bottom относительно окна равна 2000
      // документ длинный, вероятно, далеко за пределами нижней части окна
      document.documentElement.getBoundingClientRect().bottom,
    );
  });

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
