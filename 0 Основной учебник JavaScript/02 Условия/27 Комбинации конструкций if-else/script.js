'use strict';

// Задача 27.1
let day = 17;
if (day >= 1 && day <= 10) console.log('первая декада');
if (day > 10 && day <= 20) console.log('вторая декада');
if (day > 20 && day <= 31) console.log('третья декада');

// Задача 27.2
if (day >= 1 && day <= 10) {
  console.log('первая декада');
} else if (day > 10 && day <= 20) {
  console.log('вторая декада');
} else if (day > 20 && day <= 31) {
  console.log('третья декада');
}

// Задача 27.3
if (day >= 1 && day <= 10) {
  console.log('первая декада');
} else if (day > 10 && day <= 20) {
  console.log('вторая декада');
} else if (day > 20 && day <= 31) {
  console.log('третья декада');
} else {
  console.log('день за пределами возможного :)');
}

// Задача 27.4 Вложенные if
let num = 10;
if (num >= 10 && num < 100) {
  let sumCharsNum = Number(String(num)[0]) + Number(String(num)[1]);
  if (sumCharsNum <= 9) {
    console.log('сумма цифр однозначна');
  } else {
    console.log('сумма цифр двузначна');
  }
} else {
  console.log('число меньше 10 или больше 99');
}
// вторая реализация
if (num < 10 || num > 99) {
  console.log('число меньше 10 или больше 99');
} else {
  let sumCharsNum = Number(String(num)[0]) + Number(String(num)[1]);
  if (sumCharsNum <= 9) {
    console.log('сумма цифр однозначна');
  } else {
    console.log('сумма цифр двузначна');
  }
}