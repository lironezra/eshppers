import React from 'react';
import { Link } from 'react-router-dom';

import JacketsAndCoatsImg  from '../../assets/jackets-and-coats.jpg';
import ShoesImg from '../../assets/shoes.jpg';
import HoodiesImg from '../../assets/hoodies-and-sweatshirt.jpg';
import JeanseImg from '../../assets/jeanse.jpg';
import TshirtImg from '../../assets/tshirt.jpg';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './carousel-items.styles.scss';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

const CarouselItems = () => {
    return(
        <Carousel 
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
             responsive={responsive} 
            // infinite={false}
            // arrows={true}
            // draggable={false}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            >
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
        </Carousel>
    )
}

export default CarouselItems;