// Podemos extender o EventEmitter em uma classe
const EventEmitter = require('events');
class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data);
  }
}

emitter.on('User logged', data => {
  console.log(data);
});
// Se quiser executar o gatilho apenas 1 vez, usar o método ONCE ao invés do ON

