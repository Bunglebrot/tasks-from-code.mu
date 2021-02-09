'use strict';

// Задача 28.1, 28.2 и 28.3
let age = 17;
let adult;
if (age >= 18) {
  adult = true;
} else {
  adult = false;
}
console.log(adult);

// Задача 28.4 и 28.5
age = 20;
let result;
if (age >= 18) {
  if (age <= 23) {
    result = 'от 18 до 23';
  } else {
    result = 'больше 23';
  } 
} else {
  result = 'меньше 18';
}
console.log(result);