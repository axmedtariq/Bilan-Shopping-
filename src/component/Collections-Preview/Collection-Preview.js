import React from 'react';
import './Collection-Preview.style.scss';
import CollectionItems from '../Collection-Items/Collection-items.component';
const CollectionPreview = ({title,  items}) => (
    <div className='collection-Preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItems key={item.id} item={item} />
                ))
            
            }

        </div>
    </div>
);
export default CollectionPreview;