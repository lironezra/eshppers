import React from 'react';

import SnapChatIcon from '../../assets/social-media-snapchat-transparent-background-4.png';
import FaceBookIcon from '../../assets/social-media-facebook-transparent-background-4.png';
import InstagramIcon from '../../assets/social-media-instagram-transparent-background-4.png';
import PaymentMethodsImg from '../../assets/payment-methods.png';
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-top'>
                <div className='social-media-nav'>
                    <img className='social-icon' src={FaceBookIcon} alt='facebook' />
                    <img className='social-icon' src={InstagramIcon} alt='instagram' />
                    <img className='social-icon' src={SnapChatIcon} alt='snapchat' />
                </div>
                <div className='credit-nav'>
                    <img className='payment-methods' src={PaymentMethodsImg} alt='payment' />
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2020 ESHOPPERS</p>
                <ul className='footer-bar'>
                    <li className='footer-bar-item'>Privacy & Cookies</li>
                    <li className='footer-bar-item'>Ts&Cs</li>
                    <li className='footer-bar-item'>Accessibility</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;