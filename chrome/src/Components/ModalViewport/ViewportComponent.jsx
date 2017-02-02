import React, { Component } from 'React'
import CurrentEmojis from './CurrentEmojis/CurrentEmojisContainer.js'
import NewEmoji from './NewEmoji/NewEmojiContainer.js'

class ViewPortComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentClicked: props.currentClicked ? props.currentClicked : ''
    }
  }

  render() {
    return this.state.currentClicked !== 'newEmojiTab' ? <CurrentEmojis /> : <NewEmoji />
  }
}