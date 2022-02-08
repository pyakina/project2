'use strict';
/*. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.*/

let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
let result = null;

function summation() {
    result = num1 + num2;
    return result;
}

function difference() {
    result = num1 - num2;
    return result;
}

function dividing() {
    result = num1 / num2;
    return result;
}

function multiplication() {
    result = num1 * num2;
    return result;
}
summation();
difference();
dividing();
multiplication();