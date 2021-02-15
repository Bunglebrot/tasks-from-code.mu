'use strict';

// Задача 44.1
console.log('Задача 44.1');
let arr1 = [13, 41, 2, 94, -24, 8, 0, 3, 12, 75, 3];
for (let item of arr1) {
  if (item === 0) break;
  else console.log(item);
}

// Задача 44.2
console.log('Задача 44.2');
let sum = 0;
for (let item of arr1) {
  if (item >= 0) sum += item;
  else break;
}
console.log(sum);

// Задача 44.3
console.log('Задача 44.3');
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === 3) {
    console.log(`Первое вхождение числа 3 в массив arr1 находится по индексу ${i}`);
    break;
  }
}

// Задача 44.4
console.log('Задача 44.4');
let count = 0;
let maxValue = 100;
for (let i = 1, sum = 2; sum < maxValue; i++) {
  sum += i;
  count++;
}
console.log(`Чтобы сумма получилась > ${maxValue} нужно пройти ${count} итераций/и, начиная с 1`);