let fs = require('fs')
let currentEmojisJSON = JSON.parse(fs.readFileSync('./src/Components/ModalViewport/CurrentEmojis/Emojis/EmojiBank.json','utf8'))
let keys = Object.keys(currentEmojisJSON)
// console.log("BEFORE KEYS: ",keys)
for(let i = 0; i < keys.length; i++) {
  // Create new key 
  let newKey = currentEmojisJSON[keys[i]].shortname
  currentEmojisJSON[newKey] = currentEmojisJSON[keys[i]]
  // Delete old key/Set to undefined
  delete currentEmojisJSON[keys[i]]
}
// console.log("NEW KEYS:", Object.keys(currentEmojisJSON))


let push = 'const func = () => ' + JSON.stringify(currentEmojisJSON)
fs.writeFile('./src/Components/ModalViewport/CurrentEmojis/Emojis/EmojiBank.js',push)