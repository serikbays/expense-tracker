## 1. Project setup
Goal: Empty Vite app with one passing test.
Description: Initialize a Vite + vanilla JavaScript project with Vitest and Chart.js installed. Add one trivial passing test so that `npm test` succeeds.

## 2. Add expense form
Goal: User can add an expense with amount (KZT), category, date and note.
Description: Build a form with amount, category (fixed list: Food, Rent, Transport, Books, Fun, Other), date and note. Save each expense to localStorage.

## 3. Expense list with edit and delete
Goal: User can see all expenses and edit or delete any of them.
Description: Render the list of saved expenses sorted by date. Each row has Edit and Delete buttons. Changes persist in localStorage.

## 4. Spending by category chart
Goal: User sees a pie/donut chart of spending by category.
Description: Use Chart.js to draw a donut chart from the saved expenses, grouped by category. The chart updates when expenses change.

## 5. Spending by month chart
Goal: User sees a bar chart of total spending per month.
Description: Use Chart.js to draw a bar chart of totals per month from the saved expenses. The chart updates when expenses change.
