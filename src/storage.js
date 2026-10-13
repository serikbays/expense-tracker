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
