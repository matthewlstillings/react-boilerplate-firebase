import React from 'react';
import {connect} from 'react-redux';
import {startAddIncome} from '../actions/budget';
import ExpenseSummary from './ExpensesSummary';
import BudgetForm from './BudgetForm';


export class BudgetManager extends React.Component {
    onAddSubmit = (income) => {
        this.props.startAddIncome(income);
        window.location.reload();
    };
   
    render() {
        return (
            <div>
                <h1 className="add-expense__title">Budget Manager</h1>
                <BudgetForm
                    onSubmit={this.onAddSubmit}
                />
            </div>
        );
    }
};


const mapDispatchToProps = (dispatch) => ({
    startAddIncome: (income) => dispatch(startAddIncome(income))
});



export default connect(undefined, mapDispatchToProps)(BudgetManager);