// promises ES6
// 3 status para Promises: Pending, Fulfilled, Rejected

const doSomethingPromise = new Promise((resolved, rejected) => {
  setTimeout(function() {
    resolve("First data");
  }, 1000);
});
const doOtherThingPromise = new Promise((resolved, rejected) => {
  setTimeout(function() {
    resolve("Second data");
  }, 1000);
});

// execucao Promise com tratativa de erros
doSomethingPromise
  .then(data => console.log(data))
  .catch(error => console.log(error));
//execucao de Promises encadeadas
doSomethingPromise
  .then(data => {
    console.log(data.split(""));
    return doOtherThingPromise;
  })
  .then(data2 => console.log(data2.split("")))
  .catch(error => console.log(error));

// função que gera uma Promise
const doSomethingPromiseFc = () =>
  new Promise((resolved, rejected) => {
    setTimeout(function() {
      resolve("First data");
    }, 1000);
  });
const doOtherThingPromiseFc = () =>
  new Promise((resolved, rejected) => {
    setTimeout(function() {
      resolve("Second data");
    }, 1000);
  });
//execucao de funções que geraram Promises
doSomethingPromiseFc()
  .then(data => {
    console.log(data.split(""));
    return doOtherThingPromiseFc();
  })
  .then(data2 => console.log(data2.split("")))
  .catch(error => console.log(error));

// Execução de Promises em paralelo
// Aguarda a execuçãodo arrays de promises para passar a execução ao THEN
Promise.all([doSomethingPromiseFc(), doOtherThingPromiseFc()])
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));

// o retorno de valor é da primeira promise resolvida
Promise.race([doSomethingPromiseFc(), doOtherThingPromiseFc()]).then(data => {
  console.log(data);
});

//callbacks (antigo)
function doSomething(callback) {
  setTimeout(function() {
    callback("First data");
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function() {
    callback("Second data");
  }, 1000);
}

// a medida que o endeamento cresce os callbacks ficam dificeis de ler e manter
function doAll() {
  doSomething(function(data) {
    var processData = data.split("");
    doOtherThing(function(data2) {
      var processData2 = data2.split("");
      setTimeout(function() {
        console.log(processData, processData2);
      }, 1000);
    });
  });
}

doAll();
