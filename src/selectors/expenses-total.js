export const expenseSummary = (expenses) => {
  return expenses
  .map((expense) => expense.amount)
  .reduce((total, amount) => total + amount, 0) / 100;  
};   

export const budgetSummary = (budget) => {
  return budget
  .map((budgetItem) => budgetItem.budget)
  .reduce((total, amount) => total + amount, 0) / 100;  
};   


