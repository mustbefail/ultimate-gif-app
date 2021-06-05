import React, { useState, useEffect, useRef } from 'react';

export default function SearchGif({ setRoute, setAction, setSearchParam }) {
  const inputRef = useRef(null);

  return (
    <div>
      <div className={'d-flex mb-0'}>
        <input
          ref={inputRef}
          id={`search`}
          className={'form-control me-2'}
          type="search"
          placeholder="Search gif by name or what ever else"
          aria-label="Search"
          autoFocus={true}
          onChange={(e) => {
            const { type, value } = inputRef.current;
            setAction(type);
            setRoute(type);
            setSearchParam({ q: value });
          }}
        />
        <button
          className={'btn btn-outline-success'}
          type="button"
          onClick={() => {
            const { type, value } = inputRef.current;
            setAction(type);
            setRoute(type);
            setSearchParam({ q: value });
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
