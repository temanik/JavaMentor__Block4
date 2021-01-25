// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

export function getSwiper() {
  let swiperContainer = document.querySelectorAll(".swiper-container");

  if (window.innerWidth < 768) {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    for (let i = 0; i < swiperContainer.length; i++) {
      let swiperWrapper = swiperContainer[i].querySelector(".swiper-wrapper");
      let swiperSlide = swiperContainer[i].querySelectorAll(".swiper-slide");
      let swiperPagination = swiperContainer[i].querySelector(
        ".swiper-pagination"
      );

      swiperContainer[i].classList.remove("swiper-container");
      swiperWrapper.classList.remove("swiper-wrapper");

      for (let i = 0; i < swiperSlide.length; i++) {
        console.log(swiperSlide);
        swiperSlide[i].classList.remove("swiper-slide");
      }
      swiperPagination.remove("swiper-pagination");
    }
  }
}
