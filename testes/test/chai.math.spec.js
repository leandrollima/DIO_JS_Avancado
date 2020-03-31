// Testes com MOCHA + CHAI (chai assertion library - chaijs)
const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function () {
  beforeEach(function () {
    value = 0;
  });

  it('Sum two number', function (done) {
    const math = new Math();

    math.sum(value, 5, value => {
      expect(value).to.equal(10);
      done();
    });
  });

  it('Multiply two numbers', function () {
    const math = new Math();
    expect(math.multiply(value, 5)).to.equal(0);

    // com o chai conseguimos fazer asserts de objetos
    const obj = {
      name: 'Leandro'
    };
    const obj2 = {
      name: 'Leandro'
    };
    expect(obj).to.have.property('name')
      .equal('Leandro');

    // verificar se são iguais:
    expect(obj).to.deep.equal(obj2);



  });
});