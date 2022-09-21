import React from "react";
import { connect } from "react-redux"
import { WithRouter } from "react-router-dom"
import { createStructuredSelector } from "reselect";

import CustomButton from "../Custom-Button/Custom-Button.component";
import CartItem from "../Cart-item/Cart-item.component"
import { selectCartItems } from "../../Redux/Cart/cart.reselect";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, history }) => (

	<div className="cart-dropdown">
	<div className="cart-items">
	{   cartItems.length ? (
		cartItems?.map(cartItem => (
			<CartItem key={cartItem.id} item={cartItem} />
			))

		):(<span classsName="empthy-message">Your Cart is Empthy </span>

	)}

</div>

<CustomButton onClick={() => history.push('/checkout')}>Go To Checkout</CustomButton>
</div>
);

const mapStateToProps = createStructuredSelector ({

	cartItems: selectCartItems
});
export default WithRouter(connect(mapStateToProps)(CartDropdown));
