import { CATEGORIES, addExpense } from './storage.js';
import { notify } from './events.js';

const section = document.getElementById('form-section');
section.innerHTML = `
  <h2>Add expense</h2>
  <form id="expense-form">
    <input name="amount" type="number" min="1" step="any" placeholder="Amount (KZT)" required />
    <select name="category">${CATEGORIES.map((c) => `<option>${c}</option>`).join('')}</select>
    <input name="date" type="date" required />
    <input name="note" type="text" placeholder="Note (optional)" />
    <button type="submit">Add</button>
    <p id="form-error" style="color:#b00020"></p>
  </form>`;

const form = document.getElementById('expense-form');
const error = document.getElementById('form-error');
form.elements.date.valueAsDate = new Date();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  try {
    addExpense(Object.fromEntries(new FormData(form)));
    error.textContent = '';
    form.reset();
    form.elements.date.valueAsDate = new Date();
    notify();
  } catch (err) {
    error.textContent = err.message;
  }
});
