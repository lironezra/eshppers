import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import './my-acconu-icon.styles.scss';

const MyAccountIcon = () => {
    return (
        <Link to='/user-account' style={{color: '#2d2d2d'}}>
            <FontAwesomeIcon icon={faUser} style={{marginRight: '10px', fontSize: '19px'}}/>
            My Account
        </Link>
    );
};



export default MyAccountIcon;