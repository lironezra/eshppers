import React from 'react';
import { Link } from 'react-router-dom';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <Link to={{
            pathname: `/product-item/${item.name}/${item.id}`,
            state: {
                item
            }
        }} >
            <article className='collection-item'>
                <div
                    className='image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className='collection-footer'>
                    <p className='name'>{name}</p>
                    <span className='price'>${price}</span>
                </div>
                <button type="button" className="save-for-later">
                    <span><FontAwesomeIcon className='icon-heart' icon={faHeart} /></span>
                </button>
            </article>
        </Link>

    );
};

export default CollectionItem;