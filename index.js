console.log("Hello from Node.JS");

require('./add');

require('./superman');

require('./batman');

const math = require('./math');
const {add, sub} = math;

console.log (add(5,5));
console.log (sub(10,5));