import React from 'react'

import { Redirect, Route } from 'react-router'
function PublicRoute({ component: Component, restriced, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                sessionStorage.getItem('token') ? <Redirect to="dashboard" /> : <Component {...props} />
            }} />
    )
}

export default PublicRoute
