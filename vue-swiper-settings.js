var mySwiperOptions = {
  el: ".vue-swiper",
  slidesPerView: "5",
  slideToClickedSlide: true,
  grabCursor: true,
  spaceBetween: 60,
  iOSEdgeSwipeDetection: true,

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
};
