import React, { Component } from 'react'
import EmojisComponent from './Emojis/EmojisComponent.jsx'
// import Searchbar from './Searchbar/SearchbarContainer.js'

export default class CurrentEmojisComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }

  render() {
    return (
      <div >
        <EmojisComponent emojis={this.props.emotes}/>
      </div>
    )
  }
}
// <SearchBar />-