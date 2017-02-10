import React, { Component } from 'react'
import CurrentEmojis from './CurrentEmojis/CurrentEmojisContainer.js'
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, ButtonGroup, Button, DropdownButton} from 'react-bootstrap';
// import NewEmoji from './NewEmoji/NewEmojiContainer.js'

export default class ViewPortComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentClicked: 1
    }
  }

  render() {
    let style = {float: 'left', 'padding-right':'25px'}
    return (
      <div>
      {
        this.props.emotes.map((e, idx) => {
          let src = `./static/assets/other/category_icons/${e}.svg`
          return <img style={style} src={src} key={idx} /> 
        })
      }
      </div>
    )
  }
}