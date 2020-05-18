const main = document.querySelector(".header__main");
const burger = main.querySelector(".burger");
const menu = document.querySelector(".header__main-nav");

burger.addEventListener("click", (evt) => {
  menu.classList.toggle("header__main-nav--show");
  main.classList.toggle("header__main--open");
  burger.classList.toggle("burger--open");
});

const form = document.querySelector(".form");
const modalWrap = document.querySelector(".modal-wrap");
const modalSuccess = document.querySelector(".modal--success");
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  modalWrap.classList.toggle("show-flex");
  modalSuccess.classList.toggle("show-block");
});
