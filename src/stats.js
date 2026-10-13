export function totalsByCategory(list) {
  const t = {};
  for (const e of list) t[e.category] = (t[e.category] || 0) + e.amount;
  return t;
}
