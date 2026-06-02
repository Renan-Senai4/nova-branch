// script.js (ESM) - importa Swiper ES module
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function init() {
  const header = document.getElementById('site-header');
  const main = document.getElementById('site-main');

  function updateMainTopSpacing() {
    const h = header.getBoundingClientRect().height;
    main.style.paddingTop = `${h + 16}px`;
  }

  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(updateMainTopSpacing);
    ro.observe(header);
  } else {
    window.addEventListener('resize', updateMainTopSpacing);
  }
  updateMainTopSpacing();

  // Inicializa Swiper
  Swiper.use([Navigation, Pagination, Autoplay]);
  /* eslint-disable no-new */
  new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    autoplay: { delay: 3500, disableOnInteraction: false },
    slidesPerView: 1,
    spaceBetween: 16,
  });
}
