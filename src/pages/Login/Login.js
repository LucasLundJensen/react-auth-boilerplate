import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { userActions } from '../../store/actions';

export default function Login() {
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const userId = useSelector(state => state.authenticationReducer.userId);    

    useEffect(() => {
        if(userId) {
            setRedirect(true);
        }
    }, [userId])

    async function onSubmit(e) {
        e.preventDefault();
        dispatch(userActions.login(email, password));
    }
    return (
        <div>
            {redirect ? <Redirect push to="/profile"/> : <></>}
            <div className="container-fluid">
                <h1>Login page</h1>

                <form onSubmit={onSubmit}>
                    <input type="text" name="email" onChange={event => setEmail(event.target.value)}/>
                    <input type="password" name="password" onChange={event => setPassword(event.target.value)}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}



