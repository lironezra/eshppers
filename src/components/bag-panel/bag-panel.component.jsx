import React from 'react';

import './bag-panel.styles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BagPanel = ({ icon, header, description }) => {
    return (
        <div className='bag-panel-container'>
            <div className='panel-icon-container'>
                <FontAwesomeIcon className='icon' icon={icon} />
            </div>
            <div className='panel-description-container'>
                <h2 className='header'>{header}</h2>
                <p className='desc-content'>{description.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
                <p className='more-info'>More info</p>
            </div>
        </div>
    );
};

export default BagPanel;