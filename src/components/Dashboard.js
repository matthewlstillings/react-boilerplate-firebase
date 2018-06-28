import React from 'react';
import ExpenseList from './expenselist';
import ExpenseSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';

const BudgetDashboardPage = () => (
    <div className="budget-dashboard">
        <ExpenseListFilters />
        <ExpenseSummary />
        <ExpenseList />
    </div>
);

export default BudgetDashboardPage;
