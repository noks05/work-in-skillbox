window.addEventListener('DOMContentLoaded', function () {
  let searchMainBtn = document.querySelector('.header__search-img');
  let searchClose = document.querySelector('.search__icon-close');
  let formHeader = document.querySelector('.header__form');

  searchMainBtn.addEventListener('click', function () {
    formHeader.classList.add('header__form_block');
    setTimeout(function () {
      formHeader.classList.add('header__form_active');
    }, 10);
  });

  searchClose.addEventListener('click', function () {
    formHeader.classList.remove('header__form_active');
    setTimeout(function () {
      formHeader.classList.remove('header__form_block');
    }, 200);
  });

})

