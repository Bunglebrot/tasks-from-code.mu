'use strict';

// Задача 30.1
let month = 20;
let season;
if (month > 0 && month < 3 || month === 12) {
  season = 'зима';
} else if (month >= 3 && month <= 5) {
  season = 'весна';
} else if (month >= 6 && month <= 8) {
  season = 'лето';
} else if (month >= 9 && month <= 11) {
  season = 'осень';
} else season = (`месяц - ${month} задан неверно`);
console.log(`${month} месяц - это ${season}`);

// Задача 30.2
let str = 'abcde';
if (str[0] === 'a') {
  console.log('да');
} else {
  console.log('нет');
}

// Задача 30.3
let num = 404;
let firstNum = String(num)[0];
if (firstNum == 1 || firstNum == 2 || firstNum == 3) {
  console.log('да');
} else {
  console.log('нет');
}

// Задача 30.4
let num4 = 505;
let stringNum4 = String(num4);
let sumNum4 = Number(stringNum4[0]) + Number(stringNum4[1]) + Number(stringNum4[2]);
console.log(sumNum4);

// Задача 30.5
let num5 = 539827;
let stringNum5 = String(num5);
let firstThirdSumNum5 = Number(stringNum5[0]) + Number(stringNum5[1]) + Number(stringNum5[2]);
let restThirdSumNum5 = Number(stringNum5[3]) + Number(stringNum5[4]) + Number(stringNum5[5]);

if (firstThirdSumNum5 === restThirdSumNum5) {
  console.log('да');
} else {
  console.log('нет');
}