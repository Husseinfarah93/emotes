import emojis from '../../Components/ModalViewport/CurrentEmojis/Emojis/EmojiFunctions.js'
import { addEmojiToPage } from '../../../browser/helpers.js'
console.log("func: ", addEmojiToPage)


let initialState = {
  emojis: emojis
}

console.log("INITIAL STATE: ", emojis)

/* -----------------    ACTIONS     ------------------ */
/*
  - Add new emoji to Global emoji list
  - Add new emoji to local emoji list 
  - Update number of times an emoji used globally for everyone 
  - Update number of times an emoji used locally ie most recent / most frequently used 
*/
const ADD_NEW_EMOJI = 'ADD_NEW_EMOJI' 
const PICK_EMOJI = 'PICK_EMOJI'


/* ------------   ACTION CREATORS     ------------------ */
const addEmojiActionCreator = (emoji) => ({ type: ADD_NEW_EMOJI, emoji })
const pickEmojiActionCreator = (emoji) => {
  addEmojiToPage(emoji)
  /*
  Add emoji to page 
  Re render the webpage F1 

  */

  return { type: PICK_EMOJI, emoji }
}


/* ------------       REDUCER     ------------------ */
export default function reducer (state = initialState, action) {
  switch(action.type) {
    case ADD_NEW_EMOJI: 
      return
    case PICK_EMOJI:  
      return
    default: 
      return state
  }
}






/* ------------       DISPATCHERS     ------------------ */
export const addEmoji = (emoji) => (dispatch) => {
  dispatch(addEmojiActionCreator)
}

export const pickEmoji = (emoji) => (dispatch) => {
    dispatch(pickEmojiActionCreator)
}