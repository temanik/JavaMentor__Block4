export function modalToggle() {
  let activateElements;
  let modalWindow;
  let body = document.querySelector(".body");
  let contentWrapElement = document.querySelector(".content-wrap");

  addModal("service-icon-set__chat-icon", "modal-feedback");
  addModal("service-icon-set__call-icon", "modal-call");

  console.log(window.screen.availWidth >= 1440);
  if (window.screen.availWidth < 1440) {
    addModal("left-menu__icon-burger", "modal-left-menu");
  } else {
    let modal = document.querySelector(".modal-left-menu");
    let modalWrap = modal.querySelector(".modal__wrap");

    modal.classList.remove("modal", "modal--left");
    modalWrap.classList.remove("modal__wrap");
  }

  function addModal(activateElement, asideElement) {
    let activateElementsClass = activateElement;
    let asideElementClass = asideElement;

    activateElements = document.querySelectorAll("." + activateElementsClass);
    modalWindow = document.querySelector("." + asideElementClass);

    asideElementClass = "modal";

    // console.log(f);

    let closeElement = modalWindow.querySelector(".icon--close");
    console.log(modalWindow);

    modalOpen(activateElements, modalWindow, asideElementClass);

    modalClose(closeElement, modalWindow, asideElementClass);
    modalClose(modalWindow, modalWindow, asideElementClass);
  }

  function modalOpen(activateElements, aside, asideElementClass) {
    for (let i = 0; i < activateElements.length; i++) {
      activateElements[i].addEventListener("click", function (evt) {
        let asideWrap = aside.querySelector(".modal__wrap");
        let asideMenuWrap = aside.querySelector(".modal-menu__wrap");

        aside.classList.add(asideElementClass + "--show");
        body.classList.add("body--open-modal");

        // When the modal is shown, we want a fixed body
        contentWrapElement.style.top = `-${window.scrollY}px`;
        contentWrapElement.style.position = "fixed";

        if (asideWrap) {
          asideWrap.addEventListener("click", function (evt) {
            evt.stopPropagation();
          });
        }

        if (asideMenuWrap) {
          asideMenuWrap.addEventListener("click", function (evt) {
            evt.stopPropagation();
          });
        }

        evt.stopPropagation();
      });
    }
  }

  function modalClose(closeElement, aside, asideElementClass) {
    // console.log(asideElementClass);
    closeElement.addEventListener("click", function () {
      setTimeout(() => {
        aside.classList.remove(asideElementClass + "--show");
        body.classList.remove("body--open-modal");
      }, 300);

      // Когда модальное окно скрыто...
      const scrollY = contentWrapElement.style.top;
      contentWrapElement.style.position = "";
      contentWrapElement.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    });
  }

  document.addEventListener("click", function (evt) {
    // console.log(evt.target);
  });
}
