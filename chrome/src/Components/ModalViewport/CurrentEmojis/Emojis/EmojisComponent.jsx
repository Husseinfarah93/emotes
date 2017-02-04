import React, { Component } from 'react'
import EmojisCategory from './EmojisCategory/EmojisCategoryComponent.jsx'

export default class ViewPortComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {}
  }

render() {
  let style ={float:'left', width:'100%'}, style2 = {float:'left', padding:'20px'}
    return (
      <div>
      {
          Object.keys(this.props.emojis).map((e,i) => {
            let src = `./static/assets/other/category_icons/${e}.svg`
            return (
              <div  key={i}>
                <div style={style}>
                  <img src={src} style={style2}/>
                  <h2>{e}</h2>
                </div>
                <EmojisCategory emojiCategory={this.props.emojis[e]} />
              </div>
            )
          })
      }
      </div>
    )
 }
}
  