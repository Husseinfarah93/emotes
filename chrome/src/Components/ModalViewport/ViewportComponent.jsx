import React, { Component } from 'react'
import CurrentEmojis from './CurrentEmojis/CurrentEmojisContainer.js'
// import NewEmoji from './NewEmoji/NewEmojiContainer.js'

export default class ViewPortComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentClicked: this.props.currentClicked ? props.currentClicked : ''
    }
  }

  render() {
    return this.state.currentClicked !== 'newEmojiTab' ? <CurrentEmojis /> : <NewEmoji />
  }
}