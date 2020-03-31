class Math {
  // depois que o teste  passar é necessário verificar se o método precisa de
  // refatoração:
  /*
  sum = function sum(a, b) {
    return a + b;
  }*/

  // "refatorado"
  /*
  sum(a, b) {
    return a + b;
  }*/

  // assíncrono
  sum(a, b, callback) {
    setTimeout(() => {
      callback(a + b);
    }, 0);
  }
  multiply(a, b) {
    return a * b;
  }
}

module.exports = Math;