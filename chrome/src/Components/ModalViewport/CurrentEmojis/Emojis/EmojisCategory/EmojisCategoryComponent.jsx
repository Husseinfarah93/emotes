import React, { Component } from 'react'
import Emoji from './Emoji/Emoji.jsx'
import {Grid, Row, Col, DropdownButton, MenuItem, FormGroup, FormControl, Button, Navbar} from 'react-bootstrap';

export default class EmojisCategoryComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }

  render() {
    return (
        <div>
              {
                  (
                  this.props.emojiCategory && this.props.emojiCategory.map((emoji,i) => {
                  return Array.isArray(emoji) === true ? 
                    <Emoji emoji={emoji[0]} key={i}/> 
                  : 
                    <Emoji emoji={emoji} key={i}/>
                  })
                  )
              }
      </div>
    )
  }
}

  //  <Grid>
  //             {
  //                 (
  //                 this.props.emojiCategory && this.props.emojiCategory.map((emoji,i) => {
  //                 return (
  //                 <Col xs={6} md={4}>
  //                     <Emoji emoji={emoji} key={i}/>
  //                 </Col>	
  //                 )
  //                 })
  //                 )
  //             }
  //         </Grid>