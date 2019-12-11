import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import cartReducer from './cart/cart.reducer';
import myAccountReducer from './my-account/my-account.reducer';

const appReducers = combineReducers({
    /* App top-level reducers */
    auth: authReducer,
    cart: cartReducer,
    myAccount: myAccountReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_REQUEST') {
        state = undefined
    }

    return appReducers(state, action)
}


export default rootReducer;