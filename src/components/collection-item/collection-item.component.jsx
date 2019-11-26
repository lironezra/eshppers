import React from 'react';

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