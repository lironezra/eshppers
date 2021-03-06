import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser }  from '../../redux/auth/auth.actions.js'

import CustomIcon from '../custom-icon/custom-icon.component';

import './my-account-dropdown.styles.scss';

const MyAccountDropdown = ({isAuthenticated, onLogout, userDisplayName, show}) => {
    const className = ['my-account-dropdown' , show ? 'dropdown-open' : 'dropdown-closed'];

    return (
        <div className={className.join(' ')}>
            <div className='my-account-menu-items'>
                <div className='my-accout-dropdown-header'>
                {
                    isAuthenticated ? (
                            <Link to='/' onClick={onLogout} className='header-link'>
                                <span className='hello-user-text'>Hi {userDisplayName}</span>
                                <span className='sign-out-link-text'>Sign Out</span>
                            </Link>
                    ) : (
                        <Link to='/signin' className='header-link' style={{ textDecoration: 'underline' }}>
                            Sign In Or Join
                        </Link>
                    )
                }
                </div>
                <div className='menu-options'>
                    <CustomIcon type='user-accoun' name='My Account' />
                    <CustomIcon type='my-orders' name='My Orders' />
                    <CustomIcon type='contact-preferences' name='Contact' />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userDisplayName: state.auth.userDisplayName,
        isAuthenticated: state.auth.isAuthenticated,
        logoutError: state.auth.logoutError
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logoutUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountDropdown);