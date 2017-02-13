import React, { Component } from 'react';


// import addEmojiToPage  from '../../../../../../../browser/entry.js'
// ../../../../../../../browser/entry.js

export default class Emoji extends Component {

	constructor(props) {
		super(props);
		this.clicked  = this.clicked.bind(this)
		this.hover  = this.hover.bind(this)
		this.leave = this.leave.bind(this)
	}

	clicked() {
		console.log('clicked ',this.props.emoji)
	}


	hover() {
		let elem = document.getElementById(this.props.emoji.shortname)
		elem.style['border-radius'] = '15px'
		elem.style.backgroundColor = '#B4DCED'
	}

	leave() {
		let elem = document.getElementById(this.props.emoji.shortname)
		elem.style['border-radius'] = '0px'
		elem.style.backgroundColor = 'transparent'
	}

	render() {
		let style = {height: '40px', padding: '3px', cursor: 'pointer'}
		return (
		<div onClick={this.clicked} onMouseOver={this.hover} onMouseLeave={this.leave} id={this.props.emoji.shortname}> 
				<img src={this.props.emoji.imageSrc} style={style}/>
    </div>
		)
	}
}


