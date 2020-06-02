import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { userActions } from '../../store/actions';

export default function Register() {
    const [redirect, setRedirect] = useState(false);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const token = useSelector(state => state.authenticationReducer.token);    

    useEffect(() => {
        if(token) {
            setRedirect(true);
        }
    }, [token])

    async function onSubmit(e) {
        e.preventDefault();
        dispatch(userActions.register(username, email, password));
    }
    return (
        <div>
            {redirect ? <Redirect to="/profile"/> : <></>}
            <div className="container-fluid">
                <h1>Register page</h1>

                <form onSubmit={onSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" onChange={event => setUsername(event.target.value)}/>
                    <label>Email</label>
                    <input type="text" name="email" onChange={event => setEmail(event.target.value)}/>
                    <label>Password</label>
                    <input type="password" name="password" onChange={event => setPassword(event.target.value)}/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}



