import Gif from './Gif';
import React from 'react';
import MasonryItem from './MasonryLayout/MasonryItem';

export default function GifList({ gifData }) {
  return gifData.map((gif) => {
    const { images, title, id } = gif;
    const { fixed_width: smallImg } = images;
    const { url, height, width } = smallImg;

    return (
      <MasonryItem height={height} width={width} key={id}>
        <Gif height={height} width={width} url={url} title={title} />
      </MasonryItem>
    );
  });
}
