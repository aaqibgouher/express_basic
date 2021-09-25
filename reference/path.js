const path = require('path');

console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.join(__dirname, 'test', 'test.js'));
console.log(path.parse(__filename));