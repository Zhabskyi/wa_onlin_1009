import './homework_10.scss';
import { LightTheBulb } from './scripts/light-bulb';
import { addClass } from './scripts/accordion';

const lightersHtmlElements = document.querySelectorAll('.light');

for(let i = 0; i < lightersHtmlElements.length; i++) {
	LightTheBulb(lightersHtmlElements[i]);
}


/*Here starts script for accordion*/
const activeEl = document.querySelectorAll('.article');
const activeHead = document.querySelectorAll('.article__header');


for (let i=0; i < activeEl.length; i++) {
	activeHead[i].onclick = function () {
		addClass(activeEl[i]);
	}
}
