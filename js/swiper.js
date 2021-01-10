let swiperContainer = document.querySelector('.swiper-container');
let swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
let swiperSlide = swiperContainer.querySelectorAll('.swiper-slide');
let swiperPagination = swiperContainer.querySelector('.swiper-pagination');

if (window.innerWidth < 768) {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
} else {
  swiperContainer.classList.remove('swiper-container');
  swiperWrapper.classList.remove('swiper-wrapper');

  for (var i = 0; i < swiperSlide.length; i++) {
    swiperSlide[i].classList.remove('swiper-slide');
  }
  swiperPagination.remove('swiper-pagination');
}