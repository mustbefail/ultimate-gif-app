import React from 'react';
import CategoryGif from './CategoryGif';

export default function CategoriesGifList({
  catData,
  setSubCat,
  setSearch,
  isSubCat,
  setIsSubCat,
  setApiEndpoint,
}) {
  return catData.map((cat) => {
    const { name, gif, name_encoded } = cat;
    const { images, id } = gif;
    const {
      fixed_width: { url },
    } = images;
    return (
      <CategoryGif
        encodeName={name_encoded}
        name={name}
        gifUrl={url}
        key={id + name}
        setSubCat={setSubCat}
        setSearch={setSearch}
        isSubCat={isSubCat}
        setIsSubCat={setIsSubCat}
        setApiEndpoint={setApiEndpoint}
      />
    );
  });
}
