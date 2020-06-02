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

            const res = await axios.post('http://localhost:3001/api/auth/login', { email: email, password: password });

            // Dispatch that the authentication request was successful.
            dispatch(success(res.data.token, res.data.userId));

            // Set the local storage items
            localStorage.setItem("JWT_TOKEN", res.data.token);
            localStorage.setItem("USER_ID", res.data.userId);

            // Not sure if this is needed, will have to do some testing.
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

            dispatch(success(res.data.token, res.data.userId));

            localStorage.setItem("JWT_TOKEN", res.data.token);
            localStorage.setItem("USER_ID", res.data.userId);
            axios.defaults.headers.common["Authorization"] = res.data.token;

        } catch (err) {
            dispatch(failure(userConstants.REGISTER_FAILURE, err.response.data.message))
        }
    }
}

function logout() {
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("USER_ID");

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