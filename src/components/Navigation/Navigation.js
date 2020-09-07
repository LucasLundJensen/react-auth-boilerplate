import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { ProtectedLink } from '../Authorized/ProtectedLink';
import { userActions } from '../../store/actions';

import './Navigation.css';

export default function Navigation() {
    const token = useSelector(state => state.authenticationReducer.token);
    const dispatch = useDispatch();

    function logout() {
        dispatch(userActions.logout());
    }

    if(token) {
        return (
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <ProtectedLink to="/profile">Profile</ProtectedLink>
                <p onClick={logout}>Logout</p>
            </div>
        )
    } else {
        return (
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        )
    }
}