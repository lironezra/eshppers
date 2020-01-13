import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser }  from '../../redux/auth/auth.actions.js'

import CustomIcon from '../custom-icon/custom-icon.component';

import './my-account-dropdown.styles.scss';

const MyAccountDropdown = ({isAuthenticated, onLogout, currentUser, show}) => {
    const className = ['my-account-dropdown' , show ? 'dropdown-open' : 'dropdown-closed'];
    
    return (
        <div className={className.join(' ')} style={!show ? {pointerEvents: "none"} : {}}>
            <div className='my-account-menu-items'>
                <div className='my-accout-dropdown-header'>
                {
                    isAuthenticated ? (
                            <Link to='/' onClick={onLogout}
                                style={{ border: 'none', margin: '0', padding: '0', fontSize: '16px'}}>
                                <span className='hello-user-text'>Hi {currentUser.displayName}</span>
                                <span style={{textDecoration: 'underline'}}>Sign Out</span>
                            </Link>
                    ) : (
                        <Link to='/signin' 
                            style={{ padding: '0', border: 'none', margin: '0', textDecoration: 'underline', fontSize: '16px'}}>
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
        currentUser: state.auth.user,
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