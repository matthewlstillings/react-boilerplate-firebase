import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'; 
import BudgetDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/404page';
import PublicRoute from './PublicRoute';
import LogIn from '../components/Log-in';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            
            <Switch>
                <PublicRoute 
                    path="/"
                    component={LogIn}
                    exact={true}
                />
                <PrivateRoute
                    path="/dashboard" 
                    component={BudgetDashboardPage}
                    
                />
                <PrivateRoute
                    path="/create"
                    component={AddExpensePage}
                   
                />
                <PrivateRoute
                    path="/edit/:id"
                    component={EditPage}
                    
                />
                <Route
                    path="/help"
                    component={HelpPage}
                    
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>     
    </Router>
);

export default AppRouter;