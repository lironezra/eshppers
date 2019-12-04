import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser }  from '../../redux/auth/auth.actions.js'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './header.styles.scss';

// const Header = ({ currentUser }) => {
const Header = ({isAuthenticated, onLogout}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='shop'>
                    SHOP
                </Link>           
                <Link className='option' to='contact'>
                    CONTACT
                </Link>
                <Link className='option' to='like-items'>
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
                {
                    isAuthenticated ? (
                        <div className='option' onClick={onLogout}>
                            <strong>SIGN OUT</strong>
                        </div> 
                    ) : (
                        <Link className='option' to='signin'>SIGN IN</Link>
                    )
                }

            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
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