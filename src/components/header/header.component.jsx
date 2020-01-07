import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import AppLogo from '../../assets/app-logo.png';
import CartIcon from '../cart-icon/cart-icon.component';
import SavedItemsIcon from '../saved-items-icon/saved-items-icon.component';
import UserAccountIcon from '../user-account-icon/user-account-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import MyAccountDropDown from '../my-account-dropdown/my-account-dropdown.component';

import './header.styles.scss';

class Header extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            showMyAccountMenu: false,
            showCartDropdown: false
            // showMyAccountMenu: true,
            // showCartDropdown: true
        }
    }
    
    toggleMyAccountMenu = (hide) => {
        this.setState({ showMyAccountMenu: hide })
    }

    toggleCartDropdown = (hide) => {
        this.setState({ showCartDropdown: hide })
    }

    render () {
        return (
            <div className='header'>
                <Link className='logo-container' to='/'>
                    <img className='app-logo' src={AppLogo} alt='app=logo' />
                </Link>
                <div className='options'>
                    <NavLink  className='option' activeClassName='is-active' to='/shop'>
                        SHOP                    
                    </NavLink>     
                    <NavLink className='option' activeClassName='is-active' to='/women'>
                        WOMEN                   
                    </NavLink>   
                    <NavLink className='option' activeClassName='is-active' to='/men'>
                        MEN                   
                    </NavLink> 
                </div>
                <div className='user-options'>
                    <div className='my-account-option' 
                        onMouseEnter={() => this.toggleMyAccountMenu(true)}
                        onMouseLeave={() => this.toggleMyAccountMenu(false)} >
                        <UserAccountIcon />
                        {
                            this.state.showMyAccountMenu ? <MyAccountDropDown /> : null   
                        }                  
                    </div>
                    <div>
                        <SavedItemsIcon />
                    </div>
                    <div className='cart-option' 
                        onMouseEnter={() => this.toggleCartDropdown(true)}
                        onMouseLeave={() => this.toggleCartDropdown(false)} >
                        <CartIcon />
                        {
                            this.state.showCartDropdown && this.props.isAuthenticated ? <CartDropdown />  : null   
                        }                  
                    </div>
                </div>
            </div>
        );
    }   
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps)(Header);