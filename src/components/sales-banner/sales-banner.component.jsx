import React from 'react';
import { Link } from 'react-router-dom';


import './sales-banner.styles.scss';

const SalesBanner = ({ backgroundImage }) => {
    return (
        <section className='mu-section'>

            <article className='sales-banner'>
                <div 
                    className='banner-background'
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        marginLeft: 'auto',
                        width: '100%'
                    }}
                />

                <Link style={{color: '#2d2d2d'}} to='/sale'>
                    <header className='banner-header'>
                        <div className='salesBanner-headerWrap-desktop'>
                            <div className='salesBanner-header-textContainer'>
                                <h2 className='salesBanner-header-title'>
                                    <span
                                        className='salesBanner-header__tape'
                                        style={{
                                            color: '#232323',
                                            backgroundColor: '#48FFC6',
                                            boxShadow: '0.37em 0 0 #48FFC6, -0.37em 0 0 #48FFC6'
                                        }}
                                    >
                                        UP TO 60% OFF SELECTED STYLES
                                        <br />
                                        GET THEM BEFORE BLACK FRIDAY
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </header>
                </Link>
            </article>
        </section>
    );
};

export default SalesBanner;