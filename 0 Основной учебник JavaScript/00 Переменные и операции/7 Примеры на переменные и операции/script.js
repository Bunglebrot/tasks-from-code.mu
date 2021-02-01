'use strict';

console.log('Количество секунд');
// Задача 7.1
const secInMin = 60;
const minInHour = 60;
const hourInDay = 24;
const secInDay = secInMin * minInHour * hourInDay;
console.log(secInDay, 'Количество секунд в сутках');

// Задача 7.2
console.log(secInDay * 30, 'Количество секунд в 30 сутках');

// Задача 7.3
let secInYear = secInDay * 365;
console.log(secInYear, 'Количество секунд в году');

// Задача 7.4
const minInDay = minInHour * hourInDay
console.log(minInDay, 'Количество минут в сутках');

// Задача 7.5
let minInYear = minInDay * 365;
console.log(minInYear, 'Количество минут в году');

console.log('Перевод в байты и наоборот')
// Задача 7.6
const byte = 1;
const kilobyte = byte * 1024;
const megabyte = kilobyte ** 2;
const gigabyte = megabyte ** 2;
const terabyte = gigabyte ** 2;
console.log(megabyte, 'Количество байт в мегабайте');

// Задача 7.7
console.log(gigabyte, 'Количество байт в гигабайте');

// Задача 7.8
console.log(gigabyte * 10, 'Количество байт в 10 гигабайтах');

// Задача 7.9
console.log(terabyte, 'Количество байт в терабайте');

// Задача 7.10
console.log(terabyte / kilobyte, 'Количество килобайт в терабайте');

console.log('Площади фигур');
// Задача 7.11
let r = 5;
let sCircle = 3.1415 * (r ** 2);
console.log(sCircle, 'Площадь круга c радиусом равным 5');

// Задача 7.12
let a = 81;
let sSquare = a ** 2;
console.log(sSquare, 'Площадь квадрата c длинной одной стороны равной 81');

// Задача 7.13
let sideA = 12;
let sideB = 8;
let sRect = sideA * sideB;
console.log(sRect, 'Площадь прямоугольника, где одна сторона равна 12, а вторая 8')

// Задача 7.14
let perimetr = (sideA + sideB) * 2;
console.log(perimetr, 'Периметр прямоугольника с теми же сторонами');

console.log('Из Цельсия в Фарингейты и наоборот');
// Задача 7.15
let tc = 35;
let tf = tc * (9 / 5) + 32;
console.log(`${tc} градусов Цельсия будет равно ${tf} градусов по Фаренгейту`)

// Задача 7.16
let tfData = 90;
let tcFromTfData = (tfData - 32) / (9 / 5);
console.log(`${tfData} градусов по Фаренгейту будет приблизительно равно ${tcFromTfData} градусов Цельсия`)