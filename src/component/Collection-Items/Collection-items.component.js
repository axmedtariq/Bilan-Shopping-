import React from 'react';
import { connect } from "react-redux";
import './Collection-items.styles.scss';
import CustomButton from "../Custom-Button/Custom-Button.component";
import { addItem } from "../../Redux/Cart/cart.actions";


const CollectionItems = ({item, addItem}) => {

    const { name, price, imageUrl} = item;

     return (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`
    }}/>

        
        <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> Add To Cart</CustomButton>
    </div>
    
)};

const mapDispatchToProps = dispatch => ({

    addItem : item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItems);