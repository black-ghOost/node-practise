console.log('Hello World');

setTimeout(() => {
    console.log('I am in setTimeout');
}, 1000);

console.log(__dirname);
console.log(__filename);

const a = 10;

function test() {
    console.log('I am test');
}

// console.log(global.a);
// global.test();

console.log(module);

const math = require('./math');

console.log(math.add(1, 2));
