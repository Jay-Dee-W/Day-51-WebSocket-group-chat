let messageEl = document.getElementById('message')
let inputEl = document.getElementById('msg-input')
let buttonEl = document.getElementById('send')
let chatContainer = document.querySelector('ul')
const socket = io('ws://localhost:3030')
socket.on('connect', () => {
    console.log('connection established')  
})

buttonEl.addEventListener('click', e => {
    console.log(inputEl.value)
    socket.send(inputEl.value)
   
})

socket.on('message', data => {
    console.log(data)
    let listEl = document.createElement('li')
    listEl.innerText = data
    chatContainer.appendChild(listEl)
})


// let socket = new WebSocket("ws://localhost:3030")

// socket.onopen = (e) => {
//     console.log('Server connected')
//     socket.send('New user')
// }

// socket.onmessage = (e) => {
//     console.log(e.data)
//     messageEl.innerHTML = e.data
// }