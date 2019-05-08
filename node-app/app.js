// os finding things about operating system
// const os = require('os')
//
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
//
// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

// create Events & listener
const EventEmitter = require('events')
const emitter = new EventEmitter();

// register a listener
// emitter.on('eventName'), callback function(){
//
// }

emitter.on('messageLogged', (arg) =>{
  console.log('Listener Called', arg)
})

// Raise an event
// emitter.emit('event name', eventArguments)

emitter.emit('messageLogged', {id: 1, url:'http://somewebsite'})



// register listener
emitter.on('logging', (arg) => {
  console.log('Logging', arg.data)
})

// register event
emitter.emit('logging', {data: 'message'})
