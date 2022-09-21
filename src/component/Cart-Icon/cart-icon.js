import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../Redux/Cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../Redux/Cart/cart.reselect";


import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemcount }) => (

	<div className="cart-icon" onClick={toggleCartHidden}>
	<ShoppingIcon className="shopping-icon" />
	<span className="item-count">{itemcount}</span>

	</div>



	);

const mapDispatchToProps = dispatch => ({

	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({

	itemcount: selectCartItemsCount
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);