import { connect } from 'react-redux'
import EmojisComponent from './EmojisComponent.jsx'


// const mapStateToProps = null // ({ emojis }) => { emojis }


const mapStateToProps = (state, ownProps) => {
  return {
    emojis: state.emojis
  }
}



const mapDispatchToProps = null


console.log('EmojisComponent',EmojisComponent)
export default connect(mapStateToProps, mapDispatchToProps)(EmojisComponent)