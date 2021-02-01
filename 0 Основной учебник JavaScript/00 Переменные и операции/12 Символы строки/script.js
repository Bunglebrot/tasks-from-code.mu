'use strict';

// Задача 12.1
let string1 = 'abcde';
console.log(string1[0], string1[2], string1[4]);

// Задача 12.2
let reverseString1 = string1[4] + string1[3] + string1[2] + string1[1] + string1[0];
console.log(reverseString1);

// Задача 12.3
let num = 3;
console.log(string1[num], reverseString1[num]);

// Задача 12.4
let string2 = string1 + 'fghijkl';
console.log(string2[string2.length - 1]);

// Задача 12.5
console.log(string2[string2.length - 2]);

// Задача 12.6
console.log(string2[string2.length - 3]);

// Задача 12.7 Сумма цифр из числовой строки
let numStr = '12345';
let sumNumStr = Number(numStr[0]) + Number(numStr[1]) + Number(numStr[2]) + Number(numStr[3]) + Number(numStr[4]);
console.log(sumNumStr);

// Задача 12.8 Сумма цифр числа
let num2 = 12345;
let numToStr = String(num2);
let sumEveryNum = Number(numToStr[0]) + Number(numToStr[1]) + Number(numToStr[2]) + Number(numToStr[3]) + Number(numToStr[4]);
console.log(sumEveryNum);

// Задача 12.9 Произведение чисел числа
let multiplyEveryNum = numToStr[0] * numToStr[1] * numToStr[2] * numToStr[3] * numToStr[4];
console.log(multiplyEveryNum);

// Задача 12.10 Переставить цифры числа в обратном порядке
let reverseNumToStr = numToStr[4] + numToStr[3] + numToStr[2] + numToStr[1] + numToStr[0];
console.log(Number(reverseNumToStr));