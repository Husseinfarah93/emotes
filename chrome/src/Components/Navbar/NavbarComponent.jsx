import React, { Component } from 'react'
import { Navbar, NavItem, MenuItem, Nav, NavDropdown, ButtonGroup, Button, DropdownButton } from 'react-bootstrap';
import CurrentEmojis from '../ModalViewport/CurrentEmojis/CurrentEmojisComponent.jsx'
import NewEmojis from '../ModalViewport/NewEmoji/NewEmojiComponent.jsx'
import './NavbarComponent.scss'

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
    this.setState({ tab: category })
  }
  
  render() {
  // let styleUL = {'listStyleType':'none', 'backgroundColor': '#B4DCED'}, styleLI = {'display':'inline-block', 'paddingRight':'5px', 'paddingLeft': '5px', cursor: 'pointer'}
  // category + 'Icon'
  return (
    <div>
      <ul >
        <li onClick={() => this.changeCategory('all')} ><i className='recent'/></li>
          {
            Object.keys(this.state.emotes) && Object.keys(this.state.emotes).map((category, idx) => {
              let src = './static/assets/other/category_icons/' + category + '.svg' //, style = {height:'30px', width:'30px'}
              console.log('src: ', src)
              return  <li key={category + idx.toString()} onClick={() => this.changeCategory(category)}>{
                <i className={category}/>
              }
              </li>
            })
          }
          <li eventKey={this.state.emotes.length + 1} onClick={() => this.changeCategory('newEmojis')}> + </li>
      </ul>
      <div>
        {
          this.state.tab !== 'newEmojis' ? <CurrentEmojis emotes={this.filter()} /> : <NewEmojis />
        }
      </div>
    </div>
  )
}
}


/*

render() {
  return (
    <div> 
      <Navbar fixedTop collapseOnSelect>
        <Nav>
          <NavItem eventKey={1}> Item 1 </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}



*/

//       return this.state.tab !== 'newEmojis' ? <CurrentEmojis emotes={this.filter()}/> : <NewEmojis />
// render() {
//     return (
//       <div>
//         <Navbar fixedTop collapseOnSelect>
//             {/*  Render Navbar with listeners  */}
//             <Nav>
//             {/* All category */}
//             <NavItem eventKey={1} onClick={() => this.changeCategory('all')}>all</NavItem>
//             {
//               Object.keys(this.state.emotes) && Object.keys(this.state.emotes).map((category, idx) => {
//                 return  <NavItem eventKey={idx + 2} key={category + idx.toString()} onClick={() => this.changeCategory(category)}>{category}</NavItem>
//               })
//             }
//             {/* New Emoji Category */}
//             <NavItem eventKey={this.state.emotes.length + 1} onClick={() => this.changeCategory('newEmojis')}>new emoji</NavItem>
//             </Nav>
//         </Navbar>
//         <div>
//           {
//             this.state.tab !== 'newEmojis' ? <CurrentEmojis emotes={this.filter()}/> : <NewEmojis />
//           }
//         </div>
//       </div>
//     )
//   }





