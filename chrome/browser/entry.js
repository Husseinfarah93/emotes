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
    console.log('different. Original: ',elem.textContent,' changed: ', result)
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
	// console.log(colonIndeces)
	for(let i = 0;i < colonIndeces.length - 1; i++) {
		// console.log(i,lastIndex)
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
					// console.log(lastIndex)
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
		else {
			
		}
		// console.log('a',lastIndex,colonIndeces)
	}
	// Add remaining part 
	console.log('lastIndex',lastIndex)
	if(endSub !== str.length - 1) {
		// let returnThing = str[str.length - 1] === ':' ? str.substring()
		returnArr.push(str.substring(endSub + 1,str.length))
	}
	return returnArr.join('')
}

const doThing = () => {
  console.log("doing thing")
  traverseDom(rootNode, switchFunction)
}

window.addEventListener('keydown', (e) => {
  if(e.keyCode === 112 ) doThing()
})





/* 
Steps 
1) Replace all instances thing 
2) Add the typing mechanism
  2.1) Add listeners 
    2.1.1) If they submit an emote then re render
  2.2) If they type notifying thing display little box
*/