import React from 'react';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl}) => {
    return (
        <article className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <p className='name'>{name}</p>
                {/* <span className='name'>{name}</span> */}
                <span className='price'>${price}</span>
            </div>
            <button type="button" className="save-for-later">
                <span><FontAwesomeIcon className='icon-heart' icon={faHeart} /></span>
            </button>
        </article>
        // <div className='collection-item'>
        //     <div
        //         className='image'
        //         style={{
        //             backgroundImage: `url(${imageUrl})`
        //         }}
        //     />
        //     <div className='collection-footer'>
        //         <p className='name'>{name}</p>
        //         {/* <span className='name'>{name}</span> */}
        //         <span className='price'>${price}</span>
        //     </div>
        // </div>
    );
};

export default CollectionItem;