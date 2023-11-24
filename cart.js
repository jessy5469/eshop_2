const cart = [];
const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function removeItemFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function clearCart() {
    cart.length = 0;
    displayCart();
}

function displayCart() {
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `${item.product} - $${item.price} <button onclick="removeItemFromCart(${index})">Remove</button>`;
        cartItemsElement.appendChild(itemElement);
        total += item.price;
    });

    cartTotalElement.textContent = total.toFixed(2);
}

function goToCart() {
    window.location.href = "cart.html";
}
