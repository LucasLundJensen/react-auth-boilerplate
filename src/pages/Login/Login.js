import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../store/actions';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const errors = useSelector(state => state.authenticationReducer.error);    

    async function onSubmit(e) {
        e.preventDefault();
        await dispatch(userActions.login(email, password));
    }

    return (
        <div>
            <div className="container-fluid">
                <h1>Login page</h1>

                <form onSubmit={onSubmit}>
                    <input type="text" name="email" onChange={event => setEmail(event.target.value)}/>
                    <input type="password" name="password" onChange={event => setPassword(event.target.value)}/>
                    <button type="submit">Login</button>
                </form>
            </div>
            { errors }
        </div>
    );
}



