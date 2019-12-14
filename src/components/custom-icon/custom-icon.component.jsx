import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";


import './custom-icon.styles.scss';

const CustomIcon = ({ type, name }) => {
    let iconContent = null;
    switch (type) {
        case 'user-accoun':
            iconContent = 
                <Link to='/user-account' className='icon-link'>
                    <FontAwesomeIcon icon={faUser} className='icon' />
                    {name}
                </Link>
            ;
            break;
        case 'my-orders': 
            iconContent = 
                <Link to='/my-orders' className='icon-link'>
                    <FontAwesomeIcon icon={faArchive} className='icon' />
                    {name}
                </Link>
            ;
            break;
        case 'contact-preferences': 
            iconContent = 
                <Link  style={{border: 'none'}} to='/contact-preferences' className='icon-link'>
                    <FontAwesomeIcon icon={faRocketchat} className='icon'/>
                    {name}
                </Link>
            ;
            break;
        default:
            break;
    }
    return (
        <div>
            {iconContent}
        </div>
    );
};

export default CustomIcon;