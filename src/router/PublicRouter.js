import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return <Route {...rest} component={Component} />
}

export default PublicRouter
