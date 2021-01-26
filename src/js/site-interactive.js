export function interactive() {
  let navigationItems = document.querySelectorAll(".navigation__item");
  let asideNavigationItems = document.querySelectorAll(
    ".aside__navigation-item"
  );

  for (let i = 0; i < navigationItems.length; i++) {
    navigationItems[i].addEventListener("click", function (evt) {
      let selectedClass = "navigation__item--selected";
      let newElement = evt.path[1];
      let oldElement = document.querySelector("." + selectedClass);

      menuSelecter(oldElement, newElement, selectedClass);
    });
  }

  for (let i = 0; i < asideNavigationItems.length; i++) {
    asideNavigationItems[i].addEventListener("click", function (evt) {
      let selectedClass = "aside__navigation-item--selected";
      let newElement = evt.path[1];
      let oldElement = document.querySelector("." + selectedClass);

      menuSelecter(oldElement, newElement, selectedClass);
    });
  }

  function menuSelecter(oldElement, newElement, selectedClass) {
    oldElement.classList.remove(selectedClass);
    newElement.classList.add(selectedClass);
  }
}
