import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({component: Component, ...rest}) => {
    const token = useSelector(state => state.authenticationReducer.token);

    return (
        <Route {...rest} render={
            (props) => {
                if(token) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to="/" />
                }
            }
        }/>
    )
}

export default ProtectedRoute;