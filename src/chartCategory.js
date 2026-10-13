import Chart from 'chart.js/auto';
import { loadExpenses } from './storage.js';
import { totalsByCategory } from './stats.js';

let chart;
function render() {
  const totals = totalsByCategory(loadExpenses());
  if (chart) chart.destroy();
  chart = new Chart(document.getElementById('category-chart'), {
    type: 'doughnut',
    data: { labels: Object.keys(totals), datasets: [{ data: Object.values(totals) }] },
  });
}
window.addEventListener('expenses-changed', render);
render();
