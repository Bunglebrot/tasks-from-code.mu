'use strict';

// Задача 34.1
let userAge = confirm('Вам уже есть 18 лет?');
if (userAge) {
  alert('Текст для взрослых');
} else {
  alert('Доступ пользователю запрещён');
}