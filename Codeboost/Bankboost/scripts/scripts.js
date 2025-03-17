var swiper = new Swiper(".carrosel", {
    slidesPerView: 1.3,
    spaceBetween: 17,
    breakpoints: {
        671: {
            slidesPerView: 2
        },
        872: {
            slidesPerView: 2.5
        },
        1078: {
            slidesPerView: 3
        }
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
  
});

AOS.init({
    duration: 1000
});