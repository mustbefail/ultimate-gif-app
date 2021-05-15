import Navigation from './Navigation/Navigation.js';
import GifsContainer from './Gifs/GifsContainer.js';

export default function App() {
  return `
    <div class="container">
      ${Navigation()}
      ${GifsContainer()}
    </div>
    `;
}
