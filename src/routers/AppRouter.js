import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import BudgetDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/404page';
import Header from '../components/header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route
                    path="/" 
                    component={BudgetDashboardPage}
                    exact={true}
                />
                <Route
                    path="/create"
                    component={AddExpensePage}
                    exact={true}
                />
                <Route
                    path="/edit/:id"
                    component={EditPage}
                    exact={true}
                />
                <Route
                    path="/help"
                    component={HelpPage}
                    exact={true}
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>     
    </BrowserRouter>
);

export default AppRouter;