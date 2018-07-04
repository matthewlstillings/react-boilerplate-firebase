import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {login, logout} from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { setTimeout } from 'timers';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';


const store = configureStore();

//Calls app using provider from react-store

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
); 

//Renders application
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
         ReactDOM.render(jsx, document.getElementById('root'));
         hasRendered = true;
    }
};

//Loader Code - Could add to own component

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
        renderApp()
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
       
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})



