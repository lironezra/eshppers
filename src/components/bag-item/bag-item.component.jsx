import React, { useState } from 'react';
import {Animated} from "react-animated-css";
import { connect } from 'react-redux';

import { removeItem, updateItem } from '../../redux/cart/cart.actions'
import  { mapSizeOptionsByProductType } from '../../utils/product-sizing-mapper';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Spinner from '../Shared/spinner/spinner.component';

import './bag-item.styles.scss';

const BagItem = (props) => {
    const { id, imageUrl, price, name, size, quantity, productType } = props.item;
    const { removeItem, updateItem, cartItems } = props;

    const [deleted, setClassItemDeleted] = useState('');
    const [editActive, setEditActiveClass] = useState(false); 
    const [selectedSize, setSelectedSize] = useState(size);
    const [selectedQuantity, setSelectedQuantity] = useState(quantity);
    const [loading, setLoading] = useState(false);

    const onRemoveItem = (item) => {
        setClassItemDeleted('deleted');
        setTimeout(() => {
            removeItem(item)  
        }, 2000);
    };

    const cancelEditClicked = () => {
        setEditActiveClass(false);
        setSelectedSize(size);
        setSelectedQuantity(quantity);
    };

    const updateItemClicked = ({id, size, quantity}) => {
        setLoading(true);
            
        let updatedValues = {};
        const updatedItemIndex = cartItems.findIndex(item => item.id === id && item.size === size && item.quantity === quantity);
        
        if (cartItems[updatedItemIndex].size !== selectedSize && cartItems[updatedItemIndex].quantity !== selectedQuantity) {
            updatedValues = { size: selectedSize , quantity: parseInt(selectedQuantity) };
        } else if (cartItems[updatedItemIndex].size === selectedSize && cartItems[updatedItemIndex].quantity !== selectedQuantity) {
            updatedValues = { quantity: parseInt(selectedQuantity) };
        } else if(cartItems[updatedItemIndex].size !== selectedSize && cartItems[updatedItemIndex].quantity === selectedQuantity) {
            //updatedValues = { size: selectedSize }
            updatedValues = { size: selectedSize, quantity: parseInt(selectedQuantity) }
        }

        updateItem(props.item, updatedValues);
        setLoading(false);
        setEditActiveClass(false)
    }

    const currentBagItem = cartItems.find(item => item.id === id && item.size === size);

    return(
        <>
            <li key={id} className={`bag-item ${deleted}`}>
                {
                    loading ? <Spinner /> : 
                    <>
                        <div className='item-img-wrapper'>
                            <img src={imageUrl} alt='cart-item' />
                        </div>
                        <div className='item-description-wrapper'>
                            <p className='price'>{price}$</p>
                            <p className='name'>{name}</p>
                            <div className='bag-item-variants'>
                                <select 
                                    className='size-options' 
                                    name='size' 
                                    value={currentBagItem.size}
                                    onChange={(e) => {
                                        setEditActiveClass(true);
                                        setSelectedSize(e.target.value);
                                        }}>
                                    {
                                        mapSizeOptionsByProductType(productType).map(option => <option key={option} className='option'>{option}</option>)
                                    }
                                </select>
                                <span className='quantity-holder'>Qty</span>
                                <select 
                                    className='quantity-options'
                                    name='quantity'  
                                    value={currentBagItem.quantity}
                                    onChange={(e) => {
                                        setEditActiveClass(true);
                                        setSelectedQuantity(e.target.value);
                                        }}>
                                    {
                                        Array.from("0123456789", option => {
                                            return <option key={option} className='option'>{parseInt(option) + 1}</option>
                                        })
                                    }
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
                        <Animated 
                            animationIn="slideInDown" 
                            animationOut="slideOutUp" 
                            animateOnMount={false} 
                            isVisible={editActive ? true : false}
                            animationInDuration={500} 
                            animationOutDuration={500}>
                            <div className={`item-edit-actions ${editActive ? 'edit-active' : ''}`}>                
                                <button className='cancel-update-btn' onClick={() => cancelEditClicked()}>Cancel</button>
                                <button className='update-item-btn' onClick={() => updateItemClicked(props.item)}>Update</button>
                            </div>
                        </Animated>
                    </>
                }
            </li>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItem(item)),
        updateItem: (item, updatedValues) => dispatch(updateItem(item, updatedValues))
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BagItem);