window.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('.burger');
  let burgerMenuClose = document.querySelector('.burger-menu__close');
  let burgerMenu = document.querySelector('.burger-menu');

  burger.addEventListener('click', function () {
    burgerMenu.classList.add('burger-menu_block');
    setTimeout(function () {
      burgerMenu.classList.add('burger-menu_active');
    });
  })

  burgerMenuClose.addEventListener('click', function () {
    burgerMenu.classList.remove('burger-menu_active');
    setTimeout(function () {
      burgerMenu.classList.remove('burger-menu_block');
    }, 400);
  })

})
