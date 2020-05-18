var main = document.querySelector(".header__main");
var burger = main.querySelector(".burger");
var menu = document.querySelector(".header__main-nav");

burger.addEventListener("click", function (evt) {
  menu.classList.toggle("header__main-nav--show");
  main.classList.toggle("header__main--open");
  burger.classList.toggle("burger--open");
});

var form = document.querySelector(".form");
var modalWrap = document.querySelector(".modal-wrap");
var modalSuccess = document.querySelector(".modal--success");
var modalClose = modalSuccess.querySelector(".modal__btn-self");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  modalWrap.classList.add("show-flex");
  modalSuccess.classList.add("show-block");
});

modalSuccess.addEventListener("click", function (evt) {
  evt.currentTarget.classList.remove("show-block");
  modalWrap.classList.remove("show-flex");
});
