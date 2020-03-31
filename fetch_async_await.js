// ES7: Async/await 
//Async -> transforma uma função em promise e a resolve
//Await -> aguarda a execução de uma função async

const simpleFc = async () => 123456;
simpleFc().then(data => console.log(data)).catch(error => console.log(error));

const asyncTime = () => new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(123456);
  }, 1000);
});

const simpleFunc = async () => {
  const data = await asyncTime();
  return data;
};








// o retorno do FETCH é uma promise
fetch('/data.json', {
  method: 'get' // e outras configs
}).then(responseStream => {
  responseStream.json().then(data => {
    console.log(data);
  })
}).catch(err => {
  // Se tiver 1 erro de rede este catch captura-o.
  console.log('Erro', error);
});

fetch('/data.json').then(responseStream => {
  if (responseStream.status === 200)
    return responseStream.json();
  else
    throw new Error('Request error');
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    // Se tiver 1 erro de rede este catch captura-o.
    console.log('Erro', error);
  });