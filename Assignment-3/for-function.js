'use strict';
for (let number = 0; evenOrOdd(number); number++) {
    console.log(number)
}

function evenOrOdd(number) {
    if (number == 0) {
        console.log(" - ноль")

    } else if (number % 2 !== 0) {
        console.log(" - нечетное число")
    } else if (number % 2 == 0) {
        console.log(" - четное число")
    } else {

    }
    return number <= 10;
}