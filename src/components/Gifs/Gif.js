/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
export default function Gif(url) {
  return <img className={'m-1'} src={url} />;
}
