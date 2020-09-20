import axios from 'axios';
import { userConstants } from '../constants';

export const userActions = {
    login,
    logout,
    failure,
    register,
    success,
    request,
    authorize
}


function request() {
    return {
        type: userConstants.LOGIN_REQUEST
    };
};

// Authentication with just JWT token.
export function authorize() {
    return async dispatch => {
        try {
            dispatch(request());
            const res = await axios.post('/api/auth/authorize', { withCredentials: true });
            dispatch(success(res.data.token, res.data.userId));
        } catch(err) {
            dispatch(failure(userConstants.LOGIN_FAILURE, err.response.data.message));
        }
    }
}

// Authentication with Login details.
function login(email, password) {
    return async dispatch => {
        try {
            dispatch(request());
            const res = await axios.post('/api/auth/login', { email: email, password: password }, { withCredentials: true });
            dispatch(success(res.data.token, res.data.userId));
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
            const res = await axios.post('/api/auth/register', { username: username, email: email, password: password }, { withCredentials: true });
            dispatch(success(res.data.token, res.data.userId));
        } catch (err) {
            dispatch(failure(userConstants.REGISTER_FAILURE, err.response.data.message))
        }
    }
}

function logout() {
    return async dispatch => {
        try {
            await axios.post('/api/auth/logout', { withCredentials: true });
            dispatch(unauthorize());
        } catch (err) {
            dispatch(failure(userConstants.LOGOUT, err.response.data.message))
        }
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

function unauthorize() {
    return {
        token: null,
        userId: null,
        error: null,
        type: userConstants.LOGOUT
    }
}