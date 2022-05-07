const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // курсор "хватающая рука"
  grabCursor: true,

  // предзагрузка картинок
  preloadImages: false,

  // подсказки для скрин-ридера
  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}',
  },
});
