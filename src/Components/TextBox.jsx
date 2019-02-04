import React from 'react';

class TextBox extends React.Component{
	constructor(props){
		super(props);
		this.state = { text: props.text }; // Usually the internal state is an object
		// this.text = props.text; // My internal state can be named whatever I want
	}
	  
	render(){
		return (
			<p>
				{this.state.text}
			</p>
		);
	}
	// {this.props.text would also work for static content}
}

export default TextBox;
