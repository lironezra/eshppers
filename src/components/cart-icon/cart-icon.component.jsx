import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


import './cart-icon.styles.scss';

const CartIcon = ({ totalCartItemsQuantity }) => {
    let cartIconContent = 
        <Link
            to={'/cart'}
            className='cart-icon' >  
                <FontAwesomeIcon className='icon' icon={faShoppingBag} />
                <span className='item-count'>{totalCartItemsQuantity !== 0 ? totalCartItemsQuantity : null}</span>
        </Link>;
    return (
        cartIconContent
    );
};

const mapStateToProps = state => {
    return {    
        totalCartItemsQuantity: state.cart.totalCartItemsQuantity
    };
};  

export default connect(mapStateToProps)(CartIcon);