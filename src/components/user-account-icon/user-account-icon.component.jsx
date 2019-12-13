import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import './user-account-icon.styles.scss';

const UserAccountIcon = () => {
    return (
        <Link 
            className='option' 
            to='#'>
            <FontAwesomeIcon className='icon' icon={faUser} />
        </Link>
    );
};

export default UserAccountIcon;