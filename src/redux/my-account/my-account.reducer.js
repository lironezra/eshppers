import * as actionTypes from './my-account.types';

const INITIAL_STATE = {
    myAccountHidden: true
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MY_ACCOUNT_HIDDEN: return toggleMyAccountHidden(state, action)
        default:
            return state;
    }
}

const toggleMyAccountHidden = (state, action) => {
    return {
        ...state,
        myAccountHidden: !state.myAccountHidden
    }
}

export default reducer;