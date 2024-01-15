document.addEventListener('DOMContentLoaded', function () {
    const youthProductsData = [
        { id: 10, name: 'Big Kids Nike Basketball Shoes', price: 80.99, image: 'bigkids.jpg', description: 'High-quality basketball shoes designed for young players. Provides comfort and support for the court.' },
        { id: 11, name: 'Looney Toons Basketball Jersey', price: 34.99, image: 'tunesquad.jpg', description: 'Authentic youth basketball jersey for a stylish and comfortable look. Represent your favorite team!'},
        { id: 15, name: 'Mini Basketball Hoop Set', price: 19.99, image: 'minihoop.jpg', description: 'Mini basketball hoop set for indoor fun. Perfect for kids to practice their shots and have a great time.' },
        { id: 16, name: 'Youth Basketball', price: 14.99, image: 'littlebasketball.jpg', description: 'Durable and size-appropriate basketball for young players. Ideal for both indoor and outdoor use.' },
        { id: 17, name: 'Youth Compression Shorts', price: 24.99, image: 'compressionshorts.jpg', description: 'Compression shorts designed for youth athletes. Provides support and flexibility during play.' },
        { id: 18, name: 'Youth Basketball Socks', price: 9.99, image: 'kidsocks.jpg', description: 'Comfortable and moisture-wicking basketball socks for young players. Enhance performance on the court.' },
        // Add more men's products as needed
    ];

    function createYouthProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('sh-m-featured-product'); // Corrected class name

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const body = document.createElement('div');
        body.classList.add('sh-m-featured-product-body'); // Corrected class name

        const title = document.createElement('h3');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = function () {
            addToCart(product.id);
        };

        const viewDetailsButton = document.createElement('button');
        viewDetailsButton.textContent = 'View Details';
        viewDetailsButton.onclick = function () {
            showProductModal(product.id);
        };

        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(price);
        body.appendChild(addToCartButton);
        body.appendChild(viewDetailsButton);

        card.appendChild(image);
        card.appendChild(body);

        return card;
    }

    function displayYouthProducts() {
        const youthProductsContainer = document.getElementById('youthProducts'); // Corrected ID

        youthProductsData.forEach(function (product) {
            const card = createYouthProductCard(product);
            youthProductsContainer.appendChild(card);
        });
    }

    displayYouthProducts();
});
