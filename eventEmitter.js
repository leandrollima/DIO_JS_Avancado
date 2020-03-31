// EventEmitter (exclusivo do Node)
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('User logged', data =>{
  console.log(data);
});

emitter.emit('User logged', {user: 'Leandro'});

// no console: "node eventEmitter.js" para roda

