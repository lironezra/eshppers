import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart.actions'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTruck, faUndoAlt } from "@fortawesome/free-solid-svg-icons";

import BagPanel from '../../components/bag-panel/bag-panel.component';

import PaymentImage from '../../assets/payment-methods.png';

import './bag.styles.scss';

const BagPage = ({ totalCartItemsQuantity, cartItems, totalPrice, removeItem }) => {   
    let cartContent = null; 
    useEffect(() => {
        document.body.style.backgroundColor = '#eee';

        return () => {
            document.body.style.backgroundColor = 'white';
        };
    }, []);

    if (totalCartItemsQuantity === 0) {
        cartContent = 
            <div className='bag-empty-container'>
                <FontAwesomeIcon className='icon' icon={faShoppingBag} />
                <h2>Your bag is empty</h2>
                <p>But the items below were moved to your Saved Items – <br /> so you can shop them again if you like! Why?</p>
            </div>
    } else {
        cartContent =             
            <div className='bag-content-wrapper'>
                <div className='bag-content-holder'>
                    <div className='bag-title-holder'>
                        <h2 className='title'>MY BAG</h2>
                        <p className='bag-expiry-warning'>Items are reserved for 60 minutes</p>
                    </div>
                    <div className='bag-item-list'>
                        <ul className='bag-items'>
                            {
                                cartItems.map(item => {
                                    return (<li key={item.id} className='bag-item'>
                                                <div className='item-img-wrapper'>
                                                    <img src={item.imageUrl} alt='cart-item' />
                                                </div>
                                                <div className='item-description-wrapper'>
                                                    <p className='price'>{item.price}$</p>
                                                    <p className='name'>{item.name}</p>
                                                    <div className='bag-item-variants'>
                                                        <select className='size-options' defaultValue={item.size}>
                                                            <option>XS</option>
                                                            <option>S</option>
                                                            <option>M</option>
                                                            <option>L</option>
                                                            <option>XL</option>
                                                        </select>
                                                        <span className='quantity-holder'>Qty</span>
                                                        <select className='quantity-options'  defaultValue={item.quantity}>
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
                                                    <FontAwesomeIcon className='icon' size='lg' icon={faTimes} onClick={() => removeItem(item)} />
                                                </div>
                                            </li>)
                                })
                            }
                        </ul>
                    </div>
                    <h2 className='bag-sub-total'>
                        <span className='sub-total-text'>sub-total</span>
                        <span>{totalPrice} $</span>
                    </h2>
                </div>
                <div className='bag-main-bottom-panel'>
                    <BagPanel 
                        icon={faTruck} 
                        header='FREE* STANDART DELIVERY' 
                        description='Faster delivery options available to most countries.'/>
                    <BagPanel 
                        icon={faUndoAlt} 
                        header='FREE & EASY RETURNS' 
                        description='Send it back within 45 days of receiving your order.' />
                </div>
            </div>

    }

    
    return (
        <div className='bag-holder'>
            {cartContent}

            <div className='bag-secondary-content-wrapper'>
                <div className='bag-title-holder-total'>
                    <h2 className='title'>TOTAL</h2>
                </div>
                <p className='bag-subtotal-title-holder'>
                    <span className='subtotal-title'>Sub-total</span>
                    <span className='subtotal-value'>{totalPrice} $</span>
                </p>
                <button className='bag-checkout-btn'>CHECKOUT</button>
                <div className='bag-payment-options-holder'>
                    <span className='payment-options-text'>WE ACCEPT:</span>
                    <img className='payment-image' src={PaymentImage} alt='payment' />
                </div>
            </div>  
        </div>
    );
};

const mapStateToProps = state => {
    return {
        totalCartItemsQuantity: state.cart.totalCartItemsQuantity,
        cartItems: state.cart.cartItems,
        totalPrice: state.cart.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BagPage);