'use strict';

// Задание 16.1
const arr = ['a', 'b', 'c'];
alert(arr);
console.log(arr);

// Задача 16.2
console.log(arr[0], arr[1], arr[2]);

// Задача 16.3
let arr1 = ['a', 'b', 'c', 'd'];
let resultString1 = arr1[0] + '+' + arr1[1] + '+' + arr1[2] + '+' + arr1[3];
console.log(resultString1);

// Задача 16.4
let arr2 = [1, 2, 3];
let resultString2 = arr2[0] + arr2[1] + arr2[2];
console.log(resultString2);

// Задача 16.5
let arr3 = [2, 5, 3, 9];
let resultString3 = arr3[0] * arr3[1] + arr3[2] * arr3[3];
console.log(resultString3);

// Задача 16.6
let arr4 = ['default', 'modified', 'clear', 'locked', 'multiply'];
console.log(arr4.length);

// Задача 16.7
let arr5 = [12, 44, 61, 87, 335, 91, 25, 12, 0, 144];
console.log(arr5[arr5.length - 1]);

// Задача 16.8
console.log('Изменение массива');
console.log(arr);
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr);

// Задача 16.9
console.log('Перезапись элементов');
console.log(arr5);
arr5[0] += 3;
arr5[1] += 3;
arr5[2] += 3;
arr5[3] += 3;
arr5[4] += 3;
arr5[5] += 3;
arr5[6] += 3;
arr5[7] += 3;
arr5[8] += 3;
arr5[9] += 3;
console.log(arr5);

// Задача 16.10
console.log('Инкремент к элементам');
console.log(arr);
arr[0]++;
arr[1]++;
arr[2]++;
console.log(arr);

// Задача 16.11
let arr6 = [];
arr6[0] = 1;
arr6[1] = 2;
arr6[2] = 3;
console.log(arr6);

// Задача 16.12
arr6[3] = 4;
arr6[4] = 5;
console.log(arr6);