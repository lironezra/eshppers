import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const appReducers = combineReducers({
    /* App top-level reducers */
    auth: authReducer,
    cart: cartReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_REQUEST') {
        state = undefined
    }

    return appReducers(state, action)
}


export default persistReducer(persistConfig, rootReducer);