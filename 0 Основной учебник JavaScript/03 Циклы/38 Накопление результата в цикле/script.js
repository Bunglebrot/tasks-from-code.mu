'use strict';

// Задача 38.1
let multiplyResult = 1;
for (let i = 1; i <= 20; i++) {
  multiplyResult *= i;
}
console.log(multiplyResult);

// Задача 38.2
let sumEvenNumbers = 0;
for (let i = 0; i <= 100; i += 2) {
  sumEvenNumbers += i;
}
console.log(sumEvenNumbers);

// Задача 38.3
let sumOddNumbers = 0;
for (let i = 1; i < 100; i += 2) {
  sumOddNumbers += i;
}
console.log(sumOddNumbers);