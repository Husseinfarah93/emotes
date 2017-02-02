// import { createAction, handleActions } from 'redux-actions';

// Initial State


/* ---------------- Actions ------------------------- */
/*
  - Add new emoji to Global emoji list
  - Add new emoji to local emoji list 
  - Update number of times an emoji used globally for everyone 
  - Update number of times an emoji used locally ie most recent / most frequently used 
*/



/* ---------------- Action Creators ---------------- */





/* ---------------- Reducer ------------------------ */








import emojis from '../../Components/ModalViewport/CurrentEmojis/Emojis/EmojiFunctions.js'



let initialState = {
  emojis: emojis
}

/* -----------------    ACTIONS     ------------------ */
// const SET    = 'SET_CURRENT_ADMIN'
// const REMOVE = 'REMOVE_CURRENT_ADMIN'
const ADD_NEW_EMOJI = 'ADD_NEW_EMOJI' 
const PICK_EMOJI = 'PICK_EMOJI'





/* ------------   ACTION CREATORS     ------------------ */
// const set     = admin => ({ type: SET, admin })
// const remove  = () => ({ type: REMOVE })
const addEmojiActionCreator = (emoji) => ({ type: ADD_NEW_EMOJI, emoji })
const pickEmojiActionCreator = (emoji) => ({ type: PICK_EMOJI, emoji })


/* ------------       REDUCER     ------------------ */
// export default function reducer (state, action) {
//   switch (action.type) {
//     case SET: 
//       return action.admin;
//     case REMOVE:
//       return null;
//     default: 
//       return currentAdmin;
//   }
// }

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case ADD_NEW_EMOJI: 
      return
    case PICK_EMOJI:  
      return
    default: 
      console.log(state)
      return state
  }
}






/* ------------       DISPATCHERS     ------------------ */

// export const login = credentials => (dispatch) => {
//   return axios.post('/auth/login', credentials)
//   .then(res => {
//     dispatch(set(JSON.parse(res.config.data).email))
//   })
// };

// export const logout = () => (dispatch) => {
//   dispatch(remove());
//   axios.get('/auth/logout')
//   .catch(err => console.error('logout unsuccessful', err));
// };


export const addEmoji = (emoji) => (dispatch) => {
  dispatch(addEmojiActionCreator)
}

export const pickEmoji = (emoji) => (dispatch) => {
    dispatch(pickEmojiActionCreator)
}