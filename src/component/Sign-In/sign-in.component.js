import React from 'react';
import './sign-in.styles.scss';
import Forminput from '../Form-input/Form-Input.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import { signInWithGoogle } from '../../Firebase/Firebase.utils';

class SignIn extends React.Component{
    constructor(props) {
        super(props);


        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();


        this.setState({email:'', password:''})
    };
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already Have an Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Forminput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label="Email"  required />
                    
                    <Forminput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label="Password" required />
                    <div className='buttons'>
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                        
                          SIGN IN WITH 





                         </CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}
export default SignIn;
 