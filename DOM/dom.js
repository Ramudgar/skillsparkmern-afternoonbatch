const titles=document.getElementById('title')
console.log(titles)


console.log(titles.innerText)
titles.innerText=null
console.log(titles.innerText)
// console.log(titles.textContent)
// console.log(titles.innerHTML)


const content=document.getElementsByClassName('content')
console.log(content)
console.log(content[0].innerText)

 
const chats=document.querySelector('.chat')
console.log(chats)

chats.innerHTML='Hello, <i>Shyam</i> are you doing well?'

const inputElem=document.querySelector('#myInput')
console.log(inputElem.value)
console.log(inputElem.type)

// inputElem.type='password'
inputElem.value='Shyam'

inputElem.style='color:red'
console.log(inputElem.getAttribute('style'))

inputElem.setAttribute('style','color:blue')


const newElement=document.createElement('div')
newElement.innerText='Hello, sparkians'

const placeElement=document.querySelector('#placeElem')
placeElement.appendChild(newElement)

