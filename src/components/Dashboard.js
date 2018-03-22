import React from 'react';
import ExpenseList from './expenselist';
import ExpenseListFilters from './ExpenseListFilters';

const BudgetDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default BudgetDashboardPage;
