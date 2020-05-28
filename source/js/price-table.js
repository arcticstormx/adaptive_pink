"use strict";
(function () {
  const priceTable = document.querySelector(".price-table");
  const packagesControls = document.querySelector(".packages__controls");
  let controlsToggles = Array.from(packagesControls.querySelectorAll('.controls__toggle'));


  if (priceTable) {
    controlsToggles.forEach(el => el.addEventListener("click", handleButtonClick);
  }

function handleButtonClick(evt) {
  if (!evt.target.classList.contains("controls__toggle--active")) {
    let idx = controlsToggles.findIndex(item => item.classList.contains("controls__toggle--active"));
    controlsToggles[idx].classList.remove("controls__toggle--active");
    evt.target.classList.add("controls__toggle--active");
    switch idx {
      case 0:
        priceTable.classList.remove("packages__table--right");
        priceTable.classList.add("packages__table--left");
        break;
      case 2:
        priceTable.classList.remove("packages__table--left");
        priceTable.classList.add("packages__table--right");
        break;
      default:
        break;
    }
    // let active = packagesControls.querySelector(".controls__toggle--active");
    console.log("Im in!");
    console.log("Active btn index" + idx);
    console.log(packagesControls);
    console.log(controlsToggles);

  }
}

  // function handleButtonClick(evt) {
  //   debugger;
  //   if (!evt.target.classList.contains("controls__toggle--active")) {

  //     let activeButtonIndex = controlsToggles.indexOf(controlsToggles.find(el => {
  //       return el.classList.contains("controls__toggle--active");
  //     }));
  //     console.log(activeButtonIndex);
  //     let newActiveButtonIndex = controlsToggles.indexOf(evt.target);
  //     console.log(newActiveButtonIndex);

  //     controlsToggles[activeButtonIndex].classList.remove("controls__toggle--active");
  //     controlsToggles[newActiveButtonIndex].classList.add("controls__toggle--active");

  //     switch (newActiveButtonIndex) {
  //       case 0:
  //         priceTable.classList.add("packages__table--left");
  //         break;
  //       case 2:
  //         priceTable.classList.add("packages__table--right");
  //         break;
  //       default:
  //         break;
  //     }
  //   }

  // }

})();
