import React, { useEffect, useState } from 'react';
import { getGifsCollection } from '../../data/giphyApi';
import CategoriesGifList from './CategoriesGifList';
import useApi from '../../Hooks/useApi';

export default function CategoryContainer({
  apiEndpoint,
  setSearch,
  setApiEndpoint,
}) {
  const [{ data, error, loading }, fetchGifs] = useApi(getGifsCollection);

  const [subCat, setSubCat] = useState('');
  const [isSubCat, setIsSubCat] = useState(false);
  const catEndpoint = subCat ? `${apiEndpoint}/${subCat}` : apiEndpoint;

  useEffect(() => {
    fetchGifs(apiEndpoint);
  }, [getGifsCollection, subCat]);

  return (
    <>
      <h1 className="mb-2 text-light text-center">Categories</h1>
      <div className="d-flex flex-wrap justify-content-center align-content-center text-light">
        <CategoriesGifList
          catData={data}
          setSubCat={setSubCat}
          setSearch={setSearch}
          isSubCat={isSubCat}
          setIsSubCat={setIsSubCat}
          setApiEndpoint={setApiEndpoint}
        />
      </div>
    </>
  );
}
