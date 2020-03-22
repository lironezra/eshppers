import { auth,  createUserProfileDocument } from '../../firebase/firebase.utils';
import * as actionTypes from './auth.types';

const requestSignup = () => {
    return {
        type: actionTypes.SIGNUP_REQUEST
    };
};

const reciveSignup = (userUid, userDisplayName) => {
  return {
      type: actionTypes.SIGNUP_SUCCESS,
      userUid,
      userDisplayName
  }  
};

const signupError = error => {
    return {
      type: actionTypes.SIGNUP_FAILURE,
      error  
    };
};

const requestLogin = () => {
    return {
      type: actionTypes.LOGIN_REQUEST
    };
};

const receiveLogin = (userUid, userDisplayName) => {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      userUid,
      userDisplayName
    };
};

const loginError = error => {
    return {
      type: actionTypes.LOGIN_FAILURE,
      error
    };
};

const requestLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('uid');
    return {
      type: actionTypes.LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
      type: actionTypes.LOGOUT_SUCCESS
    };
};

const logoutError = (error) => {
    return {
      type: actionTypes.LOGOUT_FAILURE,
      error
    };
};

const verifyRequest = () => {
    return {
      type: actionTypes.VERIFY_REQUEST
    };
};
  
const verifySuccess = () => {
    return {
        type: actionTypes.VERIFY_SUCCESS
    };
};

export const signupUser = (newUser) => dispatch => {
    dispatch(requestSignup());
    auth
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(({user}) => {
        // Set the authenticate user displayName
        user.updateProfile({
            displayName: newUser.displayName
        })
        .then(() => {
            createUserProfileDocument(user);
        })
        .catch(error => {
            dispatch(signupError(error))
        });   
        dispatch(reciveSignup(user.uid, user.displayName));
    })
    .catch(error => {
        dispatch(signupError(error));
    })
};

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    auth
    .signInWithEmailAndPassword(email,password)
    .then(({user}) => {
        dispatch(receiveLogin(user.uid, user.displayName));
        dispatch(checkAuthTimeout(3600));
    })
    .catch(error => {
        dispatch(loginError(error));
    })
};

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    auth
    .signOut()
    .then(() => {
        dispatch(receiveLogout());
    })
    .catch(error => {
        dispatch(logoutError(error));
    })
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    auth
    .onAuthStateChanged(user => {
        createUserProfileDocument(user);
        if (user !== null) {
            dispatch(receiveLogin(user.uid, user.displayName));
            dispatch(storeAuthenticatedUserDataToLocalStorage(user));
            dispatch(checkAuthTimeout(3600))
        }
        dispatch(verifySuccess());
    });
};

export const checkAuthTimeout = (expiratioTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logoutUser());
        }, expiratioTime * 1000);
    };
};

const storeAuthenticatedUserDataToLocalStorage =  ({ refreshToken, uid }) => {
    return dispatch => {
        const expirationDate = new Date(new Date().getTime() + ( 3600 * 1000 ));
        localStorage.setItem('token', refreshToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('uid', uid);
    }
};

