// Testes com MOCHA + CHAI (chai assertion library - chaijs)
const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function () {
  it('Calls req with sum and index values', function () {
    const req = {};
    const res = {
      load: sinon.spy()
    };

    const math = new Math();
    math.printSum(req, res, 5, 5);
    expect(res.load.calledOnce).to.be.true;
    expect(res.load.args[0][0]).to.equal('index'); // primeiro argumento enviado para função
    expect(res.load.args[0][1]).to.equal(10); // verificar se o segundo argumento é o resultado da soma

    // se minha const res fosse uma função:
    const res2 = {
      load: function load() { console.log('Called!'); }
    };
    // aplicaria o sinon assim:
    sinon.spy(res2, 'load');
    // se eu quisesse substituir o método
    sinon.stub(res, 'load');// o método não será chamado;
    sinon.stub(res, 'load').returns('xpto');// método substituido com retorno personalizado;
    
  });
});