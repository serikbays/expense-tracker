export function totalsByCategory(list) {
  const t = {};
  for (const e of list) t[e.category] = (t[e.category] || 0) + e.amount;
  return t;
}

export function totalsByMonth(list) {
  const t = {};
  for (const e of list) {
    const m = e.date.slice(0, 7);
    t[m] = (t[m] || 0) + e.amount;
  }
  return Object.fromEntries(Object.entries(t).sort(([a], [b]) => a.localeCompare(b)));
}
