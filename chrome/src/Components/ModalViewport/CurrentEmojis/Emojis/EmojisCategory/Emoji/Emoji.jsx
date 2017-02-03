import React, { Component } from 'react';


export default class Emoji extends Component {

	constructor(props) {
		super(props);
	}

	clicked() {
		console.log(this.props.emoji)
	}

	render() {
		return (
			<div onClick={this.clicked}> 
				<img src={this.props.emoji.imageSrc} />
      </div>
		)
	}
}


