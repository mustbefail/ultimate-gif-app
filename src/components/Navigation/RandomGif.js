export default function RandomGif() {
  return `
      <li class="nav-item">
        <a
            class="nav-link"
            href="#"
            data-action="random"
            onclick="window.performSearch(this.dataset.action)"
        >
            Random
        </a>
      </li>
      `;
}
