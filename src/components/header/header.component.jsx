import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser }  from '../../redux/auth/auth.actions.js'

import SubMenu from '../sub-menu/sub-menu.component';
import AppLogo from '../../assets/app-logo.png';

import { faHeart, faUser as faUser1 } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag, faUser, faArchive } from "@fortawesome/free-solid-svg-icons";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './header.styles.scss';

const Header = ({isAuthenticated, onLogout, currentUser}) => {
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
                <Link className='option with-arrow' to='#'>
                    <FontAwesomeIcon className='icon' icon={faUser} />
                </Link>
                <SubMenu>
                    {
                        isAuthenticated ? (
                                <Link to='/' onClick={onLogout}
                                    style={{backgroundColor: '#b3b3b3', border: 'none', margin: '0', fontSize: '13px'}}>
                                    <span className='hello-user-text'>Hi {currentUser.displayName}</span>
                                    <span style={{textDecoration: 'underline'}}>Sign Out</span>
                                </Link>
                        ) : (
                            <Link to='/signin' 
                                style={{backgroundColor: '#b3b3b3', border: 'none', margin: '0', textDecoration: 'underline', fontSize: '13px'}}>
                                Sign In Or Join
                            </Link>
                        )
                    }
                    <Link to='/user-account'>
                        <FontAwesomeIcon icon={faUser1} style={{marginRight: '10px', fontSize: '19px'}}/>
                        My Account
                    </Link>
                    {/* <hr /> */}
                    <Link to='/user-orders'>
                        <FontAwesomeIcon icon={faArchive} style={{marginRight: '10px', fontSize: '19px'}}/>
                        My Orders
                    </Link>
                    {/* <hr /> */}
                    <Link to='/contact-preferences'>
                        <FontAwesomeIcon icon={faRocketchat} style={{marginRight: '10px', fontSize: '19px'}}/>
                        Contact
                    </Link>
                </SubMenu>  
                <Link className='option' to='like-items'>
                    <FontAwesomeIcon className='icon' icon={faHeart} />
                </Link>
                <Link className='option' to='cart'>
                    <FontAwesomeIcon className='icon' icon={faShoppingBag} />
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);