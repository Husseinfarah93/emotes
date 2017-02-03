import React, { Component } from 'react'
import EmojisCategory from './EmojisCategory/EmojisCategoryComponent.jsx'

export default class ViewPortComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {}
  }

render() {
    return (
      <div>
      {
          Object.keys(this.props.emojis).map((e,i) => {
            return <EmojisCategory key={i} emojiCategory={this.props.emojis[e]} />
          })
      }
      </div>
    )
 }
}
  