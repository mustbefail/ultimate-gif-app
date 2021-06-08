import React, { useState, useEffect, useRef } from 'react';
import { loadData } from '../data/giphyApi';
import useDebounce from '../useDebounce';

export default function SearchGif({ setRoute, setAction, setSearchParam }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  // const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     loadData('search/tags', {
  //       q: debouncedSearchTerm,
  //       limit: 8,
  //     })
  //       .then((data) => {
  //         setAutocompData(data.data);
  //       })
  //       .catch(setError);
  //   }
  // }, [debouncedSearchTerm]);

  const submitHandler = (e) => {
    e.preventDefault();
    setRoute('search');
    setAction('search');
    setSearchParam({ q: searchTerm });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-3">
        <input
          type="text"
          ref={inputRef}
          id={`search`}
          className={'form-control'}
          type="search"
          value={searchTerm}
          placeholder="Search gif by name or what ever else"
          aria-label="Search"
          autoFocus={true}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />{' '}
        <button
          className="btn btn-outline-success"
          type="submit"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </form>
  );
}
