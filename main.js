// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import Swiper, { Navigation, Pagination } from 'swiper';

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function openHamburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}