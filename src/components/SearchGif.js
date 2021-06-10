import React from 'react';

export default function SearchGif({ value, setValue, setApiEndpoint }) {
  const submitHandle = (event) => {
    event.preventDefault();
    setApiEndpoint('search');
  };
  return (
    <div className={`col-xl-8`}>
      <form onSubmit={submitHandle}>
        <div className="input-group mb-3">
          <input
            id={`search`}
            className={'form-control'}
            type="search"
            value={value}
            onChange={setValue}
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
