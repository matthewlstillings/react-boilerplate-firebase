import React from 'react';
import {shallow} from 'enzyme';
import Expense from '../../components/ExpenseListItem';
import expenses from '../fixtures.js/expenses';

test('should render expense item', () => {
    const wrapper = shallow(<Expense {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

