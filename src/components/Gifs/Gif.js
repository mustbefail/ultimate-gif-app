/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
export default function Gif(url) {
  return <img className={'m-2 rounded'} src={url} />;
}
