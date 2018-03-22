import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { setTimeout } from 'timers';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    //console.log(visibleExpenses);
    console.log(state);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent bill', amount: 1230000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Groceries', amount: 50000000, createdAt: -1000}));
const expenseTree = store.dispatch(addExpense({description: 'Utilities bill', amount: 133200, createdAt: -300}));
const expenseOe = store.dispatch(addExpense({description: 'Netflix bill', amount: 100000, createdAt: -22400}));
const expenseTo = store.dispatch(addExpense({description: 'Hulu bill', amount: 5032000, createdAt: 1520442000000 }));
const expenseThre = store.dispatch(addExpense({description: 'Gym', amount: 84300, createdAt: 3300}));
const expenseTw = store.dispatch(addExpense({description: 'Cable bill', amount: 42000000, createdAt: 4000}));
//store.dispatch(setTextFilter('bill'));


//setTimeout(() => {
    //store.dispatch(setTextFilter('hulu'));
//}, 3000) 

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
); 


ReactDOM.render(jsx, document.getElementById('root')); 

