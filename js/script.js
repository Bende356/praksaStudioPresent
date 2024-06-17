var swiper = new Swiper('.swiperBottom', {
    slidesPerView: 3,

    initialSlide: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.swiper2', {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.documentElement.style.setProperty("--swiper-theme-color", "#fff")