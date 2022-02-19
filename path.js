const path = require('path');

const myCurrentPath = __filename;

console.log(path.basename(__dirname));
console.log(path.extname(myCurrentPath));