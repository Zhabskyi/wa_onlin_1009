

const lighterBtn = document.querySelector('#btn-add-lighter');
const colorBtn = document.querySelector('#btn-add-color');
const selector = '#new-traffic-lighter';
let div;
let colorsNumber = ['red', 'yellow', 'green', 'aqua', 'blue'];

export function addLighter() {
	lighterBtn.addEventListener('click', function() {
		trafficLighter(selector);
	});
}

export function addColors() {
	colorBtn.addEventListener('click', function() {
		lighterColors();
	});
}

function trafficLighter(selector) {

		const LIGHTER_CLASS_NAME = 'traffic-lighter';
		let lightsNumber = prompt('How many lights in the lighter but not more then 5?');
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
					option.classList.add(`traffic-lighter__lamp_${colorsNumber[i]}`);
					div.appendChild(option);
				}
			}

			render();
			renderLights();
}


function lighterColors() {

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
    };
	}
}

addLighter();
addColors();

const lightersHtmlElements = document.querySelector('.traffic-lighter');
	lighterColors(lightersHtmlElements);