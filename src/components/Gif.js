import React from 'react';

export default function Gif({ title, url }) {
  return <img src={url} alt={title} className={'rounded'} />;
}
