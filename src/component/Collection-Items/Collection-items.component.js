import React from 'react';
import { connect } from "react-redux";
import './Collection-items.styles.scss';
import CustomButton from "../Custom-Button/Custom-Button.component";
import { additem } from "../../Redux/Cart/cart.actions";


const CollectionItems = ({item, additem}) => {

    const { name, price, imageUrl} = item;

     return (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`
    }}/>

        
        <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => additem(item )} inverted>Add To Cart</CustomButton>
    </div>
    
)};

const mapStateToProps = dispatch => ({

    additem : item => dispatch(additem(item))
})
export default connect(null, mapStateToProps) (CollectionItems);