import React from 'react';
import { Link } from 'react-router-dom';

import JacketsAndCoatsImg  from '../../assets/jackets-and-coats.jpg';
import ShoesImg from '../../assets/shoes.jpg';
import HoodiesImg from '../../assets/hoodies-and-sweatshirt.jpg';
import JeanseImg from '../../assets/jeanse.jpg';
import TshirtImg from '../../assets/tshirt.jpg';

// Import css files - new!!!
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './carousel-items.styles.scss';

const settings = {
    dots: false,
    arrows: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            swipe: true,
            dots: false
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            swipe: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            swipe: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
};

const CarouselItems = () => {
    return(
        <div className='carousel-container'>
            <Slider {...settings}>
                <Link to='/sales/jackets-and-coats' className='link-item'>
                    <img src={JacketsAndCoatsImg} alt="pic1" className='carousel-image'/>
                    <div className='label-wrap'>
                        <span className='label-text'>JACKETS & COATS</span>
                    </div>
                </Link>
                <Link to='/sales/shoes-and-trainers' className='link-item'>
                    <img src={ShoesImg} alt="pic1" className='carousel-image'/>
                    <div className='label-wrap'>
                        <span className='label-text'>SHOES & TRAINERS</span>
                    </div>
                </Link>
                <Link to='/sales/hoodies-and-sweatshirts' className='link-item'>
                    <img src={HoodiesImg} alt="pic1" className='carousel-image'/>
                    <div className='label-wrap'>
                        <span className='label-text'>HOODIES & SWEATSHIRTS</span>
                    </div>
                </Link>
                <Link to='/sales/jeanses' className='link-item'>
                    <img src={JeanseImg} alt="pic1" className='carousel-image'/>
                    <div className='label-wrap'>
                        <span className='label-text'>JEANS</span>
                    </div>
                </Link>
                <Link to='/sales/tshirts-and-vests' className='link-item'>
                    <img src={TshirtImg} alt="pic1" className='carousel-image'/>
                    <div className='label-wrap'>
                        <span className='label-text'>T-SHIRTS & VESTS</span>
                    </div>
                </Link>
            </Slider>
        </div>

    )
}

export default CarouselItems;