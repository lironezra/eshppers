import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';

const appReducers = combineReducers({
    /* App top-level reducers */
    auth: authReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_REQUEST') {
        state = undefined
    }

    return appReducers(state, action)
}


export default rootReducer;