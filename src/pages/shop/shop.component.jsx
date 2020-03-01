import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import './shop.styles.scss';

const Shop = ({ match }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    );
}


export default Shop;