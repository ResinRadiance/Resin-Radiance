let cart = [];
const totalPriceElement = document.getElementById('total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.parentElement;
        const productName = product.getAttribute('data-name');
        const productPrice = parseInt(product.getAttribute('data-price'));

        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = total;
}
