import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures.js/expenses';
import {EditPage} from '../../components/EditExpensePage';


let editExpense, history, removeExpense, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <EditPage 
            editExpense = {editExpense}
            removeExpense = {removeExpense}
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
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  });
  
  test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
      id: expenses[1].id
    });
  });