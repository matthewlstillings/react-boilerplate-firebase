import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header>
     <h1>Empty Wallet</h1>
     <NavLink  className="nav-link" activeClassName="is-active" to='/' exact={true}>Home</NavLink>
     
     <NavLink  className="nav-link" activeClassName="is-active" to='/create'>Add Expense</NavLink>
     
     <NavLink className="nav-link" activeClassName="is-active" to='/help'>Help</NavLink>
    </header>
);

export default Header;