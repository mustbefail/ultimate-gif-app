export default function TrendGifs() {
  return `
      <li class="nav-item">
          <a class="nav-link" href="#" data-action="trending" onclick="window.performSearch(this.dataset.action)">Trending Gifs</a>
      </li>
      `;
}
