import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './header.styles.scss';

const Header = (props) => {
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
                <Link className='option' to='signin'>
                    SIGNIN
                </Link>
                {/* <Link className='option' to='like-items'>
                    <FontAwesomeIcon icon={faHeart} />
                </Link> */}
            </div>
        </div>
    );
};

export default Header;