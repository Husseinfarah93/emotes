import { connect } from 'react-redux'
import NavbarComponent from './NavbarComponent.jsx'



const mapStateToProps = ({ emojis }) => {
  return {
    emotes: emojis
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)