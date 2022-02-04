/*. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.*/
let arg1 = Number(prompt("Введите первое число"));
let arg2 = Number(prompt("Введите второе число"));
let result = null;
let operation = prompt("Введите действие")
mathOperation();
alert("Результат действия: " + result); // проверила, выдает null :(

function mathOperation(arg1, arg2, operation) {
    function summation() {
        result = arg1 + arg2;
        return result;
    }

    function difference() {
        result = arg1 - arg2;
        return result;
    }

    function dividing() {
        result = arg1 / arg2;
        return result;
    }

    function multiplication() {
        result = arg1 * arg2;
        return result;
    }
    switch (operation) {
        case "Сумма":
            summation();
            break;
        case "Разность":
            difference();
            break;
        case "Деление":
            dividing();
            break;
        case "Умножение":
            multiplication();
            break;

    }
}