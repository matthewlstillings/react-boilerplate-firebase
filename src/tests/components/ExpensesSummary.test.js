import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpensesSummary';

test('should render expense with 1 expense', ()=> {
    const wrapper = shallow(<ExpenseSummary expensesSummary={145} expenseCount={1} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses with multiple items', ()=> {
    const wrapper = shallow(<ExpenseSummary expensesSummary={145241} expenseCount={3} />);
    expect(wrapper).toMatchSnapshot();
});

