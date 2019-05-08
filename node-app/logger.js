const EventEmitter = require('events')

var url = 'http://somewebsite.com'

// logger will have all the built in methods of EventEmitter
class Logger extends EventEmitter {

  // when defining function you do not use the key word function

  log(message){
    console.log(message)

    this.emit('messageLogged', {id:1, url:'http://'})
  }
}

module.exports = Logger; 
