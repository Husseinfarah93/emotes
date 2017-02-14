const addEmojiToPage = (emoji) => {
  let active = document.activeElement
  // TextArea 
  if(active.nodeName === 'TEXTAREA') {
    active.value += emoji.shortname
  }
  // Input 
  else if(active.nodeName === 'INPUT') {
    active.value += emoji.shortname
  }
  // ContentEditable
  else if(active.attributes.contentEditable) {

  }
}

export { addEmojiToPage }