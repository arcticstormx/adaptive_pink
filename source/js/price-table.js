"use strict";
(function () {
  const priceTable = document.querySelector(".price-table");
  const packagesControls = document.querySelector(".packages__controls");
  const controlsToggles = Array.from(packagesControls.querySelectorAll('.slider-controls__button'));


  if (priceTable) {
    packagesControls.addEventListener("click", handleButtonClick);
  }



  function handleButtonClick(evt) {
    debugger;
    if (!evt.target.classList.contains("controls__toggle--active")) {

      let activeButtonIndex = controlsToggles.indexOf(controlsToggles.find(el => {
        return el.classList.contains("controls__toggle--active");
      }));
      console.log(activeButtonIndex);
      let newActiveButtonIndex = controlsToggles.indexOf(evt.target);
      console.log(newActiveButtonIndex);

      controlsToggles[activeButtonIndex].classList.remove("controls__toggle--active");
      controlsToggles[newActiveButtonIndex].classList.add("controls__toggle--active");

      switch (newActiveButtonIndex) {
        case 0:
          priceTable.classList.add("packages__table--left");
          break;
        case 2:
          priceTable.classList.add("packages__table--right");
          break;
        default:
          break;
      }
    }

  }

})();
