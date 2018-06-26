import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
     <h1>Empty Wallet</h1>
     <NavLink  className="nav-link" activeClassName="is-active" to='/dashboard' exact={true}>Home</NavLink>
     
     <NavLink  className="nav-link" activeClassName="is-active" to='/create'>Add Expense</NavLink>
     
     <NavLink className="nav-link" activeClassName="is-active" to='/help'>Help</NavLink>
     <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: ()=> dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);