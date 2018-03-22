import React from 'react';
import {AddExpensePage} from '../../components/AddExpensePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures.js/expenses';

let addExpense, history, wrapper;

beforeEach(()=> {
    addExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render add expense page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render add expense page', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[2]);
});