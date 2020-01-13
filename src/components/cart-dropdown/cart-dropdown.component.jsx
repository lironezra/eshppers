import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, totalCartItemsQuantity, totalPrice, show }) => {
    const className = ['cart-dropdown' , show ? 'dropdown-open' : 'dropdown-closed'];
    return (
        <div className={className.join(' ')}>
            <div className='cart-dropdown-header'>
                <span><strong>My Bag</strong>, {totalCartItemsQuantity} items</span>
            </div>
            <div className='cart-items'>
                {cartItems.map((cartItem, index) => (
                    <CartItem key={index} item={cartItem} />
                ))}
            </div>
            <div className='sub-total-price'>
                <span>Sub-total</span>
                <span>{totalPrice.toFixed(2)}$</span>
            </div>
            <div className='btn-container'>
                <CustomButton btnType='regular'>CHECKOUT</CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        totalCartItemsQuantity: state.cart.totalCartItemsQuantity,
        totalPrice: state.cart.totalPrice
    }
};

export default connect(mapStateToProps)(CartDropDown);