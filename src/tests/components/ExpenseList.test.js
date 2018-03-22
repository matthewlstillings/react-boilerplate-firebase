import React from "react";
import {ExpenseList} from '../../components/expenselist';
import {shallow} from 'enzyme';
import expenses from '../fixtures.js/expenses';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', ()=> {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});