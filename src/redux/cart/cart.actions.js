import * as actionTypes from './cart.types';

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