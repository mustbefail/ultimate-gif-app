import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useDebounce from '../Hooks/useDebounce';
import useApi from '../Hooks/useApi';
import s from './SearchGif.scss';
import { getTerms } from '../api/giphyApi';

export default function SearchGif() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [{ data, error, loading }, fetchGifs] = useApi(getTerms);
  const history = useHistory();

  useEffect(() => {
    fetchGifs({ limit: 5, q: debouncedSearch });
  }, [getTerms, debouncedSearch]);

  const pushHistory = (search) => {
    history.push({
      pathname: '/search',
      search: `?query=${search}`,
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    pushHistory(searchQuery);
  };

  const handleInput = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <div className="input-group mb-3">
          <input
            id="search"
            className={'form-control'}
            type="search"
            value={searchQuery}
            onChange={handleInput}
            placeholder="Search gif by name or what ever else"
            aria-label="Search"
            autoFocus={true}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
      {data.length && (
        <div className="d-flex flex-wrap m-2">
          {data.map((tag, idx) => {
            return (
              <a
                onClick={(e) => {
                  setSearchQuery(tag.name);
                  pushHistory(tag.name);
                }}
                className={s.badge}
                id={idx}
              >
                {`#${tag.name}`}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
