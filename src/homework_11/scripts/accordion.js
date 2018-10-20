const activeParagraph = document.querySelectorAll('.accordeon__paragraph');
const activeHeader = document.querySelectorAll('.accordeon__header__article');
const paragraphClose= document.querySelector('.close');
//const OPEN_CLASS_NAME = 'open';
const CLOSE_CLASS_NAME = 'close';

function addClass(element) {
	//element.classList.toggle(OPEN_CLASS_NAME);
	element.classList.toggle(CLOSE_CLASS_NAME);
}

for (let i=0; i < activeEl.length; i++) {
	activeHeader[i].onclick = function () {
		activeParagraph[i].addClass(paragraphClose);
	}
}