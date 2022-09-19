import React from 'react';
import './Custom-Button.styles.scss';


const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
  <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
  {children}
  </button>

	);


export default CustomButton;