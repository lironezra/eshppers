import React, { useState } from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart.actions'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import './bag-item.styles.scss';

const BagItem = (props) => {
    const [deleted, setClassItemDeleted] = useState('');
    const {id, imageUrl, price, name, size, quantity} = props.item;
    const { removeItem } = props;

    const onRemoveItem = (item) => {
        setClassItemDeleted('deleted');
        setTimeout(() => {
            removeItem(item)  
        }, 2000);
    };

    return(
        <li key={id} className={`bag-item ${deleted}`}>
            <div className='item-img-wrapper'>
                <img src={imageUrl} alt='cart-item' />
            </div>
            <div className='item-description-wrapper'>
                <p className='price'>{price}$</p>
                <p className='name'>{name}</p>
                <div className='bag-item-variants'>
                    <select className='size-options' defaultValue={size}>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <span className='quantity-holder'>Qty</span>
                    <select className='quantity-options'  defaultValue={quantity}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                    </select>
                </div>
                <button className='save-for-later-btn'>
                    <FontAwesomeIcon className='icon' icon={faHeart} />
                    Save for later
                </button>
            </div>
            <div className='bag-item-remove'>
                <FontAwesomeIcon className='icon' size='lg' icon={faTimes} onClick={() => onRemoveItem(props.item)} />
            </div>
        </li>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItem(item))
    }
}

export default connect(null, mapDispatchToProps)(BagItem);