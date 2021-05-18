var swiper = new Swiper({
  el: ".swiper-container",
  initialSlide: 0,
  slidesPerView: "auto",
  updateOnWindowResize: false,
  autoHeight: true,
  freeMode: true,
  setWrapperSize: true,
  slideToClickedSlide: false,
  grabCursor: true,
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
      loopedSlides: 1.5,
      spaceBetween: 10,
      freeMode: true,
      slidesPerView: "auto",
    },

    // when window width is >= 640px
    640: {
      loopedSlides: 3,
      spaceBetween: 10,
      freeMode: true,
      slidesPerView: "auto",
    },
    1024: {
      loopedSlides: 4,
      spaceBetween: 30,
      freeMode: true,
    },
    1440: {
      loopedSlides: 4,
      spaceBetween: 40,
      freeMode: true,
      slidesPerView: "auto",
    },
  },
});
