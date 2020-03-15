import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import AppLogo from '../../assets/app-logo.png';
import NortonSecureLogo from '../../assets/norton-by-symantec-logo.png';
import WelcomeUserPng from '../../assets/male-friendship.jpg'; 


import './my-account.styles.scss';

const MyAccountPage = () => {
    const [opacity, setOpacity] = useState(false);
    let style = { opacity: 0 }
    useEffect(() => {
        // change page background color
        document.body.style.backgroundColor = '#eee';
        setOpacity(true);
        return () => {
            document.body.style.backgroundColor = 'white';
        };
    }, []);

    if(opacity) { 
        style = { opacity: 1 }
    }

    return (
        <div className={`my-account-page-container`} style={style}>
            <header className="header">
                <div className="logo">
                    <img 
                        className='app-logo' 
                        src={AppLogo} alt='app-logo' 
                        onClick={() => window.location.assign(`${window.location.origin}/`)}/>
                </div>
                <h2 className='header-text'>MY ACCOUNT</h2>
                <div className="norton-logo">
                    <img className='norton-logo' src={NortonSecureLogo} alt='norton-logo' />
                </div>
            </header>
            <div className='content'>
                <div className='user-options-container'>
                    <div className='user-welcome-card'>
                        <div className='dot'>
                            <p>LE</p>
                        </div>
                        <div className='user-welcome-wrapper'>
                            <p className='hi'>Hi,</p>
                            <p className='name'>liron ezra</p>
                        </div>
                    </div>
                </div>
                <div className='welcome-user'>
                    <img className='welcome-img' src={WelcomeUserPng} alt='male-friendship' />
                    <h1 className='welcome-user-text'>
                        <span>WELCOME TO</span>
                        <span>YOUR ACCOUNT</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default MyAccountPage;