// Load cullenites.js file the .js is redundat

let cullenites = require('./cullenites');
console.log('cullenites', cullenites.students);
console.log('instructor is', cullenites.instructor);
cullenites.addStudent('Josh');
console.log('cullenites are now', cullenites.students);

let myFavoriteNumber = require('./myFavoriteNumber');
console.log('myFavoriteNumber', myFavoriteNumber);

let scream = require('./scream');
console.log('Hello', scream('world!'));

const counter = require('./counter');
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

for (let student of cullenites.students) {
  console.log(`Welcome to node week, ${student}`);
}
// console.log('Hello from script.js');
// console.log('Yay for node!!!node');

/* 
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
 */
