import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AppLogo from '../../assets/app-logo.png';
import CartIcon from '../cart-icon/cart-icon.component';
import SavedItemsIcon from '../saved-items-icon/saved-items-icon.component';
import UserAccountIcon from '../user-account-icon/user-account-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import MyAccountDropDown from '../my-account-dropdown/my-account-dropdown.component';

import './header.styles.scss';

const Header = ({ hidden, myAccountHidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <img className='app-logo' src={AppLogo} alt='app=logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='shop'>
                    SHOP                    
                </Link>     
                <Link className='option' to='women'>
                    WOMEN                   
                </Link>   
                <Link className='option' to='men'>
                    MEN                   
                </Link>       
            </div>
            <div className='user-options'>
                <UserAccountIcon />
                <SavedItemsIcon />
                <CartIcon />
            </div>
            {
                hidden ? null : 
                <CartDropdown />
            }
            {
                myAccountHidden ? null : 
                <MyAccountDropDown />
            }
        </div>
    );
};

const mapStateToProps = ({ cart: { hidden }, myAccount: { myAccountHidden } }) => {
    return {
        hidden,
        myAccountHidden
    };
};

export default connect(mapStateToProps)(Header);