import React, { Component } from 'react'
import EmojisCategory from './EmojisCategory/EmojisCategoryComponent.jsx'

export default class ViewPortComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emotes: this.props.emojis,
      filteredEmotes: this.props.emojis
    }
    this.filter = this.filter.bind(this)
  }

  filter() {
    let val = document.getElementById('searchbar').value
    let keys = Object.keys(this.state.emotes)
    let tempEmotes = {}
    for(let i = 0; i < keys.length; i++) {
      let list = this.state.emotes[keys[i]]
      list = list.filter(emote => {
        if(Array.isArray(emote)) emote = emote[0]
        // Check if name matches
        if(emote.name.includes(val)){ 
          return true
        }
        for(let i = 0; i < emote.keywords.length; i++) {
          if(emote.keywords[i].includes(val)) return true
        }
        return false
      })
      if(list.length) tempEmotes[keys[i]] = list
    }
    this.setState({filteredEmotes: tempEmotes})

  }


  render() {
    let style ={float:'left', width:'100%'}, style2 = {float:'left', padding:'20px'}
      return (
        <div>
          {/* Search Bar */}
          <input type='search' placeholder='SEARCH' id='searchbar' onChange={this.filter} />
          <div>
          {
              Object.keys(this.state.filteredEmotes).map((e, i) => {
                let src = `./static/assets/other/category_icons/${e}.svg`
                return (
                  <div  key={i}>
                    <div style={style}>
                      <img src={src} style={style2}/>
                      <h2>{e}</h2>
                    </div>
                    <EmojisCategory emojiCategory={this.state.filteredEmotes[e]} />
                  </div>
                )
              })
          }
          </div>
        </div>
      )
  }
}
  

  // Object.keys(this.filter)