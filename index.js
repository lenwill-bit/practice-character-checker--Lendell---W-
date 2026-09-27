const readlineSync = require('readline-sync');

let userString = readlineSync.question("Enter a word or phrase: ");
let index = Number(readlineSync.question("Enter an index number: "));

let character = userString[index];

console.log("The character at index " + index + " is: " + character);