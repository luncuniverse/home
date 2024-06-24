document.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(function(parallaxElem) {
        let rate = parallaxElem.getBoundingClientRect().top * 0.5;
        parallaxElem.style.transform = `translateY(${rate}px)`;
    });
});
