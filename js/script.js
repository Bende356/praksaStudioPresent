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

let scrolled = false;
let popupDisplayed = false;
let timeout;

// Function to show the popup after 5 seconds of scrolling
function showPopup() {
    if (popupDisplayed) return;

    // Display the popup
    document.getElementById('popup').style.display = 'block';

    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    popupDisplayed = true;
}

// Function to close the popup and enable scrolling
function closePopup() {
    document.getElementById('popup').style.display = 'none';

    // Allow scrolling
    document.body.style.overflow = 'auto';

    popupDisplayed = false;
}

// Event listener for scrolling
window.addEventListener('scroll', function () {
    if (!scrolled) {
        scrolled = true;
        // Set timeout to show the popup after 5 seconds of first scroll
        timeout = setTimeout(showPopup, 5000);
    }
});

var darkMode = document.getElementById('dark-change');

// Check localStorage for dark mode setting
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode(); // Assuming this function sets up the dark mode styles
}

darkMode.addEventListener('click', function () {
    document.body.classList.toggle('day');
    darkMode.classList.toggle('active');
    document.querySelectorAll(' .longBlackContent, .topContent, .swiper-slide, .images').forEach(element => {
        element.classList.toggle('day');
    })
});