import { auth, updateUserProfileDocument } from '../../firebase/firebase.utils';
import * as actionTypes from './user.types';

const getAuthenticatedUserRequest = () => {
    return { 
        type: actionTypes.GET_AUTHENTICATED_USER_REQUEST
    }
}

const getAuthenticatedUserSuccess = (user) => {
    return { 
        type: actionTypes.GET_AUTHENTICATED_USER_SUCCESS,
        user
    }
}

const getAuthenticatedUserFailure = (error) => {
    return { 
        type: actionTypes.GET_AUTHENTICATED_USER_FAILURE,
        error: error
    }
}

const requestEditUserProfile = () => {
    return {
        type: actionTypes.EDIT_USER_PROFILE_REQUEST
    }
}

const successEditUserProfile = user => {
    return {
        type: actionTypes.EDIT_USER_PROFILE_SUCCESS,
        user
    }
}

const failureEditUserProfile = error => {
    return {
        type: actionTypes.EDIT_USER_PROFILE_FAILURE,
        error
    }
}

export const updateUserProfile = (userUid, updateData) => dispatch => {
    dispatch(requestEditUserProfile());

    updateUserProfileDocument(userUid, {
        firstName: updateData.firstName,
        lastName: updateData.lastName,
        email: updateData.email,
        //dateOfBirth : updateData.dateOfBirth
      })
      .then((updatedUser) => {
          dispatch(successEditUserProfile(updatedUser))
      })
      .catch(error => {
          dispatch(failureEditUserProfile(error))
      })
}

export const getAuthenticatedUser = () => dispatch => {
    dispatch(getAuthenticatedUserRequest())
    auth.onAuthStateChanged(user => {
        if(user) {
            dispatch(getAuthenticatedUserSuccess(user));
        } else {
            dispatch(getAuthenticatedUserFailure('Error while getting current authenticated user'))
        }
    });
}