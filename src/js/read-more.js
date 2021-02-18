export function readMore() {
  let readMore = document.querySelectorAll(".read-more");

  for (let i = 0; i < readMore.length; i++) {
    let readMoreArrow = readMore[i].querySelector(".read-more__arrow");
    let readMoreParent = readMore[i].previousElementSibling;
    let readMoreParentHeight = readMoreParent.style.maxHeight;
    let readMoretextContent = readMore[i].textContent;
    let readMoreOpenStarus = false;

    function readMoreToggle() {
      if (!readMoreOpenStarus) {
        readMoreParent.style.maxHeight = "1000px";
        readMoreArrow.style.transform = "rotate(180deg)";
        readMore[i].textContent = "Скрыть";
        readMore[i].appendChild(readMoreArrow);
        readMoreOpenStarus = true;
      } else {
        readMoreParent.style.maxHeight = readMoreParentHeight;
        readMoreArrow.style.transform = "rotate(0deg)";
        readMore[i].textContent = readMoretextContent;
        readMore[i].appendChild(readMoreArrow);
        readMoreOpenStarus = false;
      }
    }
    // brandsList.style.maxHeight = "100%";

    readMore[i].addEventListener("click", readMoreToggle);
  }
}
