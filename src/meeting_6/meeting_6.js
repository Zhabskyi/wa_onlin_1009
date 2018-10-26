import './meeting_6.scss';

//import { addLighter } from './scripts/traffic-lighter';

const lighterBtn = document.querySelector('#btn-add-lighter');
const selector = '#new-traffic-lighter';
let div;
let colorsNumber = [];

function addLighter(){
	lighterBtn.addEventListener('click', function() {
		trafficLighter(selector);
	});
}

function trafficLighter(selector) {

		const LIGHTER_CLASS_NAME = 'traffic-lighter';
		let lightsNumber = prompt('How many lights in the lighter?');
		for (let i = 0; i < lightsNumber; i++) {
			colorsNumber[i] = prompt('Type in color for the lighter');		
		}
		console.log(colorsNumber.length);
		const menuParent = document.querySelector(selector);

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

			render();
			renderLights();
}
addLighter();

function renderColors() {
	for (let i = 0; i < colorsNumber.length; i++) {
		let option = document.querySelectorAll('traffic-lighter__lamp');
		option[i].classList.add('traffic-lighter__lamp_222');
		console.log('traffic-lighter__lamp_' + colorsNumber[i]);
	}
}
renderColors();



function lighterColors(targetElement) {
  const ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
  const color = targetElement.querySelectorAll('.traffic-lighter__lamp');
  let activeElement;

  function tornOnLight(element) {
    if (activeElement !== undefined) {
      activeElement.classList.remove(ACTIVE_CLASS_NAME)
    }
    activeElement = element;
    element.classList.toggle(ACTIVE_CLASS_NAME);
  }

  for (let i = 0; i < colorsNumber.length; i += 1) {
    colorsNumber[i].onclick = function () {
			tornOnLight(colorsNumber[i]);
			console.log(colorsNumber);
    };
	}
}


	const lightersHtmlElements = document.querySelector('.traffic-lighter');
	lighterColors(lightersHtmlElements);
