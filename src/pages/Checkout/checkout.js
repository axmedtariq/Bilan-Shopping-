import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../Redux/Cart/cart.reselect";
import CheckoutItem from "../../component/Checkout-Item/checkout-item";

import "./checkout.styles.scss";
const Checkoutpage = ({ cartItems, total }) => (

	<div className="checkout-page">
	<div className="checkout-header">
	<div className="header-block">
	<span>Product</span>
	</div>
	<div className="header-block">
	<span>Description</span>
	</div>
	<div className="header-block">
	<span>Quantity</span>
	</div>
	<div className="header-block">
	<span>Price</span>
	</div>
	<div className="header-block">
	<span>Remove</span>
	</div>
	
	</div>
	{
		cartItems?.map(cartItem =>(<CheckoutItem key={cartItem.id} cartItem={cartItem}/>) )
	}
	<div className="total">

	<span>Total: ${total}</span>

	</div>
	</div>
	);

	const mapStateToProps = createStructuredSelector ({

		cartItems: selectCartItems,
		total: selectCartTotal


	});


export default connect(mapStateToProps)(Checkoutpage);