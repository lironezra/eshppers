import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";


import './contact-icon.styles.scss';

const ContactIcon = () => {
    return (
        <Link to='/contact-preferences ' style={{color: '#2d2d2d'}}>
            <FontAwesomeIcon icon={faRocketchat} style={{marginRight: '10px', fontSize: '19px'}}/>
            Contact
        </Link>
    );
};

export default ContactIcon;