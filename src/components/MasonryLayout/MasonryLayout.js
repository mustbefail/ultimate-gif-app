import React from 'react';
import s from './MasonryContainer.scss';

export default function MasonryLayout({ children }) {
  return (
    <div className={`mb-3 ${s['masonry-wrapper']}`}>
      <div className={`${s['masonry']}`}>{children}</div>
    </div>
  );
}
