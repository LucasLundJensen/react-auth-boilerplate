import React from 'react';
import { Link } from 'react-router-dom';

export const ProtectedLink = (props) => {
    if(localStorage.getItem("JWT_TOKEN")) {
        return (
            <Link {...props} />
        )
    } else {
        return (
            <></>
        );
    }    
}