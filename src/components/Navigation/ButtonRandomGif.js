/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';

export default function ButtonRandomGif({
  setAction,
  setRoute,
  setNewLoad,
  newLoad,
}) {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="random"
        onClick={({ target }) => {
          const { dataset } = target;
          setAction(dataset.action);
          setRoute(dataset.action);
          setNewLoad(!newLoad);
        }}
      >
        Random
      </a>
    </li>
  );
}
