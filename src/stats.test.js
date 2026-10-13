import { describe, it, expect } from 'vitest';
import { totalsByCategory } from './stats.js';

describe('totalsByCategory', () => {
  it('sums amounts per category', () => {
    const list = [
      { category: 'Food', amount: 100 },
      { category: 'Food', amount: 50 },
      { category: 'Rent', amount: 300 },
    ];
    expect(totalsByCategory(list)).toEqual({ Food: 150, Rent: 300 });
  });

  it('returns an empty object when there are no expenses', () => {
    expect(totalsByCategory([])).toEqual({});
  });
});

import { totalsByMonth } from './stats.js';

describe('totalsByMonth', () => {
  it('sums amounts per month, sorted oldest to newest', () => {
    const list = [
      { date: '2026-10-05', amount: 100 },
      { date: '2026-09-30', amount: 40 },
      { date: '2026-10-20', amount: 60 },
    ];
    const result = totalsByMonth(list);
    expect(result).toEqual({ '2026-09': 40, '2026-10': 160 });
    expect(Object.keys(result)).toEqual(['2026-09', '2026-10']);
  });
});
