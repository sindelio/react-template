import React from 'react';
import TextBox from './TextBox';
import LoginForm from './LoginForm';

class LoginPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			loggedIn: false
		}
	}
	
	loginHandler = () => {
		this.setState({
			loggedIn: true
		})
	}

	render(){
		if(this.state.loggedIn){
			return (
				<p> Logged in </p>
			);
		}
		return (
			<div>
				<TextBox text="Please log in" className="TestBox" />
				<LoginForm loginHandler={this.loginHandler} />
			</div>
		);
	}
}

export default LoginPage;


