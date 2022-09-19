import CartActionTypes from "./cart.Types";

import { addItemToCart } from "./Cart.utils";

const INITIAL_STATE = {
	hidden: true,
	CartItems: []
};


const CartReducer = (state = INITIAL_STATE, action) => {

	switch(action.type) {

		case CartActionTypes.TOGGLE_CART_HIDDEN:

		return {

			...state,
			hidden:!state.hidden
		};

		case CartActionTypes.ADD_ITEM:

		return {

			...state,

			CartItems : addItemToCart(state.CartItems,  action.payload)
		}

		default:
		return state;
	}
}

export default CartReducer;