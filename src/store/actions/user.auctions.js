import axios from 'axios';
import { userConstants } from '../constants/';

export const userActions = {
    login,
    logout,
    failure,
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

            // Dispatch that the authentication request was successfull.
            dispatch(success(res.data.token, res.data.userId));

            // Set the local storage items
            localStorage.setItem("JWT_TOKEN", res.data.token);
            localStorage.setItem("USER_ID", res.data.userId);

            // Not sure if this is needed, will have to do some testing.
            axios.defaults.headers.common["Authorization"] = res.data.token;

        } catch(err) {
            // If some fails, dispatch the failure.
            dispatch(failure(err.response.data.message));
        }
    }
}

function logout() {
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("USER_ID");

    return {
        type: userConstants.LOGOUT
    }
}

function failure(error) {
    return {
        type: userConstants.LOGIN_FAILURE,
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