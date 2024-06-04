let cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    updateCart();
}

function showCart() {
    document.getElementById('cart').style.display = 'block';
}

function clearCart() {
    cartItems = [];
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}
