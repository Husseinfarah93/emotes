import React, { Component } from 'React'
import Emoji from './Emoji.jsx'

class EmojiComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }
/* FIX FOR OBJECT INSTEAD OF ARRAY */
  render() {
    return (
      <div > 
        <Emoji />
      </div> 
    )
  }
}