import { loadExpenses, updateExpense, deleteExpense, CATEGORIES } from './storage.js';
import { notify } from './events.js';

const section = document.getElementById('list-section');
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function render() {
  const items = loadExpenses().sort((a, b) => b.date.localeCompare(a.date));
  if (items.length === 0) {
    section.innerHTML = '<h2>Expenses</h2><p>No expenses yet.</p>';
    return;
  }
  const rows = items.map((e) => `<tr><td>${e.date}</td><td>${e.category}</td><td>${e.amount} ₸</td><td>${esc(e.note)}</td><td><button data-edit="${e.id}">Edit</button> <button data-delete="${e.id}">Delete</button></td></tr>`).join('');
  section.innerHTML = `<h2>Expenses</h2><table><thead><tr><th>Date</th><th>Category</th><th>Amount</th><th>Note</th><th></th></tr></thead><tbody>${rows}</tbody></table>`;
}

section.addEventListener('click', (ev) => {
  const del = ev.target.dataset.delete;
  const edit = ev.target.dataset.edit;
  if (del) {
    deleteExpense(del);
    notify();
  }
  if (edit) {
    const cur = loadExpenses().find((e) => e.id === edit);
    if (!cur) return;
    const amount = prompt('Amount (KZT)', cur.amount);
    if (amount === null) return;
    const category = prompt('Category: ' + CATEGORIES.join(', '), cur.category);
    if (category === null) return;
    const date = prompt('Date (YYYY-MM-DD)', cur.date);
    if (date === null) return;
    const note = prompt('Note', cur.note);
    if (note === null) return;
    try {
      updateExpense(edit, { amount, category, date, note });
      notify();
    } catch (err) {
      alert(err.message);
    }
  }
});

window.addEventListener('expenses-changed', render);
render();
