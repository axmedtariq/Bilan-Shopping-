import React from 'react';
import Forminput from '../../component/Form-input/Form-Input.component';
import CustomButton from '../../component/Custom-Button/Custom-Button.component';
import { auth, createUserProfileDocument} from '../../Firebase/Firebase.utils';
import './sign-up.styles.scss';
class Signup extends React.Component {
	constructor() {
		super();


		this.state = {

			displayName:'',
			email:'',
			password:'',
			confirmpassword:''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const {displayName, email, password, confirmpassword} = this.state;

		if(password !== confirmpassword) {
			alert("passwords don't match");
			return;

		}

		try{

		const { user } = await auth.createUserWithEmailAndPassword(email, password);
		await createUserProfileDocument(user, {displayName});

			this.setState({
			displayName:'',
			email:'',
			password:'',
			confirmpassword:''
			});

		}catch(error) {

		    console.error(error)

		}


	};


	handleChange = event => {

		const { name, value} = event.target;
		this.setState({[name]: value});
	};
	render() {

		const { displayName, email, password, confirmpassword} = this.state;

		return(

			<div className='sign-up'>
			<h2 className='title'> I do not have a account</h2>
			<span>Sign up With Your Email and Password</span>
			<form className='sign-up-form' onSubmit={this.handleSubmit}>
			<Forminput
			type='text'
			name='displayName'
			value={displayName}
			onChange={this.handleChange}
			label='Display Name'
			required

			/>
			<Forminput
			type='email'
			name='email'
			value={email}
			onChange={this.handleChange}
			label='Email'
			required

			/>
			<Forminput
			type='password'
			name='password'
			value={password}
			onChange={this.handleChange}
			label='Password'
			required

			/>
			<Forminput
			type='password'
			name='confirmpassword'
			value={confirmpassword}
			onChange={this.handleChange}
			label='Confirm Password'
			required

			/>
			<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
			</div>


			);
	}
}
export default Signup;