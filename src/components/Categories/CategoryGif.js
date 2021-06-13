import React from 'react';

import style from './CategoryGif.scss';

export default function CategoryGif({
  name,
  encodeName,
  gifUrl,
  setSubCat,
  setSearch,
  isSubCat,
  setIsSubCat,
  setApiEndpoint,
}) {
  const handleLink = (e) => {
    e.preventDefault();
    if (isSubCat) {
      setSearch(name);
      setApiEndpoint('search');
      return;
    }
    setIsSubCat(true);
    setSubCat(encodeName);
  };
  return (
    <a onClick={handleLink}>
      <div className={`m-1 card bg-dark text-white ${style.gifContainer}`}>
        <img src={gifUrl} className={'card-img'} alt={name} />
        <div className="card-img-overlay d-flex justify-content-center align-items-center ${style.gifOverlay}">
          <h5 className={'card-title'}>{name.toUpperCase()}</h5>
        </div>
      </div>
    </a>
  );
}
