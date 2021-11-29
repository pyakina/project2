'use strict';
let a = parseInt(Number(prompt("Введите число a")));
let b = parseInt(Number(prompt("Введите число b")));
/**
 * Функция разности чисел a и b
 */
function difference() {
    alert("Разность чисел: " + (a - b));
}
/**
 * Функция произведения чисел a и b
 */
function multiplication() {
    alert("Произведение чисел: " + (a * b));
}
if (a >= 0 && b >= 0) {
    difference();
} else if (a < 0 && b < 0) {
    multiplication();
} else {
    alert("Введите числа снова");
}