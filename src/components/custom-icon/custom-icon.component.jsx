import React from 'react';

import { Link, Redirect, withRouter, Route } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

import './custom-icon.styles.scss';

const CustomIcon = React.memo(
    ({ type, name, location, history }) => {
        let iconContent = null;
        switch (type) {
            case 'user-accoun':
                iconContent = 
                <button to='/user-account' className='icon-link' onClick={() => {
                    console.log(location.pathname);
                    console.log(window.location);
                    window.location.assign(`${window.location.origin}/user-account`)
                }}>
                        <FontAwesomeIcon icon={faUser} className='icon' />
                        {name}
                </button>;
                break;
            case 'my-orders': 
                iconContent = 
                    <button to='/my-orders' className='icon-link'>
                        <FontAwesomeIcon icon={faArchive} className='icon' />
                        {name}
                    </button>;
                break;
            case 'contact-preferences': 
                iconContent = 
                    <button  style={{border: 'none'}} to='/contact-preferences' className='icon-link'>
                        <FontAwesomeIcon icon={faRocketchat} className='icon'/>
                        {name}
                    </button>;
                break;
            default:
                break;
        }
        return (
            <div>
                {iconContent}
            </div>
        );
    }
);

export default withRouter(CustomIcon);