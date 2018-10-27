import './meeting_6.scss';

//import { addLighter } from './scripts/traffic-lighter';

const lighterBtn = document.querySelector('#btn-add-lighter');
const colorBtn = document.querySelector('#btn-add-color');
const selector = '#new-traffic-lighter';
let div;
let colorsNumber = [];

function addLighter() {
	lighterBtn.addEventListener('click', function() {
		trafficLighter(selector);
		addColors();
	});
}
function addColors() {
	colorBtn.addEventListener('click', function() {
		lighterColors(selector);
	});
}

function trafficLighter(selector) {

		const LIGHTER_CLASS_NAME = 'traffic-lighter';
		let lightsNumber = prompt('How many lights in the lighter?');
		const menuParent = document.querySelector(selector);

		// for (let i = 0; i < lightsNumber; i++) {
		// 	colorsNumber[i] = prompt('Type in color for the lighter');		
		// }

			function render() {
				div = document.createElement('div');	
				div.classList.add(LIGHTER_CLASS_NAME);
				menuParent.appendChild(div);
			}

			function renderLights() {
				for (let i = 0; i < lightsNumber; i++) {
					let option = document.createElement('button');
					option.classList.add('traffic-lighter__lamp');
					div.appendChild(option);
				}
			}

			// function renderColors() {
			// 	for (let i = 0; i < colorsNumber.length; i++) {
			// 		let option = document.querySelectorAll('traffic-lighter__lamp');
			// 		option[i].classList.add('traffic-lighter__lamp_222');
			// 		console.log('traffic-lighter__lamp_' + colorsNumber[i]);
			// 	}
			// }
			// renderColors();

			
				const ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
				const color = document.querySelectorAll('.traffic-lighter__lamp');
				let activeElement;
			
				function tornOnLight(element) {
					if (activeElement !== undefined) {
						activeElement.classList.remove(ACTIVE_CLASS_NAME)
					}
					activeElement = element;
					element.classList.toggle(ACTIVE_CLASS_NAME);
				}
			
				for (let i = 0; i < color.length; i ++) {
					color[i].onclick = function () {
						tornOnLight(color[i]);
						console.log(color);
					};
			
			}


			render();
			renderLights();
}



function lighterColors(selector) {
	for (let i = 0; i < array.length; i++) {
		const ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
		
	}
  const ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
  const color = document.querySelectorAll('.traffic-lighter__lamp');
  let activeElement;

  function tornOnLight(element) {
    if (activeElement !== undefined) {
      activeElement.classList.remove(ACTIVE_CLASS_NAME)
    }
    activeElement = element;
    element.classList.toggle(ACTIVE_CLASS_NAME);
  }

  for (let i = 0; i < color.length; i += 1) {
    color[i].onclick = function () {
			tornOnLight(color[i]);
			console.log(color);
    };
	}
}
addLighter();


	const lightersHtmlElements = document.querySelector('.traffic-lighter');
	lighterColors(lightersHtmlElements);
