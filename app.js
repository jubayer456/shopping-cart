function updateInfoCart(product, increasingCounter, price) {
    const counterNumber = document.getElementById('count-' + product);
    const countVal = counterNumber.value;
    if (increasingCounter == true) {
        counterNumber.value = parseInt(countVal) + 1;
    }
    else {
        if (countVal > 0) {
            counterNumber.value = parseInt(countVal) - 1;
        }
    }
    const totalPrice = document.getElementById('price-' + product);
    totalPrice.innerText = price * parseInt(counterNumber.value);
    calculation();
}
document.getElementById('positive-counter1').addEventListener('click', function () {
    updateInfoCart('num1', true, 1219);
})
document.getElementById('negative-counter1').addEventListener('click', function () {
    updateInfoCart('num1', false, 1219);
})
document.getElementById('positive-counter2').addEventListener('click', function () {
    updateInfoCart('num2', true, 59);
})
document.getElementById('negative-counter2').addEventListener('click', function () {
    updateInfoCart('num2', false, 59);

})
function calculation() {
    const b = parseInt(document.getElementById('price-num1').innerText);
    const s = parseInt(document.getElementById('price-num2').innerText);
    const subtotal = b + s;
    const tax = subtotal * .1;
    const totalAmount = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = tax.toFixed();
    document.getElementById('total-Amount').innerText = totalAmount;
}
