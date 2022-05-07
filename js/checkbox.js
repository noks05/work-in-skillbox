window.addEventListener('DOMContentLoaded', function () {

  let formAgree = document.querySelector('.form__agree');
  let checkbox = document.querySelector('.form__checkbox');

  formAgree.addEventListener('click', function () {
    if (checkbox.checked) {
      checkbox.classList.add('form__checkbox_active');
    } else {
      checkbox.classList.remove('form__checkbox_active');
    }
  });

});
