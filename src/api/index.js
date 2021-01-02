export function loadGrantData() {
  return window.fetch('/data/all.json')
    .then(response => response.json())
    .catch(console.error); // eslint-disable-line no-console
}
