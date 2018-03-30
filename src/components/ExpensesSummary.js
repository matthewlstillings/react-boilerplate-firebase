import React from 'react';
import {connect} from 'react-redux';
import total from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
    const expenseSummaryFormatted = numeral(props.expensesSummary).format('$0,0.00'); //not dividing here might break other places, trying dividing by 100 here instead of selector
    return (
        <div>
            <h3>You are viewing {props.expenseCount} {expenseWord}, totalling {expenseSummaryFormatted}.</h3>
        </div>
    );
};



const mapStateToProps = (state) => {
    return {
        expensesSummary: total(selectExpenses(state.expenses, state.filters)),
        expenseCount: selectExpenses(state.expenses, state.filters).length
    };
};

export default connect(mapStateToProps)(ExpenseSummary);