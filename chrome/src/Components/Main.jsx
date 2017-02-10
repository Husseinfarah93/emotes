import React, { Component } from 'react'
import ViewportContainer from './ModalViewport/ViewportContainer.js'
import Navbar from './Navbar/NavbarContainer.js'




export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return <Navbar />
  }
}