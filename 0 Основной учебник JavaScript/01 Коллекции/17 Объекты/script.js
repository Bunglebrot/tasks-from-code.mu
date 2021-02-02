'use strict';

// Задание 17.1
const obj1 = {
  1: 'a',
  2: 'b',
  3: 'c',
};
console.log(obj1[1], obj1[2], obj1[3]);

// Задача 17.2
const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};
let sum2 = obj2['a'] + obj2['b'] + obj2['c'];
console.log(sum2);

// Задача 17.3
const obj3 = {
  '1a': 1,
  '2b': 2,
  'c-c': 3,
};
let sum3 = obj3['1a'] + obj3['2b'] + obj3['c-c'];
console.log(sum3);

// Задача 17.5
let obj = {
  key1: 1,
  key2: 2,
  key3: 3,
};
let sum = obj.key1 + obj.key2 + obj.key3;
console.log(sum);

// Задача 17.7
let user = {
  name: 'Иннокентий',
  surname: 'Смоктуновский',
  patronymic: 'Михайлович',
};
console.log(user.surname, user.name, user.patronymic);

// Задача 17.8
const date = {
  year: 2021,
  month: 'Февраль',
  day: 2
};
console.log(date.year + '-' + date.month + '-' + date.day);

// Задача 17.9
const obj4 = {};
obj4.a = 1;
obj4.b = 2;
obj4.c = 3;
console.log(obj4);