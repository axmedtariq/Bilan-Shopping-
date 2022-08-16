import React from 'react';
import SignIn from '../../component/Sign-In/sign-in.component';
import Signup from '../../component/Sign-Up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';
const SignInAndsignUp = () => (
    <div className='SignInAndSignUp'>
        <SignIn />
        <Signup/>
    </div>
);
export default SignInAndsignUp;