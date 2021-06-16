import React, { useEffect } from 'react';
import { getGifsCollection } from '../../api/giphyApi';
import CategoryList from './CategoryList';
import useApi from '../../Hooks/useApi';
import { useLocation } from 'react-router-dom';

export default function CategoryContainer() {
  const [{ data, error, loading }, fetchGifs] = useApi(getGifsCollection);
  const location = useLocation();

  const apiEndpoint = location.pathname.slice(1);

  useEffect(() => {
    fetchGifs(apiEndpoint);
  }, [getGifsCollection]);

  return (
    <>
      <h1 className="mb-2 text-light text-center">Sub categories</h1>
      <div className="d-flex flex-wrap justify-content-center align-content-center text-light">
        <CategoryList subCategoryData={data} fromSubCat={true} />
      </div>
    </>
  );
}
