import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import './user-account-icon.styles.scss';

const UserAccountIcon = (props) => {
    return (
        <Link
            className='option' 
            to='/'
            {...props}>
            <FontAwesomeIcon className='icon' icon={faUser} />
        </Link>
    );
};

export default UserAccountIcon;