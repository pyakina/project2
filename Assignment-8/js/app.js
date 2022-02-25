'use strict';
let cartInfo = document.querySelector('.cart-info');
let newsCart = document.querySelector('.news-cart');

let addToCartBtn = document.getElementsByClassName('add-to-cart');
let cartBtn = document.querySelector('.cart-btn');
let cartCount = document.querySelector('.cart-btn-txt');
let totalSumValue = document.querySelector('.total-sum-value');
let totalSumCart = document.querySelector('.total-sum-cart');
let products = document.querySelectorAll('.products-item-wrp');

/* Массив с товарами */
let productsArray = [];
products.forEach(function(product) {
    let name = product.querySelector('.products-item-title').innerText;
    let description = product.querySelector('.products-item-txt').innerText;
    let price = product.querySelector('.products-item-price').innerText;
    productsArray.push({
        name,
        description,
        price
    });

});

/* Функция открытия/закрытия div'а корзины  */

cartBtn.addEventListener("click", function() {
    newsCart.classList.toggle("hidden");
});

/* Клик по кнопке "Добавить в корзину"*/
Array.prototype.forEach.call(addToCartBtn, function(button) {
    button.addEventListener('click', sendProductToCart);
});

/* Функция-обработчик событи при клике кнопки "Добавить в корзину" */

function sendProductToCart(event) {
    let productId = event.currentTarget.getAttribute('data-productId');
    drawProductsInCart(productId);
};

let cart = {};

/**
 * Метод добавляет продукт в объект basket.
 * @param {number} productId
 */
function addProductToObject(productId) {
    if (!(productId in cart)) {
        cart[productId] = 1;
    } else {
        cart[productId]++;
    }
}



function renderProductInCart(productId) {
    let productExist = document.querySelector(`.number-of-products[data-productId="${productId}"]`);
    if (productExist) {
        newNumberOfProducts(productId);
        recalculateSumForProduct(productId);
    } else {
        getMarkupForProduct(productId);
    }
};


function getMarkupForProduct(productId) {
    let productRow = ` <div class="cart-row">
<div class="product-name">${productsArray[productId].name}</div>
<div class="price-product">$${productsArray[productId].price}</div>
<div><span class="number-of-products" data-productId="${productId}">1</span>&nbsp;шт.</div>
<div class="total-sum" data-productId="${productId}">$${productsArray[productId].price}</div>
</div>`;

    totalSumCart.insertAdjacentHTML('beforebegin', productRow);

};


function newNumberOfProducts(productId) {
    let numberOfProducts = document.querySelector(`.number-of-products[data-productId="${productId}"]`);
    numberOfProducts.textContent++;
    console.log(numberOfProducts);
}


/**
 * Функция пересчитывает стоимость товара умноженное на количество товара
 * в корзине.
 * @param {number} productId
 */
function recalculateSumForProduct(productId) {
    let totalSum = document.querySelector(`.total-sum[data-productId="${productId}"]`);
    let totalPriceForRow = (productsArray[productId].price * cart[productId]).toFixed(2);
    totalSum.textContent = '$' + totalPriceForRow;
}

/**
 * Функция пересчитывает общую стоимость корзины и выводит это значение на страницу.
 */
function recalculateTotalSumCart() {
    let allTotalSum = 0;
    for (let productId in cart) {
        allTotalSum += productsArray[productId].price * cart[productId];
    }
    totalSumValue.textContent = allTotalSum.toFixed(2);
};

function increaseCartCount() {
    cartCount.textContent++;
};

function drawProductsInCart(productId) {
    increaseCartCount();
    addProductToObject(productId);
    renderProductInCart(productId);
    recalculateTotalSumCart();
};