import React, { useEffect, useState } from 'react';
import s from './Gifs/GifsContainer.scss';

export default function Gif({ title, height, width, url }) {
  return (
    <div className={`m-2 rounded ${s['masonry-item']}`}>
      <img src={url} alt={title} className={'rounded'} />
    </div>
  );
}
