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
