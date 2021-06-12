import React, { useRef } from 'react';

export default function SearchGif({ value, setValue, setApiEndpoint }) {
  const myRef = useRef();
  const submitHandle = (event) => {
    event.preventDefault();
    setApiEndpoint('search');
    setValue(myRef.current.value);
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <div className="input-group mb-3">
          <input
            ref={myRef}
            id={`search`}
            className={'form-control'}
            type="search"
            value={value}
            onChange={submitHandle}
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
