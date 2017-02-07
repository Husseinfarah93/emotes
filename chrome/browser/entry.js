console.log("hello world")


const traverseDom = (node, funcToRun) => {
  if(node.nodeType === 3 && node.nodeValue.trim() !== '') funcToRun(node)
  else node.childNodes.forEach(e => traverseDom(e,funcToRun))
}

let rootNode = document.getElementsByTagName('body')[0]



const rektFunction = elem => {
  let parent = elem.parentNode, newChild = document.createElement('text')
  newChild.textContent = 'rekt '
  parent.replaceChild(newChild,elem)
}


traverseDom(rootNode, rektFunction)




/* 
Steps 
1) Replace all instances thing 
2) Add the typing mechanism
  2.1) Add listeners 
    2.1.1) If they submit an emote then re render
  2.2) If they type notifying thing display little box



*/