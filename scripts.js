// scripts.js
let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(cartItem => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${cartItem.item} - $${cartItem.price}`;
        cartItems.appendChild(itemElement);
        totalPrice += cartItem.price;
    });
    document.getElementById('total-price').innerText = totalPrice;
}
