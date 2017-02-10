import React, { Component } from 'react'
import CurrentEmojis from './CurrentEmojis/CurrentEmojisContainer.js'
let Scrollspy = require('react-scrollspy').Scrollspy
// import NewEmoji from './NewEmoji/NewEmojiContainer.js'

export default class ViewPortComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentClicked: this.props.currentClicked ? props.currentClicked : ''
    }
  }

  render() {
    console.log("here")
    return this.state.currentClicked !== 'newEmojiTab' ?  <CurrentEmojis />  :  <NewEmoji />
  }
}