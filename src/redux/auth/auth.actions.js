import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import * as actionTypes from './auth.types';

const requestSignup = () => {
    return {
        type: actionTypes.SIGNUP_REQUEST
    };
};

const reciveSignup = user => {
  return {
      type: actionTypes.SIGNUP_SUCCESS,
      user
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

const receiveLogin = user => {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      user
    };
};

const loginError = error => {
    return {
      type: actionTypes.LOGIN_FAILURE,
      error
    };
};

const requestLogout = () => {
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
        dispatch(reciveSignup(user));
    })
    .catch(error => {
        dispatch(signupError(error));
    })
};

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    auth
    .signInWithEmailAndPassword(email,password)
    .then(user => {
        dispatch(receiveLogin(user));
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
      console.log(user)
      if (user !== null) {
        createUserProfileDocument(user);
        dispatch(receiveLogin(user));
      }
      dispatch(verifySuccess());
    });
};


