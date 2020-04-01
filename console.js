console.log('log');
console.warn('warn');
console.error('error');
console.trace(); // mostra onde o codigo esta sendo executado

console.group('agrupa as mensagens');
console.log('msg 1');
console.log('msg 2');
console.log('msg 3');
console.log('msg 4');
console.groupEnd('agrupa as mensagens');

console.time('log time');
setTimeout(() => {
  console.timeEnd('Log time');
}, 2000);

console.table(['A', 'B', 'C']);
console.log('%c styled log', 'color: blue; font-size: 40px;');