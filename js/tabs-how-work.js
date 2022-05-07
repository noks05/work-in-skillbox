window.addEventListener('DOMContentLoaded', function () {
  let tabsHowWork = document.querySelectorAll('.how-we-work__btn');
  let tabsDescr = document.querySelectorAll('.how-we-work__descr');

  tabsHowWork.forEach(function (item) {
    item.addEventListener('click', function () {
      const id = item.dataset.path;

      tabsHowWork.forEach(function (i) {
        i.classList.remove('how-we-work__btn_active');
      });
      tabsDescr.forEach(function (i) {
        i.classList.remove('how-we-work__descr_active');
      });

      item.classList.add('how-we-work__btn_active');
      document.getElementById(id).classList.add('how-we-work__descr_active');
    });

    document.querySelector('.how-we-work__btn').click();
  });

});
