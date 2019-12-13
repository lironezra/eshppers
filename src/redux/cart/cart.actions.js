import * as actionTypes from './cart.types';

export const toggleCartHidden = hidden => {
    return {
        type: actionTypes.TOGGLE_CART_HIDDEN,
        hidden: hidden
    }
};