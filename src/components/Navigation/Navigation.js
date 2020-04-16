import React from 'react';
import './Navigation.css';
import {
    Link
} from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}