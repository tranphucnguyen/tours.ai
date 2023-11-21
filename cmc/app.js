document.addEventListener("DOMContentLoaded", function () {
    const galleryWrap = document.getElementById('gallery-wrap');

    function nextSlide() {
        galleryWrap.style.transform = 'translateX(-1080px)';
        setTimeout(() => {
            galleryWrap.appendChild(galleryWrap.firstElementChild);
            galleryWrap.style.transform = 'translateX(0)';
        }, 5000);
    }

    setInterval(nextSlide, 5000);
});


