import React from 'react';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import './shop.styles.scss';

const Shop = () => (
    <div className='shop-page'>
        <CollectionsOverview />
    </div>
)

const mapStateToProps = state => {
    return {
        collections: state.shop.collections
    }
}

export default connect(mapStateToProps)(Shop);