document.addEventListener('DOMContentLoaded', function () {
    // Initialize or retrieve the cart data from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Existing code...

    function addToCart(productId) {
        // You can replace this with your actual product data
        const products = [
            { id: 1, name: 'Nike Ja-Day-One', price: 129.99 },
            { id: 2, name: 'Memphis Grizzlies 2021 Jersey', price: 49.99 },
            { id: 3, name: 'Basketball Hoop', price: 949.99 }
            // Add more products as needed
        ];

        const product = products.find(p => p.id === productId);

        if (product) {
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCartBadge(); // Update the cart badge when adding to the cart
            updateLocalStorage(); // Save the updated cart data to local storage
            alert(`Added ${product.name} to the cart!\nPrice: $${product.price.toFixed(2)}`);
        }
    }

    function updateCartBadge() {
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            cartBadge.textContent = cart.reduce((total, item) => total + item.quantity, 0).toString();
        }
    }

    function updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Existing code...
});
