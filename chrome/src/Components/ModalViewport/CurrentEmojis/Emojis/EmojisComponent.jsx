import React, { Component } from 'React'
import EmojisCategory from './'

class ViewPortComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }
/* FIX FOR OBJECT INSTEAD OF ARRAY */
  render() {
    return (
      <div > 
        this.props.emojis && this.props.emojis.map(category => {
          <div>
            <h5>{}</h5>
            <EmojisCategory />
          </div>
        })
      </div> 
    )
  }
}