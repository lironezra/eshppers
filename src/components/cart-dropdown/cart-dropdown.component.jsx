import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = (props) => {
    const { cartItems, totalCartItemsQuantity, totalPrice, show } = props;
    const className = ['cart-dropdown' , show ? 'dropdown-open' : 'dropdown-closed'];

    const viewBagClicked = () => {
        props.history.push('/cart');
    };

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
                <button className='cart-view-bag-btn' onClick={() => viewBagClicked()}>VIEW BAG</button>
                <button className='cart-checkout-btn'>CHECKOUT</button>
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

export default withRouter(connect(mapStateToProps)(CartDropDown));