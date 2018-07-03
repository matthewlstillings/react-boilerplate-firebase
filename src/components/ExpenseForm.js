import React from 'react';
import moment from "moment";
import {SingleDatePicker} from 'react-dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCalendar, faStickyNote, faDollarSign } from '@fortawesome/free-solid-svg-icons';


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            notes: props.expense ? props.expense.notes : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            focused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=> ({description}));
    };
    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(()=> ({notes}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d{1,}(\.\d{0,2})?$/g) || !amount) {
            this.setState(() => ({amount}));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));
        }
        
    };
    onFocusChange = ({focused}) => {
        this.setState(()=>({focused}));
    };
    componentDidMount = () => {
        let intervalId = setInterval(() => {this.changeError()}, 5000);
    }
    changeError = () => {
        this.setState(()=>({error: ''}));
    } 
    componentDidUpdate = () => {
        console.log(this.state.error);
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(()=>({error: 'error'}));
        } else {
            this.setState(()=>({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                notes: this.state.notes
            });
        }
    }
    render () {
        return (
            <div className="expense-form__container">
               
                <form onSubmit={this.onSubmit} className="expense-form">
                    <div className="expense-form__separator">
                        <label htmlFor="text" className="expense-for__input-label"><FontAwesomeIcon icon={faTag}/></label>
                        <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        className="expense-form__description"
                        name="text"
                        autoComplete="off"
                        />
                    </div> 
                    <div className="expense-form__separator">
                        <label htmlFor="amount" className="expense-for__input-label"><FontAwesomeIcon icon={faDollarSign}/></label>
                        <input 
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                            className="expense-form__amount"
                            name="amount"
                            autoComplete="off"
                        />
                    </div>

                    <div className="expense-form__separator">
                        <label htmlFor="date" className="expense-for__input-label"><FontAwesomeIcon icon={faCalendar}/></label>
                        <SingleDatePicker 
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.focused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={()=> false}
                    />
                    </div>

                    <div className="expense-form__separator">
                        <label htmlFor="notes" className="expense-for__input-label"><FontAwesomeIcon icon={faStickyNote}/></label>
                        <input
                        placeholder="Notes"
                        value={this.state.notes}
                        onChange={this.onNotesChange}
                        className="expense-form__notes"
                        name="notes"
                        autoComplete="off"
                        >
                        </input> 
                    </div>
                    <button className="expense-form__btn">Add Expense</button>
                </form>
                {this.state.error === 'error' && <p className="expense-error">Please provide a description and amount</p>}
            </div>
        )
    }
}