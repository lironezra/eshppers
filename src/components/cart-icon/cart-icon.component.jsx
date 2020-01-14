import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


import './cart-icon.styles.scss';

const CartIcon = ( props ) => {
    const { totalCartItemsQuantity, onMouseEnter } = props;

    return (
        <div
            className='cart-icon'
            onMouseEnter={onMouseEnter} >  
                <FontAwesomeIcon className='icon' icon={faShoppingBag} />
                <span className='item-count'>{totalCartItemsQuantity !== 0 ? totalCartItemsQuantity : null}</span>
        </div>
    );
};

const mapStateToProps = state => {
    return {    
        totalCartItemsQuantity: state.cart.totalCartItemsQuantity
    };
};  

export default connect(mapStateToProps)(CartIcon);