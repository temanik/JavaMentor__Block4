export function modalToggle() {
  let activateElements;
  let modalWindow;

  addModal("left-menu__icon-burger", "modal-menu");
  addModal("service-icon-set__chat-icon", "modal-feedback");
  addModal("service-icon-set__call-icon", "modal-call");

  function addModal(activateElement, asideElement) {
    let activateElementsClass = activateElement;
    let asideElementClass = asideElement;

    activateElements = document.querySelectorAll("." + activateElementsClass);
    modalWindow = document.querySelector("." + asideElementClass);
    modal(activateElements, modalWindow);

    function modal(activateElements, aside) {
      let closeElement = aside.querySelector(".icon--close");
      for (let i = 0; i < activateElements.length; i++) {
        activateElements[i].addEventListener("click", function (evt) {
          aside.classList.add(asideElementClass + "--show");

          let asideWrap = aside.querySelector(".modal__wrap");
          console.log(asideWrap);
          asideWrap.addEventListener("click", function (evt) {
            evt.stopPropagation();
          });
          evt.stopPropagation();
        });
      }

      closeElement.addEventListener("click", function () {
        aside.classList.remove(asideElementClass + "--show");
      });

      aside.addEventListener("click", function () {
        aside.classList.remove(asideElementClass + "--show");
      });
    }
  }
  // document.addEventListener("click", function (evt) {
  //   console.log(evt.target);
  // });
}
