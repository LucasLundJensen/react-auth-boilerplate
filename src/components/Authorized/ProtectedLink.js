import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedLink = (props) => {
    const token = useSelector(state => state.authenticationReducer.token);

    if(token) {
        return (
            <Link {...props} />
        )
    } else {
        return (
            <></>
        );
    }  
}