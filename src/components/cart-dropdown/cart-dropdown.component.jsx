import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-dropdown-header'>
                <span><strong>My Bag</strong>,  1 item</span>
            </div>
            <div className='cart-items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropDown;