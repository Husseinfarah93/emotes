let body = document.getElementsByTagName('body')[0]
const logCurrentElement = () => {
  let elem = document.activeElement
  console.log(elem)
}

window.addEventListener('keydown',logCurrentElement)