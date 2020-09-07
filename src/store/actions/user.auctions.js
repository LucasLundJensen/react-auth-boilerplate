import axios from 'axios';
import { userConstants } from '../constants/';

export const userActions = {
    login,
    logout,
    failure,
    register,
    success,
    request
}


function request() {
    return {
        type: userConstants.LOGIN_REQUEST
    };
};

function login(email, password) {
    return async dispatch => {
        try {
            // Dispatch that the authentication request has been sent
            dispatch(request());

            const res = await axios.post('http://localhost:3001/api/auth/login', { email: email, password: password }, { withCredentials: true });

            // Dispatch that the authentication request was successful.
            dispatch(success(res.data.token, res.data.userId));

            // Set LocalStorage to only things we frequently read maybe?

            // This sets the default Authrization header for axios to use the token, this makes it so we don't have to send our auth token with every time manually.
            axios.defaults.headers.common["Authorization"] = res.data.token;

        } catch(err) {
            // If fails, dispatch the failure.
            dispatch(failure(userConstants.LOGIN_FAILURE, err.response.data.message));
        }
    }
}

function register(username, email, password) {
    return async dispatch => {
        try {
            dispatch(request());
            const res = await axios.post('http://localhost:3001/api/auth/register', { username: username, email: email, password: password });
            
            // Set LocalStorage to only things we frequently read maybe?

            dispatch(success(res.data.token, res.data.userId));
            axios.defaults.headers.common["Authorization"] = res.data.token;

        } catch (err) {
            dispatch(failure(userConstants.REGISTER_FAILURE, err.response.data.message))
        }
    }
}

function logout() {
    return {
        token: null,
        userId: null,
        error: null,
        type: userConstants.LOGOUT
    }
}

function failure(type, error) {
    return {
        type: type,
        error: error
    }
}

function success(token, userId) {
    return {
        type: userConstants.LOGIN_SUCCESS,
        token: token,
        userId: userId
    }
}