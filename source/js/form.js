(function () {
  "use strict";
  // Отправка формы, модалка
  const form = document.querySelector(".form");
  const modalWrap = document.querySelector(".modal-wrap");
  const modalSuccess = document.querySelector(".modal--success");
  const modalClose = modalSuccess.querySelector(".modal__btn-self");

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    modalWrap.classList.add("show-flex");
    modalSuccess.classList.add("show-block");
  });

  modalSuccess.addEventListener("click", function (evt) {
    evt.currentTarget.classList.remove("show-block");
    modalWrap.classList.remove("show-flex");
  });

})()
