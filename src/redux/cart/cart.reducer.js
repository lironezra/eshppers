import * as actionTypes from './cart.types';

import { addItemToCart, removeItemFromCart, updateItemFromCart, updateTotalCartItemsQuantity, updateTotalPrice } from './cart.utils';

const INITIAL_STATE = {
    cartItems: [],
    totalCartItemsQuantity: 0,
    totalPrice: 0
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM: return addItem(state,action);
        case actionTypes.REMOVE_ITEM: return removeItem(state, action);
        case actionTypes.UPDATE_ITEM: return updateItem(state, action);
        default:
            return state;
    }
};

const addItem = (state, action) => {
    console.log(state.__persisted_at);
    return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item),
        totalCartItemsQuantity: state.totalCartItemsQuantity + 1,
        totalPrice: state.totalPrice + action.item.price,
        __persisted_at: new Date().getTime()
    };
};

const removeItem = (state, action) => {
    return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.item),// change this method
        totalCartItemsQuantity: state.totalCartItemsQuantity - action.item.quantity,
        totalPrice: state.totalPrice - (action.item.quantity * action.item.price),
        __persisted_at: new Date().getTime()
    };
};

const updateItem = (state, action) => {
    return {
        ...state, 
        cartItems: updateItemFromCart(state.cartItems, action.item, action.updatedValues),
        totalCartItemsQuantity: updateTotalCartItemsQuantity(state.totalCartItemsQuantity, action.item.quantity, action.updatedValues),
        totalPrice: updateTotalPrice(state, action),
        __persisted_at: new Date().getTime()
    }
}

export default reducer;