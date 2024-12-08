document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.image-slider');

    sliders.forEach(slider => {
        let currentIndex = 0;
        const images = slider.querySelectorAll('img');
        const totalImages = images.length;

        function showNextImage() {
            images[currentIndex].style.display = 'none'; //Hide the other images
            currentIndex = (currentIndex + 1) % totalImages;
            images[currentIndex].style.display = 'block'; //make the current image visible
        }

        setInterval(showNextImage, 5000); // Change image every 5 seconds
    });
});