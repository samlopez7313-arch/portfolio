document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    if (!images.length) return;

    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const carousel = document.querySelector('.carousel');

    let index = 0;
    let autoInterval = null;

    function showImage(i) {
        images.forEach(img => img.classList.remove('active'));
        images[i].classList.add('active');
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }

    nextBtn?.addEventListener('click', nextImage);
    prevBtn?.addEventListener('click', prevImage);

    function startAuto() {
        if (autoInterval) return;
        autoInterval = setInterval(nextImage, 3000);
    }

    function stopAuto() {
        clearInterval(autoInterval);
        autoInterval = null;
    }

    // Optional: pause on hover
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    // Initialize
    showImage(index);
    startAuto();
});