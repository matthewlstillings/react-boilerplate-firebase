import React from 'react';
import {connect} from 'react-redux';
import {expenseSummary, budgetSummary} from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
    const expenseSummaryFormatted = numeral(props.expensesSummary).format('$0,0.00'); //not dividing here might break other places, trying dividing by 100 here instead of selector
    const budgetAmount = numeral(props.budgetAmount).format('$0,0.00'); 
    const budgetLeft = props.budgetAmount - props.expensesSummary;
    const budgetLeftFormatted = numeral(budgetLeft).format('$0,0.00'); 
    return (
        <div className="expense-summary__container">
            
                <h3 className="expense-summary is-total">Viewing <span className="expense-summary__number">{props.expenseCount}</span> {expenseWord}.</h3> 
                <h3 className="expense-summary"> Total: <span className="expense-summary__number">{expenseSummaryFormatted}</span></h3>
            
                <h3 className="expense-summary"> Budget: <span className="expense-summary__number">{budgetAmount}</span></h3>
                <h3 className="expense-summary"> Budget Remaining:
                {
                    budgetLeft <= 0 ? <span className="expense-summary__number budget-negative"> {budgetLeftFormatted} </span> : <span className="expense-summary__number"> {budgetLeftFormatted} </span>
                }   
                </h3>
            
        </div>
    );
};



const mapStateToProps = (state) => {
    return {
        expensesSummary: expenseSummary(selectExpenses(state.expenses, state.filters)),
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        budgetAmount: budgetSummary(state.budget)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);