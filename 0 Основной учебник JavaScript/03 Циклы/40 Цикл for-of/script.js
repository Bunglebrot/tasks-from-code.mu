'use strict';

// Задача 40.1
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let item of arr) {
  console.log(item);
}

// Задача 40.2
console.log('Задача 40.2');
let arr2 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let item of arr2) {
  sum2 += item;
}
console.log(sum2);

// Задача 40.3
console.log('Задача 40.3');
let monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
for (let month of monthes) {
  console.log(month);
}
// Задача 40.4
let month = 2;
for (let i = 0; i < monthes.length; i++) {
  if (i == month - 1) {
    document.write(`<i>${monthes[i]}</i>`);
  } else {
    document.write(monthes[i]);
  }
}