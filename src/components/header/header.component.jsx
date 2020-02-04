import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

import AppLogo from '../../assets/app-logo.png';
import CartIcon from '../cart-icon/cart-icon.component';
import SavedItemsIcon from '../saved-items-icon/saved-items-icon.component';
import UserAccountIcon from '../user-account-icon/user-account-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import MyAccountDropDown from '../my-account-dropdown/my-account-dropdown.component';
import DrawerToggleButton from '../side-drawer/drawer-toggle-button.component';

import './header.styles.scss';

class Header extends Component  {
    constructor(props) {
        super(props);
        this.toggleCartDropdown = this.toggleCartDropdown.bind(this);

        this.state = {
            showMyAccountMenu: false,
            showCartDropdown: false
            // showMyAccountMenu: true,
             //showCartDropdown: true
        }
    }

    toggleMyAccountMenu = (hide) => {
        this.setState({ showMyAccountMenu: hide })
    }

    toggleCartDropdown = (hide) => {
        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            this.setState({ showCartDropdown: hide })
        }
    }

    render () {
        return (
            <div className='header'>
                <div className='side-menu-button'>
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
                <Link className='logo-container' to='/'>
                    <img className='app-logo' src={AppLogo} alt='app=logo' />
                </Link>
                <div className='header-navigation-items'>
                    <ul>
                        <li>
                            <Link className='navigation-item' to='/shop'>
                                SHOP                    
                            </Link>     
                        </li>
                        <li>
                            <Link className='navigation-item' to='/women'>
                                WOMEN                   
                            </Link>   
                        </li>
                        <li>
                            <Link className='navigation-item' to='/men'>
                                MEN                   
                            </Link> 
                        </li>
                    </ul>
                </div>
                <div className='user-options'>
                    <div className='my-account-option'
                        onMouseLeave={() => this.toggleMyAccountMenu(false)} >
                        <UserAccountIcon 
                            onMouseEnter={() => this.toggleMyAccountMenu(true)} />
                        <MyAccountDropDown 
                            show={this.state.showMyAccountMenu}
                            />
                    </div>
                    <div>
                        <SavedItemsIcon />
                    </div>
                    <div className='cart-option' 
                        onMouseLeave={() => this.toggleCartDropdown(false)}>
                        <CartIcon 
                            onMouseEnter={() => this.toggleCartDropdown(true) } />
                        { this.props.history.location.pathname === '/cart' ?
                             null : <CartDropdown 
                                        viewBagClickedHandler={() => this.toggleCartDropdown(false)}  
                                        show={this.state.showCartDropdown}/>}
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

export default withRouter(connect(mapStateToProps)(Header));