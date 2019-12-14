import * as actionTypes from './cart.types';

import { addItemToCart } from './cart.utils';


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_HIDDEN: return toggleCartHidden(state, action);
        case actionTypes.ADD_ITEM: return addItem(state,action);
        default:
            return state;
    }
};

const addItem = (state, action) => {
    return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item)
    };
};

const toggleCartHidden = (state, action) => {
    return {
        ...state,
        hidden: action.hidden
    }
};

export default reducer;