import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export const Header = ({startLogout}) => (
    <header>
        <div className="mobile-menu" ><FontAwesomeIcon icon={faBars} className="mobile-menu__icon" onClick={
            (e) => {
                console.log('aaaaaa');
                 e.target.parentNode.parentNode.getElementsByClassName("header__mobile-nav")[0].classList.toggle("show");
            }
        }/></div>
        <div className="header__desktop-nav">
            <NavLink  className="nav-link" activeClassName="is-active" to='/dashboard' exact={true}>Dashboard</NavLink>
            
            <NavLink  className="nav-link add-expense" activeClassName="is-active" to='/create'>Add Expense</NavLink>
            
            <NavLink className="nav-link" activeClassName="is-active" to='/help'>Help</NavLink>
            <a onClick={startLogout} className="nav-link log-out">Logout</a>
        </div>
        <h1 className="header__title">Empty Wallet</h1>
        <div className="header__mobile-nav">
            
            <NavLink  className="nav-link" activeClassName="is-active" to='/dashboard' exact={true}>Dashboard</NavLink>
            
            <NavLink  className="nav-link" activeClassName="is-active" to='/create'>Add Expense</NavLink>
            
            <NavLink className="nav-link" activeClassName="is-active" to='/help'>Help</NavLink>
            <div onClick={startLogout} className="nav-link">Logout</div>
            
        </div>
     
    
    </header>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);