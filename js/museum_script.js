document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function changeSlide() {
        slides.forEach((slide, i) => {
            slide.style.top = `${(i - index) * 100}%`;
        });
        index = (index + 1) % slides.length;
    }

    setInterval(changeSlide, 2000);
});