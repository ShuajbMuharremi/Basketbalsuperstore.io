document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: 'Nike Ja-Day-One', price: 129.99, image: 'nike-ja-1-day-one.png', description: 'Step onto the court with confidence in our premium basketball shoes. Designed for maximum comfort and performance.Jump Like Ja!' },
        { id: 2, name: 'Memphis Grizzlies 2021 Jersey', price: 49.99, image: 'MemphisGrizzlies2021Jersey.png', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 3, name: 'Basketball Hoop', price: 949.99, image: 'HoopForza.png', description: 'Elevate your game with our durable basketball hoops. Perfect for practicing your jump shots and slam dunks.' },
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderProducts() {
        const featuredProductsContainer = document.getElementById('featuredProducts');

        products.forEach(product => {
            const productElement = createProductElement(product);
            featuredProductsContainer.appendChild(productElement);
        });
    }

    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.classList.add('featured-product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="featured-product-body">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <button onclick="showProductModal(${product.id})">View Details</button>
            </div>
        `;

        return productElement;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);

        if (product) {
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCartBadge();
            updateLocalStorage();
            alert(`Added ${product.name} to the cart!\nPrice: $${product.price.toFixed(2)}`);
        }
    }

    function updateCartBadge() {
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            cartBadge.textContent = cart.reduce((total, item) => total + item.quantity, 0).toString();
        }
    }

    function showProductModal(productId) {
        const product = products.find(p => p.id === productId);

        if (product) {
            const modalContent = `
                <div>
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                    <button onclick="closeModal()">Close</button>
                </div>
            `;

            showModal(modalContent);
        }
    }

    function showCart() {
        const cartContent = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `).join('');

        const cartModalContent = `
            <div>
                <h2>Shopping Cart</h2>
                ${cartContent}
                <button onclick="closeModal()">Close</button>
            </div>
        `;

        showModal(cartModalContent);
    }

    function removeFromCart(productId) {
        const index = cart.findIndex(item => item.id === productId);

        if (index !== -1) {
            const item = cart[index];

            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                cart.splice(index, 1);
            }

            updateCartBadge();
            updateLocalStorage();
            showCart();
        }
    }

    function showModal(content) {
        const modalContainer = document.getElementById('modalContainer');
        modalContainer.innerHTML = `
            <div class="modal">
                ${content}
            </div>
        `;

        modalContainer.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Add event listener to close the modal when clicking outside the content
        modalContainer.addEventListener('click', function (event) {
            if (event.target === modalContainer) {
                closeModal();
            }
        });
    }

    function closeModal() {
        const modalContainer = document.getElementById('modalContainer');
        modalContainer.innerHTML = '';
        modalContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Render featured products on page load
    renderProducts();
    updateCartBadge();
});

