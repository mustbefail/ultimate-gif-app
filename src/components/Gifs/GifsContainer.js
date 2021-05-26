/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import Gif from './Gif';
import style from './GifsContainer.scss';

export default function GifsContainer({ action, error, dataLoading, gifData }) {
  if (!action) {
    return;
  }
  if (error) {
    return <div className={`text-light`}>{error}</div>;
  }
  if (dataLoading) {
    return <div className={`text-light`}>Loading...</div>;
  }

  const gifs = gifData.map((gifProp) => {
    return <Gif gifProp={gifProp} />;
  });
  return (
    <div className={`d-flex justify-content-center`}>
      <div
        className={`d-flex flex-wrap justify-content-start align-content-start flex-column ${style.gifContainer}`}
      >
        {gifs}
      </div>
    </div>
  );
}
