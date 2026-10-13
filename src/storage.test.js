import { describe, it, expect } from 'vitest';
import { addExpense, loadExpenses, CATEGORIES } from './storage.js';

function fakeStore() {
  const m = {};
  return { getItem: (k) => (k in m ? m[k] : null), setItem: (k, v) => { m[k] = v; } };
}

describe('addExpense', () => {
  it('saves a valid expense and loads it back', () => {
    const s = fakeStore();
    addExpense({ amount: '1500', category: 'Food', date: '2026-10-01', note: 'lunch' }, s);
    const list = loadExpenses(s);
    expect(list).toHaveLength(1);
    expect(list[0]).toMatchObject({ amount: 1500, category: 'Food', date: '2026-10-01', note: 'lunch' });
  });

  it('rejects zero, negative and empty amounts', () => {
    const s = fakeStore();
    for (const amount of ['0', '-5', '']) {
      expect(() => addExpense({ amount, category: 'Food', date: '2026-10-01' }, s)).toThrow();
    }
    expect(loadExpenses(s)).toHaveLength(0);
  });

  it('rejects categories outside the fixed list', () => {
    expect(() => addExpense({ amount: '10', category: 'Pets', date: '2026-10-01' }, fakeStore())).toThrow();
  });

  it('has exactly the six preset categories', () => {
    expect(CATEGORIES).toEqual(['Food', 'Rent', 'Transport', 'Books', 'Fun', 'Other']);
  });
});
