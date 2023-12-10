const menuIcon = document.querySelector("#menu-icon")
const closeIcon = document.querySelector("#close-icon")
const ulList = document.querySelector("ul")
const banner = document.querySelector("#banner")

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

banner.addEventListener("click", () => {
    menuIcon.style.display = "block"
    closeIcon.style.display = "none"
    ulList.style.display = "none"
})

// active ul



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
    setInterval(changeImage, 1000);
});


// text color changed

// document.addEventListener('DOMContentLoaded', function () {
//     const textContainer = document.getElementById('textContainer');
//     const colors = ['text-white', 'text-black', 'text-red-500']; // Add your desired colors here
//     let currentIndex = 0;

//     function changeColor() {
//         currentIndex = (currentIndex + 1) % colors.length;
//         textContainer.className = `md:text-4xl text-xl md:ml-0  font-bold pt-11 transition duration-300 ease-in-out ${colors[currentIndex]}`;
//         setTimeout(changeColor, 1000); // Change color every 10 seconds
//     }

//     // Initial call to start the color-changing loop
//     changeColor();
// });


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
