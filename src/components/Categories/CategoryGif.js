/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import style from './CategoryGif.scss';

export default function CategoryGif({ name, gif }) {
  const { url: gifUrl } = gif.images.fixed_width;
  return (
    <a href="#">
      <div className={`m-1 card bg-dark text-white ${style.gifContainer}`}>
        <img src={gifUrl} className={'card-img'} alt={name} />
        <div
          className={`card-img-overlay d-flex justify-content-center align-items-center ${style.gifOverlay}`}
        >
          <h5 className={'card-title'}>{name.toUpperCase()}</h5>
        </div>
      </div>
    </a>
  );
}
