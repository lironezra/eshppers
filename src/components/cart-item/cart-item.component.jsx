import React from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart.actions'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

import './cart-item.styles.scss';

const CartItem = ({ item, removeItem }) => (
    <>
        <div className='cart-item'>
            <img src={item.imageUrl} alt='item'/>
            <div className='item-details'>
                <span className='price'>{item.price.toFixed(2)}$</span>
                <span className='name'>{item.name}</span>
                {/* <span className='size'>S</span> */}
                <span className='quantity'>Qty: {item.quantity}</span>
                <button className='remove-item' onClick={() => removeItem(item)}>
                    <FontAwesomeIcon icon={faTrashAlt} className='icon' />
                </button>
            </div>
        </div>
        <hr className='hr'/>
    </>
);

const mapDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);