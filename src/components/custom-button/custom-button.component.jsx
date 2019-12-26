import React from 'react';

import { faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './custom-button.styles.scss';

const CustomButton = React.memo(
    ({ btnType, children, ...otherProps }) => {
        let button;
        switch (btnType) {
            case 'google-loggin':
                button = 
                <button className="social-loggin" {...otherProps}>
                    <span className="s-icon"><FontAwesomeIcon icon={faGoogle} color="#DD4B39"/></span>
                    {children}
                </button>
                break;
            case 'facebook-login':
                button =
                    <button className="social-loggin" {...otherProps}>
                        <span className="s-icon">
                            <FontAwesomeIcon icon={faFacebookF} color="#4C69BA"/>
                        </span>
                        {children}
                    </button>
                break;
            case 'twitter-login':
                button =
                    <button className="social-loggin" {...otherProps}>
                        <span className="s-icon">
                            <FontAwesomeIcon icon={faTwitter} color="#00ACEE"/>
                        </span>
                        {children}
                    </button>
                break;
            case 'regular':
                button = 
                <button className='custom-button' {...otherProps}>
                    {children}
                </button>
                break;
            case 'inverted': 
                button = 
                <button className='custom-button inverted' {...otherProps}>
                    {children}
                </button>
                break;
            default:
    
                break;
        }
    
        return (
            button
        );
    }    
) 

export default CustomButton;