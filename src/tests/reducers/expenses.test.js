import expenseReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures.js/expenses';

test('should setup default expense values', ()=> {
    const state = expenseReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if not found', ()=> {
    const expense = {
        id: '4',
        description: 'Amber',
        note: '',
        amount: 5050505,
        createdAt: moment(0).add(7, 'days').valueOf()

    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit text with valid id', ()=> {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
})

test('should not edit item without valid id', ()=> {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})
