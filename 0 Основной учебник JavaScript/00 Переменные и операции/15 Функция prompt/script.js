'use strict';

// Задача 15.1
let userAge = prompt('Введите Ваш возраст, Пользователь');
alert(`Возраст Пользователя ${userAge}`);

// Задача 15.2
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
let sum = Number(num1) + Number(num2);
alert(`Сумма введённых чисел ${sum}`);

// Задача 15.3
let sideSquare = prompt('Введите число длины стороны квадрата');
let sSquare = sideSquare ** 2;
alert(`Площадь квадрата со стороной равной ${sideSquare} равна ${sSquare}`);

// Задача 15.4
let firstRectSide = prompt('Введите число первой стороны прямоугольника');
let secondRectSide = prompt('Введите число второй стороны прямоугольника');
let perimetrRect = (Number(firstRectSide) + Number(secondRectSide)) * 2;
alert(`Периметр прямоугольника со сторонами равными ${firstRectSide} и ${secondRectSide} будет равен ${perimetrRect}`);