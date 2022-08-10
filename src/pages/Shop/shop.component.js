import React from 'react';
import SHOP_DATA from './shopdata.component';
import CollectionPreview from '../../component/Collections-Preview/Collection-Preview';
class ShopPage extends React.Component {
    constructor (props) {
        super();
        this.state = {
            Collections: SHOP_DATA

            
        }
    }
    render() {
        const {Collections } = this.state;
        return (<div className='ShopPage'>
            {
                Collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
                }
            
             </div>);
    }
}
export default ShopPage;