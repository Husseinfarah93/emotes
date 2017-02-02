import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import Main from './Components/MainContainer.js'

// let list = document.getElementById('list')
// let keys = Object.keys(emotesJSON)
// console.log(keys.length)
// for(let i = 0; i < keys.length; i++) {
//   let key = keys[i]
//   let nodeStr = `./static/assets/png/${emotesJSON[key].unicode}.png`
//   list.innerHTML += `<img src=${nodeStr} />`
// }










ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)


/* 
Plan 
  - Create Object that looks right
  - Create Modal with tabs
*/





