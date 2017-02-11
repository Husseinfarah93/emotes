import React, { Component } from 'react'
import { Navbar, NavItem, MenuItem, Nav, NavDropdown, ButtonGroup, Button, DropdownButton } from 'react-bootstrap';
import CurrentEmojis from '../ModalViewport/CurrentEmojis/CurrentEmojisComponent.jsx'
import NewEmojis from '../ModalViewport/NewEmoji/NewEmojiContainer.js'


export default class NavbarComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      tab: 'all',
      emotes: this.props.emotes
    }
    this.changeCategory = this.changeCategory.bind(this)
  }

  filter() {
    if(this.state.tab === 'all') return this.state.emotes 
    let newObj = {}
    newObj[this.state.tab] = this.state.emotes[this.state.tab]
    return newObj
  }

  changeCategory(category) {
    console.log('category', category)
    this.setState({tab: category})
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Collapse>
          {/*  Render Navbar with listeners  */}
          <Nav>
          {/* All category*/}
          <NavItem eventKey={1} onClick={() => this.changeCategory('all')}>all</NavItem>
          {
            Object.keys(this.state.emotes) && Object.keys(this.state.emotes).map((category, idx) => {
              return  <NavItem eventKey={idx + 2} key={category + idx.toString()} onClick={() => this.changeCategory(category)}>{category}</NavItem>
            })
          }
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {
            this.state.tab !== 'newEmojis' ? <CurrentEmojis emotes={this.filter()}/> : <CurrentEmojis emotes={this.filter()}/>
          }
        </div>
      </div>
    )
  }
}

//       return this.state.tab !== 'newEmojis' ? <CurrentEmojis emotes={this.filter()}/> : <NewEmojis />