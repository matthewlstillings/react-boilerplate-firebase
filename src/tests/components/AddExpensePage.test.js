import React from 'react';
import {AddExpensePage} from '../../components/AddExpensePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures.js/expenses';

let startAddExpense, history, wrapper;

beforeEach(()=> {
    startAddExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render add expense page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render add expense page', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[2]);
});