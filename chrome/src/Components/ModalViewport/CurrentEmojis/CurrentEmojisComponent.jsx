import React, { Component } from 'React'
import Emojis from './Emojis/EmojisContainer.js'
import Searchbar from './Searchbar/SearchbarContainer.js'

class CurrentEmojisComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }

  render() {
    return (
      <div >
        <SearchBar />
        <Emojis />
      </div>
    )
  }
}