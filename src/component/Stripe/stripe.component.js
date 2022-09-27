import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

	const priceForStripe = price * 100;
	const PUBLISHABLE_KEY = 'pk_test_dhqLskpOV2DWaN7jiXfmti8q00xBbkAMWn'


	const onToken = token => {
		console.log(token);
		alert('Payement Successfully');
	}

	return (

		<StripeCheckout
		lable = "Pay Now"
		name = "Bilanshopping Ltd."
		billingAddress
		shippingAddress
		image = "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png"
		description={`Your Total is $${price}`}
		amount={priceForStripe}
		panelLabel='Pay Now'
		token={onToken}
		stripekey={PUBLISHABLE_KEY}
		/>


		);
} ;

export default StripeCheckoutButton;