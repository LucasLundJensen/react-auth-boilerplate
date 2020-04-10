import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
    let location = useLocation();
    return (
        <div className="container-fluid text-center mt-4">
            <h3>The page {location.pathname} has not been found.</h3>
        </div>
    )
}