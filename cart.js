document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            const emptyCartMessage = document.createElement('p');
            emptyCartMessage.textContent = 'Your cart is empty.';
            cartItemsContainer.appendChild(emptyCartMessage);
        } else {
            cart.forEach(item => {
                const cartItemElement = createCartItemElement(item);
                cartItemsContainer.appendChild(cartItemElement);
            });
        }
    }

    function createCartItemElement(item) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('sh-m-cart-item'); // Corrected class name

        const productImage = document.createElement('img');
        productImage.src = item.image;
        productImage.alt = item.name;

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('sh-m-cart-item-info'); // Corrected class name

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;

        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            removeFromCart(item.id);
        };

        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);
        itemInfo.appendChild(itemQuantity);

        cartItem.appendChild(productImage);
        cartItem.appendChild(itemInfo);
        cartItem.appendChild(removeButton);

        return cartItem;
    }

    function removeFromCart(productId) {
        const index = cart.findIndex(item => item.id === productId);

        if (index !== -1) {
            cart.splice(index, 1);
            updateLocalStorage();
            displayCartItems();
        }
    }

    function updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Display cart items on page load
    displayCartItems();
});
