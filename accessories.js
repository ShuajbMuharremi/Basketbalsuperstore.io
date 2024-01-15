document.addEventListener('DOMContentLoaded', function () {
    const accessoriesData = [
        { id: 10, name: 'Air Jordan Jumpman Headband', price: 9.99, image: 'jumpmanheadband.jpg', description: 'Keep the sweat out of your eyes with this stylish basketball headband.' },
        { id: 11, name: 'Basketball Water Bottle', price: 14.99, image: 'basketballwaterbottle.jpg', description: 'Stay hydrated on and off the court with our basketball-themed water bottle.'},
        { id: 15, name: 'Nike Elite Pro Basketball Backpack', price: 29.99, image: 'eliteprobasketballbackpack.jpg', description: 'Carry your gear in style with this basketball-themed backpack.' },
        { id: 16, name: 'NBA Basketball Wristband Set', price: 7.99, image: 'nbawristbands.jpg', description: 'Complete your look with this set of NBA Basketball Wristbands for added style , comfort , sweat and the safety of your wrists so you can never get injured again and play as a Proffesional Basketball Player!' },
        { id: 17, name: 'The GREEK FREAK Basketball Phone Case', price: 19.99, image: 'greekfreak.jpg', description: 'Protect your phone with a basketball-themed phone case featuring your favorite favorite hardworking player+Finals MVP in the year of 2021 Giannis Antetokounmpo a.k.a The GREEK FREAK!' },
        { id: 18, name: 'Basketball Socks', price: 12.99, image: 'logocrewsocks.jpg', description: 'Step up your sock game with these comfortable and stylish basketball-themed socks.' },
        { id: 17, name: 'Basketball Hoop Earrings', price: 17.99, image: 'earrings.jpg', description: 'Show your love for basketball with these hoop earrings featuring a basketball charm.' },
        { id: 18, name: 'NBA Basketball Training Cones', price: 24.99, image: 'cones.jpg', description: 'Improve your agility , skills , strength , power , explosivity , dribbling and time reaction , so you can destroy and break your opponents ankles with these new NBA Basketball Training Cones!' },
        // Add more accessories as needed
    ];

    function createAccessoryCard(accessory) {
        const card = document.createElement('div');
        card.classList.add('sh-m-featured-product'); // Corrected class name

        const image = document.createElement('img');
        image.src = accessory.image;
        image.alt = accessory.name;

        const body = document.createElement('div');
        body.classList.add('sh-m-featured-product-body'); // Corrected class name

        const title = document.createElement('h3');
        title.textContent = accessory.name;

        const description = document.createElement('p');
        description.textContent = accessory.description;

        const price = document.createElement('p');
        price.textContent = `$${accessory.price.toFixed(2)}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = function () {
            addToCart(accessory.id);
        };

        const viewDetailsButton = document.createElement('button');
        viewDetailsButton.textContent = 'View Details';
        viewDetailsButton.onclick = function () {
            showProductModal(accessory.id);
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

    function displayAccessories() {
        const accessoriesContainer = document.getElementById('accessories'); // Corrected ID

        accessoriesData.forEach(function (accessory) {
            const card = createAccessoryCard(accessory);
            accessoriesContainer.appendChild(card);
        });
    }

    displayAccessories();
});
