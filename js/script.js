let readMore = document.querySelector('.read-more');
let readMoreArrow = readMore.querySelector('.read-more__arrow');
let brandsList = document.querySelector('.brands__list');

let brandsListHeight = brandsList.style.maxHeight;
let readMoretextContent = readMore.textContent;
let readMoreOpenStarus = false;

console.log(readMoreArrow);

function readMoreToggle() {
	if(!readMoreOpenStarus){
		brandsList.style.maxHeight = '450px';
		readMoreArrow.style.transform = 'rotate(180deg)';
		readMore.textContent = 'Скрыть';
		readMore.appendChild(readMoreArrow);
		readMoreOpenStarus = true;
	} else {
		brandsList.style.maxHeight = '215px';
		readMoreArrow.style.transform = 'rotate(0deg)';
		readMore.textContent = readMoretextContent;
		readMore.appendChild(readMoreArrow);
		readMoreOpenStarus = false;
	}
}
// brandsList.style.maxHeight = '100%';

readMore.addEventListener('click', readMoreToggle);