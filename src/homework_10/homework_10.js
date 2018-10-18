import './homework_10.scss';
import { LightTheBulb } from './scripts/light-bulb';

const lightersHtmlElements = document.querySelectorAll('.light');

for(let i = 0; i < lightersHtmlElements.length; i++) {
	LightTheBulb(lightersHtmlElements[i]);
}


/*Here starts script for accordion*/
const activeEl = document.querySelectorAll('.article');
const activeHead = document.querySelectorAll('.article__header');
const OPEN_CLASS_NAME = 'open';
const CLOSE_CLASS_NAME = 'close';

function addClass(element) {
	element.classList.toggle(OPEN_CLASS_NAME);
	element.classList.toggle(CLOSE_CLASS_NAME);
}

for (let i=0; i < activeEl.length; i++) {
	activeHead[i].onclick = function () {
		addClass(activeEl[i]);
	}
}
