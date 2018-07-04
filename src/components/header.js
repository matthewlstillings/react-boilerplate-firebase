import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';





export const Header = ({startLogout}) => (
    <header>
        <h1 className="header__title">React Title</h1>
        <button onClick={startLogout} className="nav-link">Logout</button>
    </header>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);