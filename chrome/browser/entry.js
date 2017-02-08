let rootNode = document.getElementsByTagName('body')[0]
let emojiBank = require('../src/Components/ModalViewport/CurrentEmojis/Emojis/EmojiBank.js')
let chromeId = 'pnlepnelkjmigidmeebcnnnonlkgdfal'
console.log("Bank", emojiBank)


const traverseDom = (node, funcToRun) => {
  if(node.nodeType === 3 && node.nodeValue.trim() !== '') funcToRun(node)
  else node.childNodes.forEach(e => traverseDom(e,funcToRun))
}

const rektFunction = elem => {
  let parent = elem.parentNode, newChild = document.createElement('text')
  newChild.textContent = 'rekt '
  parent.replaceChild(newChild,elem)
}

const switchFunction = elem => {
  let parent = elem.parentNode
  let result = isolate(elem.textContent, emojiBank)
  // console.log('result: ', result)
  if(result !== elem.textContent) {
    let newChild = document.createElement('div')
    newChild.innerHTML = result
    parent.replaceChild(newChild,elem)
  }
}

const isolate = (str, bank) => {
  let returnArr = [], colonIndeces = [], lastIndex = 0
  let startSub;
  let endSub;
  let sub;
	// Gather all indeces of colons 
	for(let i = 0; i < str.length; i++) {
		if(str[i] === ':') colonIndeces.push(i)
	}
	// Check if larger than 1 
	if(colonIndeces.length < 2) return str
	// Check if any are actually present in the bank
	for(let i = 0;i < colonIndeces.length - 1; i++) {
		// Check if both are numbers 
		if(Number.isInteger(colonIndeces[i]) && Number.isInteger(colonIndeces[i+1])) {
			startSub = colonIndeces[i], endSub = colonIndeces[i+1], sub = str.substring(startSub,endSub + 1)
			// If the substring is in the bank
			if(bank[sub]) {
        let obj = bank[sub]
        let sr = `chrome-extension://${chromeId}/static/assets/png/${obj.unicode}.png`
				let newElem = `<img src="${sr}" />`
				if(returnArr.length){
					let thng = str.substring(lastIndex,colonIndeces[i])
					returnArr.push(str.substring(lastIndex,colonIndeces[i]) + newElem)
				}
				else {
					returnArr = [str.substring(0,startSub),newElem]
				}
				lastIndex = colonIndeces[i + 1] + 1
				colonIndeces[i] = colonIndeces[i+1] = ''
			}
			// If it is not
			else {
				let thingToPush = str.substring(lastIndex, colonIndeces[i + 1] + 1)
				returnArr.push(thingToPush)
				lastIndex = colonIndeces[i + 1] + 1
			}
		}
	}
	// Add remaining part 
	if(endSub !== str.length - 1) returnArr.push(str.substring(endSub + 1,str.length))
	return returnArr.join('')
}

const doThing = () => {
  traverseDom(rootNode, switchFunction)
}

window.addEventListener('keydown', (e) => {
  if(e.keyCode === 112 ) doThing()
})
