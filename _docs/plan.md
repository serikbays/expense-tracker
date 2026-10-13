# Student Expense Tracker: Project Scope (v1)

## Summary
A simple, private, browser-based expense tracker for students. Users log expenses manually, assign them to preset categories, and view two charts showing where their money goes.

## Decisions

| Area | Decision |
|---|---|
| Platform | Responsive web app (works on phone and laptop) |
| Data storage | Browser only (e.g. localStorage), no accounts, no backend |
| Expense input | Manual entry only |
| Expense fields | Amount, category, date, note |
| Categories | Fixed list: Food, Rent, Transport, Books, Fun, Other |
| Charts | 1) Spending by category (pie/donut) 2) Spending over time (monthly line or bar) |
| Expense list actions | Add, edit, delete |
| Currency | KZT (₸), fixed |
| Design | Clean and minimal, light theme only |

## In Scope
- Add an expense (amount in ₸, category, date, note)
- Edit and delete existing expenses
- List of all expenses
- Spending-by-category chart
- Monthly spending-over-time chart
- Persistent data in the browser between visits
- Mobile-friendly layout

## Out of Scope (v1)
- Budgets or savings goals
- Search and filtering
- CSV/JSON export or import
- Recurring expenses
- Custom or editable categories
- Receipt scanning or bank import
- User accounts, cloud sync, multi-device sync
- Multi-currency or currency settings
- Dark mode

## Open Questions (to settle before building)
- Should the monthly chart cover the last 6 months, 12 months, or all data?
- Should amounts allow decimals, or whole tenge only?
- Default date for a new expense: today, or blank?
- Empty state: what should the charts show before any data exists?

## Possible Future Versions
- Per-category budgets with warnings
- Filter by date and category
- CSV export
- Custom categories
- Dark mode
