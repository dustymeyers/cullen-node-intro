console.log('Hello from script.js');
console.log('Yay for node!!!node');

let age = 28;
if (age > 23) {
  console.log('you are an old person');
}

function birthday() {
  age++;
  return age;
}

console.log(`Happy birthday to you! You are ${birthday()}`);
console.log(`Happy birthday to you! You are ${birthday()}`);
console.log(`Happy birthday to you! You are ${birthday()}`);

// Load cullenites.js file
let cullenites = require('./cullenites.js');
for (let student of cullenites) {
  console.log(`Welcome to node week, ${student}`);
}

let allTheNumbers = [];

let number = 1;
let maxNumber = 35;

allTheNumbers.push(number);
function fillAllTheNumbers(num) {
  for (let i = 0; i < allTheNumbers.length; i++) {
    if (num < maxNumber) {
      num++;
      allTheNumbers.push(num);
    }
  }
}

fillAllTheNumbers(number);
console.log(allTheNumbers);
