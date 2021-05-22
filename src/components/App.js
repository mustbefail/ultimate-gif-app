/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';
import Navigation from './Navigation/Navigation.js';
import GifsContainer from './Gifs/GifsContainer.js';
import CategoryContainer from './Categories';
import dataStore from '../data/dataStore';

export default function App() {
  const { state } = dataStore.uiState;
  if (state === 'categories') {
    return (
      <div className={`container`}>
        <Navigation />
        <CategoryContainer />
      </div>
    );
  }
  return (
    <div className={`container`}>
      <Navigation />
      <GifsContainer />
    </div>
  );
}
