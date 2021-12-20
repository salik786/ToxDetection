import React from 'react'
import { Redirect, Route } from "react-router-dom"
function PrivateRoute({ component: Component, restricted, ...rest }) {

    return (
        <>
            <Route {...rest} render={props => {
                sessionStorage.getItem('token') && restricted ?
                    <Redirect to="/dashboard" />
                    : <Component {...props} />

            }}></Route>

        </>
    )
}

export default PrivateRoute
