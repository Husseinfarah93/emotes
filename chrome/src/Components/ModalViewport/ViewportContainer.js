import { connect } from 'react-redux'
import ViewportComponentComponent from './ViewportComponentComponent.jsx'
import Navbar from '../Navbar/NavbarComponent.jsx'


const mapStateToProps = ({ emojis }) => {
  return {
    emotes: Object.keys(emojis)
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(ViewportComponentComponent)