import React from 'react';

import style from './CategoryGif.scss';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';

export default function CategoryGif({ name, encodeName, gifUrl, fromSubCat }) {
  const location = useLocation();
  const { url } = useRouteMatch();
  const handleLink = (e) => {
    e.preventDefault();
  };

  return (
    <Link to={fromSubCat ? `/search?query=${name}` : `${url}/${encodeName}`}>
      <div className={`m-1 card bg-dark text-white ${style.gifContainer}`}>
        <img src={gifUrl} className={'card-img'} alt={name} />
        <div className="card-img-overlay d-flex justify-content-center align-items-center ${style.gifOverlay}">
          <h5 className={'card-title'}>{name.toUpperCase()}</h5>
        </div>
      </div>
    </Link>
  );
}
