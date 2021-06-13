import React, { useEffect, useState } from 'react';
import { loadRandomGif } from '../../data/giphyApi';
import CategoriesGifList from './CategoriesGifList';

export default function CategoryContainer({
  apiEndpoint,
  setSearch,
  setApiEndpoint,
}) {
  const [catData, setCatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subCat, setSubCat] = useState('');
  const [isSubCat, setIsSubCat] = useState(false);
  useEffect(() => {
    const catEndpoint = subCat ? `${apiEndpoint}/${subCat}` : apiEndpoint;
    loadRandomGif(catEndpoint)
      .then(({ data }) => {
        setIsLoading(true);
        setCatData(data);
      })
      .finally(() => setIsLoading(false));
  }, [subCat]);
  return (
    <>
      <h1 className="mb-2 text-light text-center">Categories</h1>
      <div className="d-flex flex-wrap justify-content-center align-content-center text-light">
        {isLoading ? (
          <p className="text-light">Loading...</p>
        ) : (
          <CategoriesGifList
            catData={catData}
            setSubCat={setSubCat}
            setSearch={setSearch}
            isSubCat={isSubCat}
            setIsSubCat={setIsSubCat}
            setApiEndpoint={setApiEndpoint}
          />
        )}
      </div>
    </>
  );
}
