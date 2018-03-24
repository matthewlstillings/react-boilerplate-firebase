import React from 'react';
import {connect} from 'react-redux';
import Expense from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <ul>
        {
          props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense)=> {
                   return <Expense 
                         key={expense.id}
                         {...expense}
                    />;
                })
            )
        }
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
        
 };
};

export default connect(mapStateToProps)(ExpenseList);
