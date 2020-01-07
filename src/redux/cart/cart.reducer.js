import * as actionTypes from './cart.types';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    totalCartItemsQuantity: 0,
    totalPrice: 0
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_HIDDEN: return toggleCartHidden(state, action);
        case actionTypes.ADD_ITEM: return addItem(state,action);
        case actionTypes.REMOVE_ITEM: return removeItem(state, action);
        default:
            return state;
    }
};

const addItem = (state, action) => {
    return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item),
        totalCartItemsQuantity: state.totalCartItemsQuantity + 1,
        totalPrice: state.totalPrice + action.item.price
    };
};

const removeItem = (state, action) => {
    return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.item),// change this method
        totalCartItemsQuantity: state.totalCartItemsQuantity - action.item.quantity,
        totalPrice: state.totalPrice - (action.item.quantity * action.item.price) 
    };
};

const toggleCartHidden = (state, action) => {
    return {
        ...state,
        hidden: action.hidden
    }
};

export default reducer;