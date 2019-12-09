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
                <span className="s-icon"><FontAwesomeIcon icon={faGoogle} color="#DD4B39"/></span>
                {children}
            </button>
            break;
        case 'facebook':
            button =
                <button className="loginBtn loginBtn--facebook" {...otherProps}>
                    <span className="s-icon"><FontAwesomeIcon icon={faFacebookF} color="#4C69BA"/></span>
                    {children}
                </button>
            break;
        case 'twitter':
            button =
                <button className="loginBtn loginBtn--twitter" {...otherProps}>
                    <span className="s-icon"><FontAwesomeIcon icon={faTwitter} color="#00ACEE"/></span>
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