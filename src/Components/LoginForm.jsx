import React from 'react';

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
 
	usernameHandler = (event) => {
		// console.log(event.target.value);
		this.setState({
			username: event.target.value
		})
	}

	passwordHandler = (event) => {
		// console.log(event.target.value);
		this.setState({
			password: event.target.value
		})
	}

	submitHandler = (event) => {
		if(this.state.username === "username" && this.state.password === "password"){
			event.preventDefault();
			console.log('LOGGED IN');
			this.props.loginHandler();
			
		}
		// event.preventDefault(); // prevents the default behavior, allowing the event to propagate. This is useful to continue displaying the console.log() result in the console
	}
	
	render(){
		return (
			<form onSubmit={this.submitHandler}>
				<input type="text" placeholder="username" onChange={this.usernameHandler} />
				<input type="text" placeholder="password" onChange={this.passwordHandler} />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default LoginForm;