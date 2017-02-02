import { connect } from 'react-redux'
import EmojisCategoryComponent from './EmojisCategoryComponent'



const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (state) => {
  return null
}


export default connect(mapStateToProps, mapDispatchToProps)(EmojisCategoryComponent)