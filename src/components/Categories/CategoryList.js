import React from 'react';
import CategoryGif from './CategoryGif';

export default function CategoryList({ subCategoryData, fromSubCat }) {
  return subCategoryData.map((cat) => {
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
        fromSubCat={fromSubCat}
      />
    );
  });
}
