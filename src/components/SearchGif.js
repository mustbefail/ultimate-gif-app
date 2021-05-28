/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useEffect, useState, useRef } from '../framework';
import { debounce } from '../utils';
import { loadData } from '../data/giphyApi';

export default function SearchGif({ setRoute, setAction }) {
  const [inputValue, setInputValue] = useState('');
  const [autocompData, setAutocompData] = useState('');
  const [error, setError] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    loadData('search/tags', { q: inputValue, limit: 7 })
      .then((data) => {
        const autoComps = data.data.map((el) => el.name);
        if (data.message) throw Error(data.message);
        setAutocompData(autoComps);
      })
      .catch(setError);
  }, [inputValue]);

  useEffect(() => {
    setTimeout(() => {
      const input = document.getElementById('search');
      input.focus();
      input.selectionStart = input.value.length;
    }, 100);
  }, [autocompData]);

  return (
    <div>
      <div className={'d-flex mb-0'}>
        <input
          id={`search`}
          className={'form-control me-2'}
          type="search"
          placeholder="Search gif by name or what ever else"
          aria-label="Search"
          autoFocus={true}
          value={inputValue}
          onChange={({ target }) => {
            const { type } = target;
            // setAction(type);
            // setRoute(type);
          }}
          onInput={debounce((e) => {
            setInputValue(e.target.value);
          }, 800)}
        />
        <button className={'btn btn-outline-success'} type="button">
          Search
        </button>
      </div>
      <div className={'d-flex mt-1 justify-content-center'}>
        {autocompData
          ? autocompData.map((el) => (
              <span
                className="badge bg-warning text-dark m-1"
                onClick={() => setInputValue(el)}
              >
                {el}
              </span>
            ))
          : null}
      </div>
    </div>
  );
}
