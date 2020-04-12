import axios from 'axios';
import { authHeader } from '../helpers';

/**
 * 
 * Just a test file, will move functionality into actions later.
 * 
 */

export const userService = {
    login,
    logout
};

function login(email, password) {
    axios.post('http://localhost:3001/api/auth/login', {
        email: email,
        password: password
    }).then(function(response) {
        console.log(response);
        return response.data;
    }).catch(function(err) {
        console.log(err);
    })
}

function logout() {
    localStorage.removeItem('user');
}
