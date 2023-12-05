const menuIcon = document.querySelector("#menu-icon")
const closeIcon = document.querySelector("#close-icon")
const ulList = document.querySelector("ul")

menuIcon.addEventListener("click", function() {
    menuIcon.style.display = "none"
    closeIcon.style.display = "block"
    ulList.style.display = "block"
    ulList.style.paddingTop = "40px"
    ulList.style.fontSize = "30px"
    ulList.style.paddingRight = "15px"
})

closeIcon.addEventListener("click", function() {
    menuIcon.style.display = "block"
    closeIcon.style.display = "none"
    ulList.style.display = "none"

})

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
            setInterval(changeImage, 5000);
        });