/*
1. 10 плюс 10 получаем 20
2. число 20 конкатенирует со строкой 10
3. строку 2010 присваиваем в переменную result1
4. с помощью console.log result1 в консоль
*/
let result1 = 10 + 10 + "10";
console.log(result1);
/*
1. число 10 конкатенирует со строкой 10
2. строка 1010 конкатенирует с числом 10 получаем строку 101010
3. 101010 присваиваем в переменную result2
4. с помощью console.log выводим result2 в консоль
*/
let result2 = 10 + "10" + 10;
console.log(result2);
/*
1. 10 плюс 10 получаем 20
2. строка 10 приводится в число 10
3. 20 плюс 10 получаем 30
4. 30 присваиваем в переменную result3
5. с помощью console.log выводим result3 в консоль
*/
let result3 = 10 + 10 + +"10";
console.log(result3);
/*
1. пустая строка приводится в -0
2. 10 делим на -0 получаем -бесконечность
3. -бесконечность присваиваем в переменную result4
4. с помощью console.log выводим result4 в консоль
*/
let result4 = 10 / -"";
console.log(result4);
/*
1. строка 2,5 не приводится в число, получаем NaN
2. 10 делим на NaN получаем NaN
3. NaN присваиваем в переменную result5
4. с помощью console.log выводим result5 в консоль
*/
let result5 = 10 / +"2,5";
console.log(result5);