import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import './cart-icon.styles.scss';

const CartIcon = ({ isAuthenticated }) => {
    let cartIconContent = 
        <Link
            to={'/cart'}

            //to={isAuthenticated ? '/cart' : '/error'}
            className='cart-icon' >  
                <FontAwesomeIcon className='icon' icon={faShoppingBag} />
                <span className='item-count'>3</span>
        </Link>;
    
    return (
        cartIconContent
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};  

export default connect(mapStateToProps)(CartIcon);