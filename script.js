document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    document.querySelector('.carousel-control.next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    document.querySelector('.carousel-control.prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

   
    let startX = 0;
    carouselInner.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    carouselInner.addEventListener('touchmove', function(e) {
        if (!startX) return;
        let moveX = e.touches[0].clientX;
        let diffX = startX - moveX;

        if (diffX > 50) {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
            startX = 0;
        } else if (diffX < -50) {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
            startX = 0;
        }
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }
});
