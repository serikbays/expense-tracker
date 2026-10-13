import Chart from 'chart.js/auto';
import { loadExpenses } from './storage.js';
import { totalsByMonth } from './stats.js';

let chart;
function render() {
  const totals = totalsByMonth(loadExpenses());
  if (chart) chart.destroy();
  chart = new Chart(document.getElementById('month-chart'), {
    type: 'bar',
    data: { labels: Object.keys(totals), datasets: [{ label: 'Total spent (KZT)', data: Object.values(totals) }] },
  });
}
window.addEventListener('expenses-changed', render);
render();
