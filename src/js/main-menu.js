export function mainMenu() {
  let mainMenu = document.querySelector(".left-menu__icon-burger");
  let aside = document.querySelector(".aside");
  let closeElement = document.querySelector(".icon--close");
  let content = document.querySelector(".content");

  mainMenu.addEventListener("click", function () {
    aside.classList.add("show");
    content.style.opacity = "0.1";

    closeElement.addEventListener("click", function () {
      aside.classList.remove("show");
      content.style.opacity = "1";
    });
  });

  document.addEventListener("click", function (evt) {
    console.log(evt.target);
    console.log(closeElement);
  });
}
