export function modalToggle() {
  let activateElements;
  let modalWindow;
  let content = document.querySelector(".content");

  addModal(".left-menu__icon-burger", ".modal-menu");
  addModal(".service-icon-set__chat-icon", ".modal-feedback");

  function addModal(activateElement, asideElement) {
    let asideOpenStatus = false;

    activateElements = document.querySelectorAll(activateElement);
    modalWindow = document.querySelector(asideElement);
    modal(activateElements, modalWindow);

    function modal(activateElements, aside) {
      let closeElement = aside.querySelector(".icon--close");
      for (let i = 0; i < activateElements.length; i++) {
        activateElements[i].addEventListener("click", function (evt) {
          aside.classList.add("show");

          let asideWrap = aside.querySelector(asideElement + "__wrap");
          asideWrap.addEventListener("click", function (evt) {
            evt.stopPropagation();
          });
          asideOpenStatus = true;
          evt.stopPropagation();
        });
      }

      closeElement.addEventListener("click", function () {
        aside.classList.remove("show");
      });

      aside.addEventListener("click", function () {
        if (asideOpenStatus) {
          aside.classList.remove("show");
          asideOpenStatus = false;
        }
      });
    }
  }
  // document.addEventListener("click", function (evt) {
  //   console.log(evt.target);
  // });
}
