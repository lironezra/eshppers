import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


import './cart-icon.styles.scss';

const CartIcon = ({ onToggleCartHidden }) => {
    return (
        <div className='cart-icon' onClick={onToggleCartHidden}> 
            <FontAwesomeIcon className='icon' icon={faShoppingBag}/>
            <span className='item-count'>3</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleCartHidden: () => dispatch(toggleCartHidden())
    };
};

export default connect(null, mapDispatchToProps)(CartIcon);