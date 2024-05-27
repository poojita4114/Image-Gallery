document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1; // Loop to the last image
        } else if (index >= images.length) {
            currentIndex = 0; // Loop to the first image
        }
        const offset = -currentIndex * 100;
        gallery.style.transform = `translateX(${offset}%)`;
        console.log(`Showing image ${currentIndex + 1} of ${images.length}`);
    }

    prevButton.addEventListener('click', () => {
        currentIndex--;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        showImage(currentIndex);
    });

    // Show the first image initially
    showImage(currentIndex);
});
