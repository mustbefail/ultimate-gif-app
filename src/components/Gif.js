import React from 'react';
import { backgrounds, getRandomElement } from '../utils';
import { Link } from 'react-router-dom';
import s from './Gif.scss';
export default function Gif({ title, url, height, width, id, fromCollection }) {
  const gifStyle = {
    height,
    width,
    borderRadius: 5,
    backgroundColor: getRandomElement(backgrounds),
  };

  const copyToClipboardHandle = () => {
    navigator.clipboard.writeText(window.location.href);
    const btn = document.querySelector('.btn-success');
    setTimeout(() => {
      btn.textContent = 'Copied!';
    }, 500);
  };
  return (
    <div style={gifStyle}>
      {fromCollection ? (
        <Link to={`/single?id=${id}`}>
          <img src={url} alt={title} className={'rounded'} />
        </Link>
      ) : (
        <a onClick={copyToClipboardHandle} className={s.container}>
          <img src={url} alt={title} className={`rounded ${s.image}`} />
          <div className={s.middle}>
            <div className={`btn btn-success ${s.text}`}>Copy to clipboard</div>
          </div>
        </a>
      )}
    </div>
  );
}
