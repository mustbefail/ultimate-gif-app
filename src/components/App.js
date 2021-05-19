/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import Navigation from './Navigation/Navigation.js';
import GifsContainer from './Gifs/GifsContainer.js';

export default function App() {
  return (
    <>
      <Navigation />
      <GifsContainer />
    </>
  );
}
