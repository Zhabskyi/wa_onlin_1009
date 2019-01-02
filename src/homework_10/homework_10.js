import './homework_10.scss';
import { LightTheBulb } from './scripts/light-bulb';
import { addClass } from './scripts/accordion';
import { tab } from './scripts/tab';

tab();

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

function pagination( currentEl, number) {
	
	const buttons = [];

	for (let i = 0; i < number; i++) {
		let btn = document.createElement('button');
		buttons.push(btn);
		btn.textContent = (i+1);
		currentEl.appendChild(btn);
		btn.addEventListener('click', select
		);
	}


	function select() {
		buttons.forEach( (item) => item.style.background = 'none');
		this.style.background = 'red';
	}

}



pagination(document.querySelector('.targetElement'), 3);
