'use strict';

// Задача 29.1
let minute = 89;
let thirdPart;
if (minute >=0 && minute <= 19) {
  thirdPart = 1;
} else if (minute >= 20 && minute <= 39) {
  thirdPart = 2;
} else if (minute >= 40 && minute <= 60) {
  thirdPart = 3;
} else thirdPart = 'неверную';
console.log(`${minute} входит в ${thirdPart} треть часа`);

// Задача 29.2
let arr = [13, 53, 32];
let sumArrItems;
if (arr.length === 3) {
  sumArrItems = arr[0] + arr[1] + arr[2];
}
console.log(sumArrItems);

// Задача 29.3
let num = 123450108;
let lastNum = String(num)[String(num).length - 1];
if (lastNum == 0) {
  console.log('верно');
} else {
  console.log('неверно');
}

// Задача 29.4
if (lastNum == 0 || lastNum == 2 || lastNum == 4 || lastNum == 6 || lastNum == 8) {
  console.log(`число ${num} чётное`);
} else {
  console.log(`число ${num} нечётное`);
}

// Задача 29.5
let number = 33;
if (number % 2 === 0) {
  console.log(`число ${number} чётное`);
} else {
  console.log(`число ${number} нечётное`);
}

// Задача 29.6
if (number % 3 === 0) {
  console.log(`число ${number} кратно 3`);
} else {
  console.log(`число ${number} не кратно 3`);
}