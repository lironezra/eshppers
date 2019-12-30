import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart.actions'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

import './cart-item.styles.scss';

const CartItem = ({ item, item: { id, imageUrl, price, name, size, quantity}, removeItem }) => (
    <>
        <div className='cart-item'>
            <img src={imageUrl} alt='item'/>
            <div className='item-details'>
                <Link to={{
                        pathname: `/product-item/${name}/${id}`,
                        state: {
                            item
                        }   
                    }} 
                    className='item-link'>
                    <span className='price'>{price.toFixed(2)}$</span>
                    <br />
                    <span className='name'>{name}</span>
                    <br />
                    <span className='size'>{size}</span>
                    <br />
                    <span className='quantity'>Qty: {quantity}</span>
                </Link>
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