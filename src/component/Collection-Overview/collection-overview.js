import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../Redux/Shop/shop.selector';
import  CollectionPreview  from "../Collections-Preview/Collection-Preview";

import "./collection-overview.styles.scss";

const Collectionoverview = ({ collections }) => (

	<div className="collection-overview">
	{
       collections.map(({id, ...otherCollectionProps}) => (
                  <CollectionPreview key={id} {...otherCollectionProps} />
            ))}               
	</div>
	);


const mapStateToProps = createStructuredSelector ({

    collections: selectCollectionForPreview
});
export default connect(mapStateToProps)(Collectionoverview);