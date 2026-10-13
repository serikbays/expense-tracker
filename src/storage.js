const KEY = 'expenses';
export const CATEGORIES = ['Food', 'Rent', 'Transport', 'Books', 'Fun', 'Other'];

const getStore = (store) => store || globalThis.localStorage;

export function loadExpenses(store) {
  try {
    return JSON.parse(getStore(store).getItem(KEY)) || [];
  } catch {
    return [];
  }
}

function save(list, store) {
  getStore(store).setItem(KEY, JSON.stringify(list));
}

function validate(e) {
  if (!(e.amount > 0)) throw new Error('Amount must be greater than 0');
  if (!CATEGORIES.includes(e.category)) throw new Error('Invalid category');
  if (!e.date) throw new Error('Date is required');
}

export function addExpense(data, store) {
  const item = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    amount: Number(data.amount),
    category: data.category,
    date: data.date,
    note: data.note || '',
  };
  validate(item);
  const list = loadExpenses(store);
  list.push(item);
  save(list, store);
  return item;
}

export function updateExpense(id, data, store) {
  const list = loadExpenses(store);
  const i = list.findIndex((e) => e.id === id);
  if (i === -1) throw new Error('Expense not found');
  const next = { ...list[i], ...data, amount: Number(data.amount ?? list[i].amount) };
  validate(next);
  list[i] = next;
  save(list, store);
  return next;
}

export function deleteExpense(id, store) {
  save(loadExpenses(store).filter((e) => e.id !== id), store);
}
