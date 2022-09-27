import React from "react";
import { connect } from "react-redux";
import { ClearItemFromCart, addItem, removeItem } from "../../Redux/Cart/cart.actions"; 

import "./checkout-item-styles.scss";

const CheckoutItem = ({ cartItem, ClearItem, addItem, removeItem }) => {

	const { name, imageUrl, quantity, price } = cartItem;

	return(


	<div className="checkout-item">
	<div className="image-container">
	<img src={imageUrl} alt="item" />
	</div>
	<span className="name">{name}</span>
	<span className="quantity">
	<div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
	<span className="value">{quantity}</span>
	<div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
	</span>
	<span className="price">{price}</span>
	<span className="remove-button" onClick={() => ClearItem(cartItem)}>&#10005;</span>
	</div>

	)};

const mapDispatchToProps = dispatch => ({

	ClearItem: item => dispatch(ClearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);





