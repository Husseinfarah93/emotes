import { connect } from 'react-redux'
import EmojisComponent from './EmojisComponent'



const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (state) => {
  return null
}


export default connect(mapStateToProps, mapDispatchToProps)(EmojisComponent)