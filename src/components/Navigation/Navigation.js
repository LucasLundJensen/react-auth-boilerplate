import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProtectedLink } from '../Authorized/ProtectedLink';
import './Navigation.css';
import {
    Link
} from "react-router-dom";

export default function Navigation() {
    const [authed, setAuthed] = useState(false);
    const token = useSelector(state => state.authenticationReducer.token);    

    useEffect(() => {
        if (token) setAuthed(true);
        else setAuthed(false);
    }, [token])

    return (
        <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <ProtectedLink to="/profile">Profile</ProtectedLink>
            <ProtectedLink to="/logout">Logout</ProtectedLink>
        </div>
    )
}