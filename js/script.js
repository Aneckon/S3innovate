var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

$(document).ready(function () {
  $('.header__menu').click(function () {
    $('.header__list').toggleClass('menu__open');
  });
});