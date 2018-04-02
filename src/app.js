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
import './firebase/firebase';


const store = configureStore();

//store.subscribe(()=> {
//    const state = store.getState();
//    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//    //console.log(visibleExpenses);
//    console.log(state);
//});

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

