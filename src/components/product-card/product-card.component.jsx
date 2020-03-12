import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { addItem } from '../../redux/cart/cart.actions';
import  { mapSizeOptionsByProductType } from '../../utils/product-sizing-mapper';

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorBox from '../error-box/error-box.component';
import FormSelectInput from '../form-select-input/form-select-input.component';

import './product-card.styles.scss';

const ProductCard = ({location, location: { state }, addItem}) => {
    console.log(state)
    const [size, setSize] = useState('Please select');
    const [error, setError] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
      
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

    if (state) {
        return (  
            <div className='product-card'>
                <div className='product-photo'>
                    <img className='product-image' src={state.item.imageUrl} alt='product-img'/>
                </div>
                <div className='product-description'>
                    <h2 className='name'>{state.item.name}</h2>
                    <p className = 'description'>
                        Some description item will be suplly...
                    </p>
                    <p className='price'>{state.item.price.toFixed(2)} $</p>
                    <div className='size-section'>
                        <label className='size-name'>SIZE:</label><br />
                        <FormSelectInput 
                            options={mapSizeOptionsByProductType(state.item.productType)}
                            handleSelectChange={handleChange}
                            />  
                        { error ? <ErrorBox>Please select from the available size</ErrorBox> : null }
                    </div>
                    <div className='product-buttons'>
                        <button type="button" className="add-to-cart" 
                            onClick={() => handleAddToCartClicked(state.item)}>
                            ADD TO CART
                        </button>
                        <button type="button" className="save-for-later">
                            <span><FontAwesomeIcon className='icon-heart' icon={faHeart} /></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return <p>Item Not Found</p>
    }
};


const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

// ProductCard.propTypes = {
//     state: PropTypes.object.isRequired,
// }   

export default connect(null, mapDispatchToProps)(ProductCard);
