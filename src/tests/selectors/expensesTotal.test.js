import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures.js/expenses';

test('should set total to 0 if no expenses', () => {
    const noExpense = [];
    const results = totalExpenses(noExpense);
    expect(results).toEqual(0);
});

test('should set total to 195 if a single expense', () => {
    const results = totalExpenses([expenses[0]]);
    expect(results).toEqual(1.95);
});

test('should set total to 1141.95', () => {
    const results = totalExpenses(expenses);
    expect(results).toEqual(1141.95);
});