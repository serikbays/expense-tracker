export function notify() {
  window.dispatchEvent(new Event('expenses-changed'));
}
