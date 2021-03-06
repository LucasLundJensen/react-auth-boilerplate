import { userConstants } from '../constants';
import { updateObject } from '../helpers';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: true
};

function request(state, action) {
    return updateObject(state, {error: null, loading: true});
}

function success(state, action) {
    return updateObject(state, {
        token: action.token,
        userId: action.userId,
        loading: false,
        error: null
    })
}

function failure(state, action) {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

function logout(state, action) {
    return updateObject(state, {
        token: null,
        userId: null,
        error: null
    })
}

const authenticationReducer = (state = initialState, action) => {
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            return request(state, action);
        case userConstants.LOGIN_FAILURE:
            return failure(state, action);
        case userConstants.REGISTER_FAILURE:
            return failure(state, action);
        case userConstants.LOGIN_SUCCESS:
            return success(state, action);
        case userConstants.LOGOUT:
            return logout(state, action);
        default:
            return state;
    }
}

export default authenticationReducer;