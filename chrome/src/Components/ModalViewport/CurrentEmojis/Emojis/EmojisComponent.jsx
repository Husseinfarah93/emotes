import React, { Component } from 'react'
import EmojisCategory from './EmojisCategory/EmojisCategoryComponent.jsx'
import './emojis.scss'

export default class EmojisComponent extends Component {
  constructor(props) {
    super(props)
    // console.log('child props: ', props)
    this.state = {
      emotes: this.props.emojis,
      filteredEmotes: this.props.emojis,
      filteredList: [this.props.emojis]
    }
    this.filter = this.filter.bind(this)
    // console.log(this.state, this.props)
  }

  componentWillReceiveProps(newProps) {
    if(this.state.filteredEmotes !== newProps.emojis) this.setState({filteredEmotes: newProps.emojis})
  }


  filter() {
    let val = document.getElementById('searchbar').value
    let objectKeys = this.state.emotes
    let keys = Object.keys(objectKeys)
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
    let style = {float:'left', width:'100%'}, style2 = {float:'left', 'padding':'5px', height: '25px'}, style3 = {width:'75%', 'borderRadius': '5px'}
      return (
        <div>
          {/* Search Bar */}
          <input type='search' placeholder='Search for emote' id='searchbar' onChange={this.filter}/>
          <div>
          {
              Object.keys(this.state.filteredEmotes).map((e, i) => {
                let src = `./static/assets/other/category_icons/${e}.svg`
                return (
                  <div  key={i}>
                    <div className='textCategory'>
                      <h3>{e}</h3>
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