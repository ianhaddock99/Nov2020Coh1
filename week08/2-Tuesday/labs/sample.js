let lastName = require('./anotherSample'); ////////TO ANOTHER SAMPLE////////
let Stack = require('./stack');

const superheroes = require('superheroes');
console.log(superheroes.random());

let stack1 = new Stack();
stack1.push(3)
stack1.push(30)
stack1.push(33)
stack1.push(31)
console.log(stack1.peek());

let stack2 = new Stack();
stack2.push(1)
stack2.push(12)
stack2.push(13)
stack2.push(1)
console.log(stack2.peek());
// let log = require('./log');

// log.info("Great Day");
// log.warning("Pollution is high");
// log.error("Please stop");

// console.log(lastName);
// console.log(log.firstName);

// let name = "Ian";

// module.exports = name;