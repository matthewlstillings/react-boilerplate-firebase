import React from 'react';
import {connect} from 'react-redux';
import {startAddIncome, addIncome, subtractIncome} from '../actions/budget';


export default class BudgetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: props.income ? (props.income.amount / 100).toString() : '',
            error: 0
        }
    }
    onAdditionChange = (e) => {
        const budget = e.target.value;
        if (budget.match(/^\d{1,}(\.\d{0,2})?$/g) || !budget) {
            this.setState(() => ({budget}));
        }
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            budget: parseFloat(this.state.budget, 10) * 100 
        });
        this.setState((prevState) => ({error: prevState.error + 1 }));
        console.log(this.state.error);
    };
    resetError = () => {
        this.setState(()=>({error: 0}));
    }
    componentDidMount = () => {
        let intervalId = setInterval(() => {this.resetError()}, 5000);
        try {
            const json = localStorage.getItem('error');
            const error = JSON.parse(json);
            if (error) {
                this.setState(()=>({error}))
                console.log('Found Data');
            }
    
        } catch (e) {
            //Does nothing
        }
    }
    componentDidUpdate = () => { //logs when state updates
            const json = JSON.stringify(this.state.error);
            localStorage.setItem('error', json);
            console.log('saving data');
    };   
    render() {
        return (
            <div className="budget-form__container">
                <form onSubmit={this.onSubmit} className="budget-form">
                    <input 
                        type="text"
                        value={this.state.budget}
                        onChange={this.onAdditionChange}
                        disabled={this.state.error > 2}
                        className="budget-form__description"
                        placeholder="Enter a new budget amount"
                    />
                    <button className="budget-form__btn" disabled={this.state.error > 2}>Update Budget</button>
                </form>
                {this.state.error > 2 && <h3 className="expense-error">You're doing that too much, calm down!</h3>}

            </div>
        );
    }
};