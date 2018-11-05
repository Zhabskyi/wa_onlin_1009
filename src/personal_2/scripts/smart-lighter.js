export class SmartLighter {

	constructor (rootElement, colors) {
		this.rootElement = rootElement;
		this.colors = colors;
		this.renderWidget();
		this.renderLighter();
		this.turnOn();
	}

	renderWidget() {
		this.lighterContainer = document.createElement('div');
		this.btn = document.createElement('button');

		this.lighterContainer.classList.add('traffic-lighter');
		this.btn.classList.add('toggle-button');

		this.btn.textContent = 'On/Off';

		this.rootElement.appendChild(this.lighterContainer);
		this.rootElement.appendChild(this.btn);
	}

	renderLighter() {
		this.item = [];
		for (let i = 0; i < this.colors.length; i++) {
			let light = document.createElement('button');
			light.classList.add('traffic-lighter__lamp');
			light.classList.add(`traffic-lighter__lamp_${this.colors[i]}`);
			this.item.push(light);
			this.lighterContainer.appendChild(light);
		}
	}

	tornOnLight(el) {
		const ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
		this.activeElement;

			if (this.activeElement !== undefined) {
				this.activeElement.classList.remove(ACTIVE_CLASS_NAME);
			}
			this.activeElement = el;
			el.classList.toggle(ACTIVE_CLASS_NAME);
		}

	changeLight() {
		for (let i = 0; i < this.item.length; i++) {
			this.item[i].addEventListener('click', () => {
				this.tornOnLight(this.item[i]);
			});
		}
	}

	turnOn() {
		this.btn.addEventListener('click', () => {
			this.btn.classList.toggle('toggle-button_active');
			this.changeLight();
		})
	}

}