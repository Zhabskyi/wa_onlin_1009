const activeEl = document.querySelector('.article');
const activeHead = document.querySelector('.article__header');
const OPEN_CLASS_NAME = 'open';
const CLOSE_CLASS_NAME = 'close';

function addClass(element) {
	element.classList.toggle(ACTIVE_CLASS_NAME);
}

activeHead.onclick = function () {
	addClass(activeEl);
}