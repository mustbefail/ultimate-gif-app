import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchGif() {
  const [searchQuery, setSearchQuery] = useState('');

  const history = useHistory();
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
    </div>
  );
}
