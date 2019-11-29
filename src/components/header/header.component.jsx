import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './header.styles.scss';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='shop'>
                    SHOP
                </Link>           
                <Link className='option' to='shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>
                            <strong>SIGN OUT</strong>
                        </div> 
                    ) : (
                        <Link className='option' to='signin'>SIGN IN</Link>
                    )
                }
                {/* <Link className='option' to='like-items'>
                    <FontAwesomeIcon icon={faHeart} />
                </Link> */}
            </div>
        </div>
    );
};

export default Header;