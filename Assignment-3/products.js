/*Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach*/
'use strict';
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.price = products.forEach(function(product) {
    product.price = product.price * ((100 - 15) / 100);
})
console.log(products[0].price);
console.log(products[1].price);
console.log(products[2].price);