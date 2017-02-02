import { connect } from 'react-redux'
import CurrentEmojisComponent from './CurrentEmojisComponent'



const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (state) => {
  return null
}


export default connect(mapStateToProps, mapDispatchToProps)(CurrentEmojisComponent)