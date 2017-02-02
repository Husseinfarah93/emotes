import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './Reducers/Emojis/'

const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
)

export default createStore(reducer, enhancer);
