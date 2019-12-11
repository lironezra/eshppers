import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

import './my-orders-icon.styles.scss';

const MyOrdersIcon = () => {
    return (
        <Link to='/user-orders' style={{color: '#2d2d2d'}}>
            <FontAwesomeIcon icon={faArchive} style={{marginRight: '10px', fontSize: '19px'}}/>
            My Orders
        </Link>
    );
} ;

export default MyOrdersIcon;