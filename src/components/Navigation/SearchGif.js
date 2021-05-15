export default function SearchGif() {
  return `
    <div class="d-flex mb-0">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onchange="window.performSearch(this.type, { q: this.value })"
      >
      <button
        class="btn btn-outline-success"
        type="button"
      >
      Search
      </button>
    </div>
    `;
}
