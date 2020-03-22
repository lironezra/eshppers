import * as actionTypes from './user.types';

const INITIAL_STATE = {
    user: null,
    isGettingUserProfile: false,
    gettingUserProfileError: null,
    isUpdatingProfile: false,
    updateProfileError: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_AUTHENTICATED_USER_REQUEST: return getUserProfileRequest(state, action);
        case actionTypes.GET_AUTHENTICATED_USER_SUCCESS: return getUserProfileSuccess(state, action);
        case actionTypes.GET_AUTHENTICATED_USER_FAILURE: return getUserProfileFailure(state, action);

        case actionTypes.EDIT_USER_PROFILE_REQUEST: return editUserProfileRequest(state, action);
        case actionTypes.EDIT_USER_PROFILE_SUCCESS: return editUserProfileSucces(state, action);
        case actionTypes.EDIT_USER_PROFILE_FAILURE: return editUserProfileFailure(state, action);
        default:
            return state;
    }
};

const getUserProfileRequest = (state, action) => {
    return {
        ...state,
        isGettingUserProfile: true,
        gettingUserProfileError: null
    }
}

const getUserProfileSuccess = (state, action) => {
    return {
        ...state,
        isGettingUserProfile: false,
        user: action.user
    }
}
const getUserProfileFailure = (state, action) => {
    return {
        ...state,
        isGettingUserProfile: false,
        gettingUserProfileError: action.error
    }
}

const editUserProfileRequest = (state, action) => {
    return {
        ...state,
        user: null,
        isUpdatingProfile: true,
        updateProfileError: null
    }
} 

const editUserProfileSucces = (state, action) => {
    return {
        ...state,
        isUpdatingProfile: false,
        user: action.user,
        updateProfileError: null
    }
} 

const editUserProfileFailure = (state, action) => {
    return {
        ...state,
        user: null,
        isUpdatingProfile: false,
        updateProfileError: action.error
    }
} 

export default userReducer;