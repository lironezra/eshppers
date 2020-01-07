import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorBox from '../error-box/error-box.component';
import FormSelectInput from '../form-select-input/form-select-input.component';

import './product-card.styles.scss';

const ProductCard = ({location, addItem}) => {
    const [size, setSize] = useState('Please select');
    const [error, setError] = useState(false);
    const { item, item : { name, price, imageUrl } } = location.state;

    const handleChange = size => {
        setError(false);
        setSize(`${size}`);
    }

    const handleAddToCartClicked = item => {
        if (size === 'Please select') {
            setError(true);
        } else {
            setError(false);
            item.size = size;
            addItem(item);
            
        }
    }

    return (
        <div className='product-card'>
            <div className='product-photo'>
                <img className='product-image' src={imageUrl} alt='product-img'/>
            </div>
            <div className='product-description'>
                <h2 className='name'>{name}</h2>
                <p className = 'description'>
                    Some description item will be suplly...
                </p>
                <p className='price'>{price.toFixed(2)} $</p>
                <div className='size-section'>
                    <label className='size-name'>SIZE:</label><br />
                    <FormSelectInput 
                        options={['XS', 'S', 'M', 'L', 'XL', 'XXL']}
                        handleSelectChange={handleChange}
                        />  
                    { error ? <ErrorBox>Please select from the available size</ErrorBox> : null }
                </div>
                <div className='product-buttons'>
                    <button type="button" className="add-to-cart" 
                        onClick={() => handleAddToCartClicked(item)}>
                        ADD TO CART
                    </button>
                    <button type="button" className="save-for-later">
                        <span><FontAwesomeIcon className='icon-heart' icon={faHeart} /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(ProductCard);
