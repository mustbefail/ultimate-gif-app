/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework';

export default function SearchGif({ onChange, setAction }) {
  return (
    <div className={'d-flex mb-0'}>
      <input
        className={'form-control me-2'}
        type="search"
        placeholder="Search gif by name or what ever else"
        aria-label="Search"
        onChange={(event) => {
          onChange({ q: event.target.value });
          setAction(event.target.type);
        }}
      />
      <button className={'btn btn-outline-success'} type="button">
        Search
      </button>
    </div>
  );
}
