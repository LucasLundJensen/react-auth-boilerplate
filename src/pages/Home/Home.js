import React from 'react';
import axios from 'axios';

export default function Home() {

    async function testApi() {
        const response = await axios.get('/api/user/1', { withCredentials: true });
        console.log(response);
    }

    return (
        <div>
            <div className="container-fluid">
                <h1>Home page</h1>
                <p onClick={testApi}>Test API</p>
            </div>
        </div>
    );
}