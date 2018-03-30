import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures.js/expenses';

test('should filter by text value', ()=> {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[1]])

});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[0], expenses[1]]);
});

test('should filter sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should filter sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[1], expenses[2], expenses[0]]);
});