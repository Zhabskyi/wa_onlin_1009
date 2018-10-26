const OPEN_CLASS_NAME = 'open';
const CLOSE_CLASS_NAME = 'close';

export function addClass(element) {
	element.classList.toggle(OPEN_CLASS_NAME);
	element.classList.toggle(CLOSE_CLASS_NAME);
}