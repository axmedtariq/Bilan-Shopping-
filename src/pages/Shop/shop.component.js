import React from 'react';
import { Route } from "react-router-dom";
import Collectionoverview from '../../component/Collection-Overview/collection-overview';
import CollectionPage from "../Collection/collection";
const ShopPage  = ({ match }) => (
        <div className='ShopPage'>
        <Route exact path={`${match.path}`} component={Collectionoverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />   
        </div>
);

export default ShopPage;