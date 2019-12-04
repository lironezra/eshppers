import * as actionTypes from './auth.types';

const INITIAL_STATE = {
    isSigningup: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    signupError: null,
    loginError: null,
    logoutError: null,
    isAuthenticated: false,
    user: {}
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_REQUEST: return signupRequest(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signupSuccess(state, action);
        case actionTypes.SIGNUP_FAILURE: return signupFailuer(state, action);
        case actionTypes.LOGIN_REQUEST: return loginRequest(state, action); 
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action); 
        case actionTypes.LOGIN_FAILURE: return loginFailure(state, action); 
        case actionTypes.LOGOUT_REQUEST: return logoutRequest(state, action); 
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state, action); 
        case actionTypes.LOGOUT_FAILURE: return logoutFailure(state, action); 
        case actionTypes.VERIFY_REQUEST: return verifyRequest(state, action); 
        case actionTypes.VERIFY_SUCCESS: return verifySuccess(state, action); 
        default:
            return state;
    }
};

const signupRequest = (state, action) => {
    return {
        ...state,
        isSigningup: true,
        isAuthenticated: true
    }
}

const signupSuccess = (state, action) => {
    return {
        ...state,
        isSigningup: false,
        isAuthenticated: true,
        user: action.user
    }
}

const signupFailuer = (state, action) => {
    return {
        ...state,
        isSigningup: false,
        isAuthenticated: false,
        signupError: action.error
    }
}

const loginRequest = (state, action) => {
    return {
        ...state,
        isLoggingIn: true,
        isAuthenticated: true
    }
};

const loginSuccess = (state, action) => {
    return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user
    }
};

const loginFailure = (state, action) => {
    return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: action.error
    }
};

const logoutRequest = (state, action) => {
    return {
        ...state,
        isLoggingOut: true,
        logoutError: null
    }
};

const logoutSuccess = (state, action) => {
    return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
    }
};

const logoutFailure = (state, action) => {
    return {
        ...state,
        isLoggingOut: false,
        logoutError: action.error
    }
};

const verifyRequest = (state, action) => {
    return {
        ...state,
        isVerifying: true,
        verifyingError: false
    }
};

const verifySuccess = (state, action) => {
    return {
        ...state,
        isVerifying: false
    }
};

export default reducer;

