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
    let style = {float:'left'}
    return (
        <div>
          <Grid>
            <Row className="show-grid">
              {
                  (
                  this.props.emojiCategory && this.props.emojiCategory.map((emoji,i) => {
                  return Array.isArray(emoji) === true ? 
                      <Col xs={6} md={4} style={style}>
                        <Emoji emoji={emoji[0]} key={i} /> 
                      </Col>	
                  : 
                      <Col xs={6} md={4} style={style}>
                        <Emoji emoji={emoji} key={i} />
                      </Col>	
                  })
                  )
              }
            </Row>
        </Grid>
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