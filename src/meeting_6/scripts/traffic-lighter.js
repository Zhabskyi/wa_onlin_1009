export function addLighter(){
	const lighterBtn = document.querySelector('#btn-add-lighter');
	lighterBtn.addEventListener('click', trafficLighter(selector));
}

const selector = '#new-traffic-lighter';

function trafficLighter(selector) {

		const LIGHTER_CLASS_NAME = 'traffic-lighter';
		const menuParent = document.querySelector(selector);
		let div;

		function render() {
			div = document.createElement('div');	
			div.classList.add(LIGHTER_CLASS_NAME);
			menuParent.appendChild(div);
		}

		function renderLights() {
			let lightsNumber = prompt('How many lights in the lighter?');
			for (let i = 0; i < lightsNumber; i++) {
				let option = document.createElement('button');
				option.classList.add('traffic-lighter__lamp');
				div.appendChild(option);	
			}
		}
		render();
		renderLights();

}

