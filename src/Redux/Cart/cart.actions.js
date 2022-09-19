import CartActionTypes from "./cart.Types";

export const toggleCartHidden = () => ({

	type:CartActionTypes.TOGGLE_CART_HIDDEN
});


export const additem = item => ({

	type:CartActionTypes.ADD_ITEM,
	payload:item
})
