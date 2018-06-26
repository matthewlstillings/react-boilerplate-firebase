import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures.js/expenses';
import {EditPage} from '../../components/EditExpensePage';


let startEditExpense, history, startRemoveExpense, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <EditPage 
            startEditExpense = {startEditExpense}
            startRemoveExpense = {startRemoveExpense}
            history = {history}
            expense = {expenses[1]}
        />
    );
});

test('should render edit expense page', () => { 
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  });
  
  test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
      id: expenses[1].id
    });
  });