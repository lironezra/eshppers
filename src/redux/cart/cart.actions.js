import * as actionTypes from './cart.types';

export const toggleCartHidden = hidden => {
    return {
        type: actionTypes.TOGGLE_CART_HIDDEN,
        hidden: hidden
    }
};

export const addItem = item => {
    return {
        type:actionTypes.ADD_ITEM,
        item: item
    };
};

export const removeItem = item => {
    return {
        type: actionTypes.REMOVE_ITEM,
        item: item
    }
}