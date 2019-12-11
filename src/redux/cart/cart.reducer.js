import * as actionTypes from './cart.types';


const INITIAL_STATE = {
    hidden: true
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_HIDDEN: return toggleCartHidden(state, action);
        default:
            return state;
    }
};

const toggleCartHidden = (state, action) => {
    return {
        ...state,
        hidden: !state.hidden
    }
};

export default reducer;