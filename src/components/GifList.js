import Gif from './Gif';
import React from 'react';

export default function GifList({ gifData, setSingleGifID, setApiEndpoint }) {
  return gifData.map((gif) => {
    const { images, title, id } = gif;
    const { fixed_width: smallImg } = images;
    const { url, height, width } = smallImg;

    return (
      <Gif
        height={height}
        width={width}
        url={url}
        title={title}
        key={id}
        id={id}
        setApiEndpoint={setApiEndpoint}
        setSingleGifID={setSingleGifID}
      />
    );
  });
}
