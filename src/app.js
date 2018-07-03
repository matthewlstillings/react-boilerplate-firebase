import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import {addIncome, startSetBudget} from './actions/budget';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { setTimeout } from 'timers';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';


const store = configureStore();



const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
); 





let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
         ReactDOM.render(jsx, document.getElementById('root'));
         hasRendered = true;
    }
};

const loader = (
    <div className="loader__container">
        <div className="loader">
            <div className="circle is-red"></div>
            <div className="circle is-green"></div>
        </div>
    </div>
);


ReactDOM.render(loader, document.getElementById('root')); 


//Login Actions
firebase.auth().onAuthStateChanged((user)=>{ //Firebase Functions
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetBudget());
        store.dispatch(startSetExpenses()).then(() => { renderApp()  });
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
       
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})



