'use strict';

// Задача 39.1
console.log('Задача 39.1');
let arr1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// Задача 39.2
// Ошибка была в том, что в условии цикла было указан оператор <=,
// в то время как длина массива больше на 1, чем количество элементов в нём
// т.к. отсчёт индексов элементов в массиве начинается с 0.
console.log('Задача 39.2');
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Задача 39.3
console.log('Задача 39.3');
for (let i = 0; i < arr.length; i++ ) {
  if (arr[i] % 2 === 1) {
    console.log(arr[i]);
  }
}
// Задача 39.4
console.log('Задача 39.4');
let multiply = 1;
for (let i = 0; i < arr.length; i++) {
  multiply *= arr[i];
}
console.log(multiply);

// Задача 39.5
console.log('Задача 39.5');
let sumPow = 0;
for (let i = 0; i < arr.length; i++) {
  sumPow += arr[i] * arr[i];
}
console.log(sumPow);

// Задача 39.6
console.log('Задача 39.6');
let arr6 = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > 3 && arr6[i] < 10) {
    console.log(arr6[i]);
  }
}

// Задача 39.7
console.log('Задача 39.7');
let arr7 = [-12, 88, 6, 902, -9, 18, -31, -8, 10];
let sum7 = 0;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] > 0) {
    sum7 += arr7[i];
  }
}
console.log(sum7);

// Задача 39.8
console.log('Задача 39.8');
let average = 0;
let sum8 = 0;
for (let i = 0; i < arr.length; i++) {
  sum8 += arr[i];
}
average = sum8 / arr.length;
console.log(average);

// Задача 39.9
console.log('Задача 39.9');
let arr9 = [10, 20, 30, 50, 88, 1031, 235, 3000];
let firstChar = '';
for (let i = 0; i < arr9.length; i++) {
  firstChar = String(arr9[i])[0];
  if (firstChar == String(1) || firstChar == String(2) || firstChar == String(5)) {
    console.log(arr9[i]);
  }
}

// Задача 39.10
console.log('Задача 39.10');
for (let i = arr9.length - 1; i >= 0; i--) {
  console.log(arr9[i]);
}

// Задача 39.11
console.log('Задача 39.11');
let arr11 = [12, 4, 2, 54, 90, 5, 61, 21, 8, 9, 10, 13];
for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] === i) {
    console.log(arr11[i]);
  }
}

// Задача 39.12
for (let i = 0; i < arr11.length; i++) {
  document.write(arr11[i]);
  document.write('<br>');
}

// Задача 39.13
for (let i = 0; i < arr1.length; i++) {
  // document.write(`<p>${arr1[i]}</p>`); Новый синтаксис
  document.write('<p>' + arr1[i]+ '</p>');
}

// Задача 39.14
let weekday = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// 1 решение
for (let i = 0; i < weekday.length; i++) {  
  if (weekday[i] === 'Суббота' || weekday[i] === 'Воскресенье') {
    document.write(`<b>${weekday[i]}</b>`);
  } else {
    document.write(weekday[i]);
  }
}
document.write('<br>')
// 2 решение
for(let i = 0; i < weekday.length; i++) {  
  if (i >= weekday.length - 2) {
    document.write('<b>' + weekday[i] + '</b>');
  } else {
    document.write(weekday[i]);
  }
}

// Задача 39.15
document.write('<br>')
let day = 6;
for (let i = 0; i < weekday.length; i++) {
  if (i === day - 1) {
    document.write(`<i>${weekday[i]}</i>`);
  } else {
    document.write(weekday[i]);
  }
}