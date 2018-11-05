import './personal_1.scss';

import { updateClock } from './scripts/clock';
import { Clock } from './scripts/clockClasses';


const ROOT_CLASS_NAME = 'control-panel';
const CONTROL_BTN_CLASS_NAME = `${ROOT_CLASS_NAME}__next-btn`;
const LIST_COUNTER_CLASS_NAME = `${ROOT_CLASS_NAME}__targetElement`;
const SELECTED_CLASS_NAME = 'selected-btn';

function pagination( currentEl, number) {

	let controlBack = document.createElement('button');
	let listCounter = document.createElement('div');
	let controlForward = document.createElement('button');

	controlBack.classList.add(CONTROL_BTN_CLASS_NAME);
	controlBack.setAttribute('id', '#back-btn');
	listCounter.classList.add(LIST_COUNTER_CLASS_NAME);
	controlForward.classList.add(CONTROL_BTN_CLASS_NAME);
	controlForward.setAttribute('id', '#forward-btn');

	controlBack.textContent = ('<<');
	controlForward.textContent = ('>>');

	currentEl.appendChild(controlBack);

	const buttons = [];

	for (let i = 0; i < number; i++) {
		let btn = document.createElement('button');
		buttons.push(btn);
		btn.textContent = (i+1);
		btn.classList.add('control-panel__targetElement__btn')
		currentEl.appendChild(btn);
		btn.addEventListener('click', select);
	}

	buttons[0].classList.add(SELECTED_CLASS_NAME);

	currentEl.appendChild(controlForward);

	controlBack.addEventListener('click', moveBack);
	controlForward.addEventListener('click', moveForward);


	function select() {
		buttons.forEach( (item) => item.classList.remove(SELECTED_CLASS_NAME));
		this.classList.add(SELECTED_CLASS_NAME);
	}

	function moveBack() {
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[0].classList.contains(SELECTED_CLASS_NAME)) {
				break;
			} else if (buttons[i].classList.contains(SELECTED_CLASS_NAME)) {
				buttons[i].classList.remove(SELECTED_CLASS_NAME);
				buttons[i-1].classList.add(SELECTED_CLASS_NAME);
			}	
		}
	}

	function moveForward() {
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[buttons.length-1].classList.contains(SELECTED_CLASS_NAME)) {
				break;
			} else if (buttons[i].classList.contains(SELECTED_CLASS_NAME)) {
				buttons[i].classList.remove(SELECTED_CLASS_NAME);
				buttons[i+1].classList.add(SELECTED_CLASS_NAME);
				break;
			}	
		}
	}

}

pagination(document.querySelector('.control-panel'), 7);

const clockFirst = new Clock(document.querySelector('.clock-classes'), 'full');
const clockSecond = new Clock(document.querySelector('.second-clock'), 'simple');
const clockThird = new Clock(document.querySelector('.third-clock'), 'date');
