import React from 'react';
import Directory from '../../components/directory/directory.component';
import SalesBanner from '../../components/sales-banner/sales-banner.component';

// import BackgroundImg from '../../assets/sales-banner.png';
//import BackgroundImg from '../../assets/mens-banner.jpg';
import BackgroundImg from '../../assets/red-october-sale-desktop-1440x664.jpg';

import './homepage.styles.scss';


const HomePage = () => {
    return(
        <div className='homepage'>
            <div>
                <SalesBanner backgroundImage={BackgroundImg}/>
            </div>
            <div className='directory'>
                <Directory />
            </div>
        </div>
    );
};

export default HomePage;