import React from 'react';
import {shallow} from 'enzyme';
import BudgetDashboardPage from '../../components/Dashboard';


test('should rener dashboard page', () => {
    const wrapper = shallow(<BudgetDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});