import { connect } from 'react-redux'
import ViewportComponent from './ViewportComponent.jsx'



const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (state) => {
  return null
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewportComponent)