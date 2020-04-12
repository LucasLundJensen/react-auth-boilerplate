import React, { useState } from 'react';
import { userService } from '../../store/services'
export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onLogin = (event) => {
        event.preventDefault();
        
        const user = userService.login(email, password);
        console.log(user);
    }

    return (
        <div>
            <div className="container-fluid">
                <form action="">
                    <input type="text" onChange={event => setEmail(event.target.value)} name="email"/>
                    <input type="password" onChange={event => setPassword(event.target.value)} name="password"/>
                    <button onClick={event => onLogin(event)}>Login</button>
                </form>
            </div>
        </div>
    );
}