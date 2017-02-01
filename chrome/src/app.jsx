import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
// import store from ''


ReactDom.render(
  <Provider /*store={store}*/>
    <h1> H1B boi </h1>
  </Provider>,
  document.getElementById('app')
)


