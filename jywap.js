document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');

    // Ensure loader is visible when the page loads
    loader.classList.remove('hidden');

    // Simulate a loading period (adjust time as needed)
    setTimeout(() => {
        // Hide the loader after the specified time
        loader.classList.add('hidden');
    }, 3000); // Adjust this time to fit your needs
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Loop slides
        autoplay: {
            delay: 5000, // Change slide every 5 seconds
            disableOnInteraction: false, // Continue autoplay after interactions
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Pagination clickable
        },
        navigation: {
            nextEl: '.swiper-button-next', // Next button
            prevEl: '.swiper-button-prev', // Previous button
        },
    });
});