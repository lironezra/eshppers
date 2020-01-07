import React from 'react';
import { Link } from 'react-router-dom';

import CarouselItems from '../carousel-items/carousel-items.component';

import './sales-banner.styles.scss';

const SalesBanner = ({ backgroundImage }) => {
    return (
        <section className='mu-section'>
            <article className='sales-banner'>
                <div 
                    className='banner-background'
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                <Link className='sales-link' to='/sale'>
                    <header className='banner-header'>
                        <div className='salesBanner-headerWrap-desktop'>
                            <div className='salesBanner-header-textContainer'>
                                <h2 className='salesBanner-header-title'>
                                    <span className='salesBanner-header__tape'>
                                        UP TO 60% OFF SELECTED STYLES
                                        <br />
                                        GET THEM BEFORE BLACK FRIDAY
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </header>
                </Link>
                <CarouselItems />
            </article>
        </section>
    );
};

export default SalesBanner;