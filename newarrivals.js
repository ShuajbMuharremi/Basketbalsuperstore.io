document.addEventListener('DOMContentLoaded', function () {
    // Sample new arrivals data
    const newArrivalsData = [
        {
            id: 4,
            name: 'LeBron 19',
            description: 'The LeBron 19 basketball shoes, delivering a combination of power, speed, and precision for the court.',
            price: 229.99,
            image: 'lebron19.jpg'
        },
        {
            id: 5,
            name: 'Adidas Pro Bounce 2022',
            description: 'Pro Bounce 2022 offers enhanced support and cushioning, ensuring optimal performance during the game.',
            price: 179.99,
            image: 'adidasprobounce2022.png'
        },
        {
            id: 6,
            name: 'Spalding Street Basketball',
            description: 'Take your game to the streets with the Spalding Street Basketball, designed for outdoor play and durability.',
            price: 29.99,
            image: 'spaldingstreetbasketball.png'
        },
        {
            id: 7,
            name: 'Under Armour Curry 8',
            description: 'The Curry 8, equipped with innovative technology for agility and responsiveness on the basketball court.',
            price: 199.99,
            image: 'underarmourcurry8flow.png'
        },
        {
            id: 8,
            name: 'Wilson Evolution Basketball',
            description: 'The Wilson Evolution Basketball, known for its superior grip and game-changing control on indoor courts.',
            price: 39.99,
            image: 'wilsonevolutionbasketball.png'
        },
        {
            id: 9,
            name: 'Nike Elite Crew Socks',
            description: 'Nike Elite Crew Socks provide ultimate comfort and support, making them the perfect choice for every game.',
            price: 14.99,
            image: 'nikeelitecrewbasketballsocks.png'
        },
        {
            id: 10,
            name: 'Nike Kyrie 9 IX Infinity',
            description: 'Nike Kyrie 9 IX Infinity ,to completely destroy your opponents ankles.',
            price: 119.99,
            image: 'Kyrie9infinity.jpg'
        }
        // Add more new arrivals as needed
    ];

    // Function to create a new arrival card
    function createNewArrivalCard(newArrival) {
        const card = document.createElement('div');
        card.classList.add('sh-m-featured-product'); // Corrected class name

        const image = document.createElement('img');
        image.src = newArrival.image;
        image.alt = newArrival.name;

        const body = document.createElement('div');
        body.classList.add('sh-m-featured-product-body'); // Corrected class name

        const title = document.createElement('h3');
        title.textContent = newArrival.name;

        const description = document.createElement('p');
        description.textContent = newArrival.description;

        const price = document.createElement('p');
        price.textContent = `$${newArrival.price.toFixed(2)}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = function () {
            addToCart(newArrival.id);
        };

        const viewDetailsButton = document.createElement('button');
        viewDetailsButton.textContent = 'View Details';
        viewDetailsButton.onclick = function () {
            showProductModal(newArrival.id);
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

    // Function to add new arrivals to the page
    function displayNewArrivals() {
        const newArrivalsContainer = document.getElementById('sh-m-newArrivals'); // Corrected ID

        newArrivalsData.forEach(function (newArrival) {
            const card = createNewArrivalCard(newArrival);
            newArrivalsContainer.appendChild(card);
        });
    }

    // Call the function to display new arrivals
    displayNewArrivals();
});
