const menuIcon = document.querySelector("#menu-icon")
const closeIcon = document.querySelector("#close-icon")
const ulList = document.querySelector("ul")

menuIcon.addEventListener("click", function () {
    menuIcon.style.display = "none"
    closeIcon.style.display = "block"
    ulList.style.display = "block"
    ulList.style.paddingTop = "40px"
    ulList.style.fontSize = "30px"
    ulList.style.paddingRight = "15px"
})

closeIcon.addEventListener("click", function () {
    menuIcon.style.display = "block"
    closeIcon.style.display = "none"
    ulList.style.display = "none"

})

// active ul


// Define routes
page('/', updateActiveState);
page('/about', updateActiveState);
page('/contact', updateActiveState);

// Start page.js
page();


// banner image changed 5 sec

document.addEventListener("DOMContentLoaded", function () {
    // Array of image URLs
    const imageUrls = [
        'assets/Rectangle 7 (7).png',
        'assets/Rectangle 7 (8).png',
        'assets/MTJV3.png',
        'assets/MT253.png',
        'assets/Rectangle 7 (4).png',
        'assets/Rectangle 7 (6).png',
        // Add more image URLs as needed
    ];

    // Get the image element
    const imageElement = document.getElementById('changeableImage');

    // Function to change the image
    function changeImage() {
        // Get a random index to select a random image from the array
        const randomIndex = Math.floor(Math.random() * imageUrls.length);

        // Set the new image source
        imageElement.src = imageUrls[randomIndex];
    }

    // Change the image every 5 seconds in a loop
    setInterval(changeImage, 3000);
});


// contact form validation

(function () {
    'use strict';

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');

        // Clear inputs
        form.reset();
    }, false);
})();


// add card
// Sample product data with images
const products = [
    { name: 'AirPods Max', price: 199.99, imageUrl: 'assets/Rectangle 7 (4).png' },

    // Add more products as needed
];

// Cart to store selected items
const cart = [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    cart.push(item);
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');
    const productCountElement = document.getElementById('product-count');

    // Clear existing items in the cart
    cartList.innerHTML = '';

    // Add each item to the cart
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'bg-white p-4 rounded shadow flex justify-between items-center';
        li.innerHTML = `
            <img src="${products[index].imageUrl}" alt="${item.name}" class="mr-2 rounded" style="max-width: 50px;">
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})" class="text-red-500">Remove</button>
        `;
        cartList.appendChild(li);
    });

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;

    // Update product count
    productCountElement.textContent = `Product Count: ${cart.length}`;
}

