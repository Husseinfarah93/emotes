// let shortEmojis = require('./src/Components/ModalViewport/CurrentEmojis/Emojis/EmojisBank.js')



console.log("RUNNING")

let body = document.getElementsByTagName('body')[0]
const logCurrentElement = (node) => {
 console.log("AIOSFNAOISFNOIB")
//  node.childNodes.forEach(function(el) {
//     if (el.nodeType === 3) {  // If this is a text node, replace the text
//       if (el.nodeValue.trim() !== "") { // Ignore this node it it an empty text node
//         // replaceText(el)
//          let newElem = document.createElement('img')
//          el.parentElement.replaceChild(newElem,el)
//       }
//     } else { // Else recurse on this node
//       logCurrentElement(el);
//     }
//   });
}









const replaceText = (elem) => {
  if(shortEmojis[elem.nodeValue]) {
    let newElem = document.createElement('img')
    newElem.src = shortEmojis[elem.nodeValue].imageSrc
    elem.parentElement.replaceChild(newElem,elem)
  }
}



window.addEventListener('keydown',() => logCurrentElement(body))