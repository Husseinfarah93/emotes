import React, { Component } from 'react'
let Dropzone = require('react-dropzone')


export default class NewEmojiComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }

  }



  render() {
    return (
      <div>
        <div>
          <h3> Upload Dank Emote fam </h3>
          <Dropzone > Put files in here m8</Dropzone>
        </div>
        <div>
          <h5> short name for emote </h5> 
          <input />
          <h5> short description </h5>
          <input />
          <h5> tags </h5>
          <input />
        </div>
      </div>

    )
  }
}

