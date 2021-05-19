/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
export default function SearchGif() {
  return (
    <div className={'d-flex mb-0'}>
      <input
        className={'form-control me-2'}
        type="search"
        placeholder="Search"
        aria-label="Search"
        onchange={(e) =>
          window.performSearch(e.target.type, { q: e.target.value })
        }
      />
      <button className={'btn btn-outline-success'} type="button">
        Search
      </button>
    </div>
  );
}
