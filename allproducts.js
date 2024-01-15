document.addEventListener('DOMContentLoaded', function () {
    // Example function to load products dynamically
    function loadProducts() {
        const allProductsContainer = document.querySelector('.sh-m-all-products');

        // Example product data (replace with your actual data)
        const products = [
            { id: 1, name: 'Nike Ja-Day-One', price: 129.99, image: 'nike-ja-1-day-one.png', description: 'Step onto the court with confidence in our premium basketball shoes. Designed for maximum comfort and performance.Jump Like Ja!' },
            { id: 2, name: 'Memphis Grizzlies 2021 Jersey', price: 49.99, image: 'MemphisGrizzlies2021Jersey.png', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 3, name: 'Basketball Hoop', price: 949.99, image: 'HoopForza.png', description: 'Elevate your game with our durable basketball hoops. Perfect for practicing your jump shots and slam dunks.' },
            { id: 4, name: 'LeBron 19', price: 229.99, image: 'lebron19.jpg', description: 'The LeBron 19 basketball shoes, delivering a combination of power, speed, and precision for the court.' },
            { id: 5, name: 'Adidas Pro Bounce 2022', price: 179.99, image: 'adidasprobounce2022.png', description: 'Pro Bounce 2022 offers enhanced support and cushioning, ensuring optimal performance during the game.' },
            { id: 6, name: 'Spalding Street Basketball', price: 29.99, image: 'spaldingstreetbasketball.png', description: 'Take your game to the streets with the Spalding Street Basketball, designed for outdoor play and durability.' },
            { id: 7, name: 'Under Armour Curry 8', price: 199.99, image: 'underarmourcurry8flow.png', description: 'The Curry 8, equipped with innovative technology for agility and responsiveness on the basketball court.' },
            { id: 8, name: 'Wilson Evolution Basketball', price: 39.99, image: 'wilsonevolutionbasketball.png', description: 'The Wilson Evolution Basketball, known for its superior grip and game-changing control on indoor courts.' },
            { id: 9, name: 'Nike Elite Crew Socks', price: 14.99, image: 'nikeelitecrewbasketballsocks.png', description: 'Nike Elite Crew Socks provide ultimate comfort and support, making them the perfect choice for every game.' },
            { id: 9, name: 'Nike Kyrie 9 IX Infinity', price: 119.99, image: 'Kyrie9infinity.jpg', description: 'Nike Elite Crew Socks provide ultimate comfort and support, making them the perfect choice for every game.' },
            { id: 10, name: 'LeBron James Jersey', price: 80.99, image: 'lakersjersey.png', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 11, name: 'Trae Young Jersey', price: 69.99, image: 'atlantahawksjersey.png', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 12, name: 'Luka Doncic Jersey', price: 78.99, image: 'dallasmavsjersey.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 13, name: 'Russell Westbrook Jersey', price: 120.99, image: 'laclippersrussellwestbrook.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 14, name: 'DeMar Derozan Jersey', price: 94.99, image: 'demarderozan.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 15, name: 'Shai Gilgeous-Alexander Jersey', price: 119.99, image: 'shaijersey.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 16, name: 'James Harden Jersey', price: 45.99, image: 'jamesharden.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 17, name: 'Kevin Durant Jersey', price: 49.99, image: 'kd.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 18, name: 'Kyrie Irving Jersey', price: 55.99, image: 'kyrieirving.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 19, name: 'Joel Embiid Jersey City Edition', price: 59.99, image: 'joelembiid.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 20, name: 'Lamello Ball Jersey', price: 90.99, image: 'lamelo.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 21, name: 'Giannis Antetokounmpo Jersey Icon Edition', price: 60.99, image: 'giannis.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
            { id: 10, name: 'Big Kids Nike Basketball Shoes', price: 79.99, image: 'bigkids.jpg', description: 'High-quality basketball shoes designed for young players. Provides comfort and support for the court.' },
            { id: 11, name: 'Looney Toons Basketball Jersey', price: 34.99, image: 'tunesquad.jpg', description: 'Authentic youth basketball jersey for a stylish and comfortable look. Represent your favorite team!' },
            { id: 12, name: 'Mini Basketball Hoop Set', price: 19.99, image: 'minihoop.jpg', description: 'Mini basketball hoop set for indoor fun. Perfect for kids to practice their shots and have a great time.' },
            { id: 13, name: 'Youth Basketball', price: 14.99, image: 'littlebasketball.jpg', description: 'Durable and size-appropriate basketball for young players. Ideal for both indoor and outdoor use.' },
            { id: 14, name: 'Youth Compression Shorts', price: 24.99, image: 'compressionshorts.jpg', description: 'Compression shorts designed for youth athletes. Provides support and flexibility during play.' },
            { id: 15, name: 'Youth Basketball Socks', price: 9.99, image: 'kidsocks.jpg', description: 'Comfortable and moisture-wicking basketball socks for young players. Enhance performance on the court.' },
            { id: 10, name: 'Air Jordan Jumpman Headband', price: 9.99, image: 'jumpmanheadband.jpg', description: 'Keep the sweat out of your eyes with this stylish basketball headband.' },
            { id: 11, name: 'Basketball Water Bottle', price: 14.99, image: 'basketballwaterbottle.jpg', description: 'Stay hydrated on and off the court with our basketball-themed water bottle.' },
            { id: 12, name: 'Nike Elite Pro Basketball Backpack', price: 29.99, image: 'eliteprobasketballbackpack.jpg', description: 'Carry your gear in style with this basketball-themed backpack.' },
            { id: 13, name: 'NBA Basketball Wristband Set', price: 7.99, image: 'nbawristbands.jpg', description: 'Complete your look with this set of NBA Basketball Wristbands for added style , comfort , sweat and the safety of your wrists so you can never get injured again and play as a Proffesional Basketball Player!' },
            { id: 14, name: 'The GREEK FREAK Basketball Phone Case', price: 19.99, image: 'greekfreak.jpg', description: 'Protect your phone with a basketball-themed phone case featuring your favorite favorite hardworking player+Finals MVP in the year of 2021 Giannis Antetokounmpo a.k.a The GREEK FREAK!' },
            { id: 15, name: 'Basketball Socks', price: 12.99, image: 'logocrewsocks.jpg', description: 'Step up your sock game with these comfortable and stylish basketball-themed socks.' },
            { id: 16, name: 'Basketball Hoop Earrings', price: 17.99, image: 'earrings.jpg', description: 'Show your love for basketball with these hoop earrings featuring a basketball charm.' },
            { id: 17, name: 'NBA Basketball Training Cones', price: 24.99, image: 'cones.jpg', description: 'Improve your agility , skills , strength , power , explosivity , dribbling and time reaction , so you can destroy and break your opponents ankles with these new NBA Basketball Training Cones!' },
            // ... (more products)
        ];

        products.forEach(product => {
            const productElement = createProductElement(product);
            allProductsContainer.appendChild(productElement);
        });
    }

    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.classList.add('sh-m-product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="300">
            <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>${product.description}</p>
        `;

        return productElement;
    }

    // Load products on page load
    loadProducts();
});
