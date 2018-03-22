import React from 'react';
import moment from "moment";
import {SingleDatePicker} from 'react-dates';


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
                note: this.state.note
            });
        }
    }
    render () {
        return (
            <div>
                {this.state.error === 'error' && <p>Please provide a description and amount</p>}
                <form onSubmit={this.onSubmit}>
                   <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                   />
                   <input 
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                   />
                   <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                   />
                   <textarea
                    placeholder="Notes"
                    value={this.state.notes}//This might need to be changed to "notes"
                    onChange={this.onNotesChange}
                   >
                   </textarea> 
                   <button>Add Expense</button>
                </form>
            </div>
        )
    }
}