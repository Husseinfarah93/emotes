import React, { Component } from 'react'
import ViewPortComponent from './ViewportComponent.jsx'
import Navbar from './Navbar.jsx'

export default class ViewPortComponentComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
    }
  }

  render() {
    console.log("emotes  :",this.props.emotes)
    return (
      <div>
        <Navbar emotes={this.props.emotes}/>
        <ViewPortComponent />
      </div>
    )
  }
}