import React, { Component } from 'react';
import { addEmojiToPage } from '../../../../../../../browser/helpers.js'
export default class Emoji extends Component {

	constructor(props) {
		super(props);
		this.clicked  = this.clicked.bind(this)
		this.hover  = this.hover.bind(this)
		this.leave = this.leave.bind(this)
	}

	clicked() {
		console.log('clicked :', this.props.emoji)
		let emote = this.props.emoji
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var tab = tabs[0];
			console.log('tab info: ',tab.url, tab.title);
			chrome.tabs.getSelected(null, function(tab) {
					chrome.tabs.sendMessage(tab.id, emote, function(msg) {
							msg = msg || {};
							console.log('onResponse', msg.response);
					});
			});
		});
	}


	hover() {
		// console.log("HERE")
		let elem = document.getElementById(this.props.emoji.shortname)
		// console.log('elem: ', elem)
		elem.style['border-radius'] = '5px'
		elem.style.backgroundColor = '#B4DCED'
	}

	leave() {
		let elem = document.getElementById(this.props.emoji.shortname)
		elem.style['border-radius'] = '0px'
		elem.style.backgroundColor = 'transparent'
	}

	render() {
		let style = {height: '40px', width:'40px', padding: '3px', cursor: 'pointer', float: 'left'}, style2 = {height:'100%', width: '100%'}
		return (
		<div onClick={this.clicked} onMouseOver={this.hover} onMouseLeave={this.leave} id={this.props.emoji.shortname} style={style}> 
				<img src={this.props.emoji.imageSrc} style={style2}/>
    </div> 
		)
	}
}


