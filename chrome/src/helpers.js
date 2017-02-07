/*
Approach with replacing images 
Get all things with correct tags
For each of those 
  Loop through the textContent
*/
import shortNameEmojis from ''

// Need to do it for nested stuff
const getAllMatchedDOMElements = (elementsToMatch) => {
  // Return all elements i.e [<p />, ......]
  let arrToReplace = []
  // Generate all dom elements to search
  for(let i = 0; i < elementsToMatch; i++) {
    let foundList = document.getElementsByTagName(elementsToMatch[i])
    for(let j = 0; j < foundList.length; j++) {
      arrToReplace.push(foundList[j])
    }
  }
  arrToReplace.forEach(searchElementAndReplace)
}


const searchElementAndReplace = (element) => {
  // i.e aiofnaiof:afionafo:asfnapspf:aopsmfopa:aopmsaofm
  let list = [], str = element.innerHTML
}







/*
let list = [],str = elem.innerHTML
	// Find indices of :'s
	for(var i=0;i<str.length;i++) {
		if(str[i] === ':') list.push(i)
	}
	// Get rid of the ones where only one/zero :
	if(str.length < 2) return 
	// Loop to check if indices correspond to a thing 
	for(var i = 0; i < list.length - 1; i++) {
		let checkValue = str.substring(list[i],list[i+1]+1)
		//Do Replacement
		
	}

*/