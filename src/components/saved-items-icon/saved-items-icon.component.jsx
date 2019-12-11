import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import './saved-items-icon.styles.scss';

const SaveItemsIcon = () => {
    return (
        <Link className='option' to='like-items'>
            <FontAwesomeIcon className='icon' icon={faHeart} />
        </Link>
    );
};

export default SaveItemsIcon;