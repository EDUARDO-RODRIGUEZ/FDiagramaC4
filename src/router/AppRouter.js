import React, { useContext } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { authContext } from '../context/authContext';
import LoginPage from '../page/auth/LoginPage';
import RegisterPage from '../page/auth/RegisterPage';
import HomePage from '../page/home/HomePage';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const AppRouter = () => {

    const { auth } = useContext(authContext);
    const { isAuthenticated } = auth;

    return (
        <Router>
            <div>
                <Switch>

                    <PrivateRouter exact path='/' component={HomePage} isAuthenticated={isAuthenticated} />

                    <PublicRouter exact path='/login' component={LoginPage} isAuthenticated={isAuthenticated} />
                    <PublicRouter exact path='/register' component={RegisterPage} isAuthenticated={isAuthenticated} />

                    <Redirect to="/login" />

                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
