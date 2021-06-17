// const { Socket } = require('dgram')
// const WebSocket = require('ws')
// const Port = 3030

// const server = new  WebSocket.Server({
//     port : Port
// })

// server.on('connection', socket => {
//     console.log('Connected' )
//     socket.on('message', (data => {
//         console.log('client message', data)
//         socket.send('reply message'+ Date.now())
//     }))
    
// })


const http = require('http').createServer()

const socket = require('socket.io')

const io = socket(http, {
    cors: {origin : '*'}
} )

io.on('connection', socket => {
    console.log('client connected', socket.id)
    socket.on('message', data => {
        io.emit('message', `${socket.id.substring(0,4)} : ${data}`)
    })
})

let Port = 3030
http.listen(Port, () => console.log(`Listening on http://localhost:${Port}`))