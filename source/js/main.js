(function() {
  "use strict";
  // Открыть/закрыть меню навигации
  const main = document.querySelector(".header__main");
  const burger = main.querySelector(".burger");
  const menu = document.querySelector(".header__main-nav");

  burger.addEventListener("click", function(evt) {
    menu.classList.toggle("header__main-nav--show");
    main.classList.toggle("header__main--open");
    burger.classList.toggle("burger--open");
  });
})();
