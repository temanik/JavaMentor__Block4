export function interactive() {
  let navigationItemName = "navigation__item";
  let asideNavigationItemName = "modal-menu__navigation-item";

  let navigationItems = document.querySelectorAll("." + navigationItemName);
  let asideNavigationItems = document.querySelectorAll(
    "." + asideNavigationItemName
  );

  addListener(navigationItems, navigationItemName);
  addListener(asideNavigationItems, asideNavigationItemName);

  function addListener(navigationItems, navigationItemName) {
    for (let i = 0; i < navigationItems.length; i++) {
      navigationItems[i].addEventListener("click", function (evt) {
        let selectedClass = navigationItemName + "--selected";
        let oldElement = document.querySelector("." + selectedClass);
        let newElement = this;

        evt.stopPropagation();

        menuSelecter(oldElement, newElement, selectedClass);
      });
    }
  }

  function menuSelecter(oldElement, newElement, selectedClass) {
    oldElement.classList.remove(selectedClass);
    newElement.classList.add(selectedClass);
  }
}
