import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// Import the transformer creator
import expireReducer  from 'redux-persist-expire';

import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
    transforms: [
        expireReducer('cart', {
            persistedAtKey: '__persisted_at',
            expireSeconds: 3600,
            expiredState: {
                cartItems: [],
                totalCartItemsQuantity: 0,
                totalPrice: 0
            },
            autoExpire: true
        })
     ]
};

const appReducers = combineReducers({
    /* App top-level reducers */
    auth: authReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    user: userReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_REQUEST') {
        state = undefined
    }

    return appReducers(state, action)
}

export default persistReducer(persistConfig, rootReducer);