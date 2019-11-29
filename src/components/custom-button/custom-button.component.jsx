import React from 'react';

import { faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './custom-button.styles.scss';

const CustomButton = ({ authWith, children, ...otherProps }) => {
    let button;
    switch (authWith) {
        case 'google':
            button = 
            <button className="loginBtn loginBtn--google" {...otherProps}>
                <span className="s-icon"><FontAwesomeIcon icon={faGoogle} /></span>
                {children}
            </button>
            break;
        case 'facebook':
            button =
                <button className="loginBtn loginBtn--facebook" {...otherProps}>
                    <span className="s-icon"><FontAwesomeIcon icon={faFacebookF} /></span>
                    {children}
                </button>
            break;
        case 'twitter':
            button =
                <button className="loginBtn loginBtn--twitter" {...otherProps}>
                    <span className="s-icon"><FontAwesomeIcon icon={faTwitter} /></span>
                    {children}
                </button>
            break;
        default:
            button = 
                <button className='custom-button' {...otherProps}>
                    {children}
                </button>
            break;
    }

    return (
        button
    );
};

export default CustomButton;