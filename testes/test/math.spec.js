// Testes com MOCHA
const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
  it('Sum two number', function () {
    const math = new Math();

    assert.equal(math.sum(5, 5), 10); // teste ok
  });
});

// assert com método assíncrono
describe('Math class', function () {
  it('Sum two number', function (done) { // done é requerido para métodos assíncronos
    const math = new Math();

    // timeout para execução de um teste no mocha = 2000ms, para alterar esse timeout 
    // é necessário conhecer o contexto da execução (this):
    this.timeout(3000); // ! logo o MOCHA não recomenda que usemos arrow functions com o it

    math.sum(5, 5, (value) => {
      assert.equal(value, 10);
      done(); // done é requerido para métodos assíncronos
    });
  });

  // é possível descrever um comportamento sem que exista uma função, quando
  // os testes rodarem, será exibido que há 1 teste pendente (pending)
  it('Multiply two numbers');

  // o ONLY permite que apenas este teste seja executado
  it.only('Multiply', function () {
    const math = new Math();
    assert.equal(math.multiply(5, 5), 25);
  });

  // ignora o teste, não é necessário comentá-lo
  it.skip('Multiply', function () {
    const math = new Math();
    assert.equal(math.multiply(5, 5), 25);
  });

  /// hooks: forma de executar codigo e evitar repeticao
  let value = 0;
   // antes de cada função de teste esta função é executada
  beforeEach(function () {
    value = 0;
  });
  // existem outros hooks: before, after, afterEach
});