export class SmartLighter {

	constructor (rootElement, colors) {
		this.rootElement = rootElement;
		this.colors = colors;
		this.renderWidget();
		this.renderLighter();
		this.turnOnButton();
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
			this.light = document.createElement('button');
			this.light.classList.add('traffic-lighter__lamp');
			this.light.classList.add(`traffic-lighter__lamp_${this.colors[i]}`);
			this.item.push(this.light);
			this.lighterContainer.appendChild(this.light);
		}
	}

	turnOnLight(el) {
		const ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
		this.activeElement;

			if (this.activeElement !== undefined) {
				this.activeElement.classList.remove(ACTIVE_CLASS_NAME);
			}
			this.activeElement = el;
			el.classList.toggle(ACTIVE_CLASS_NAME);
		}




	changeLight() {
		this.item.forEach(element => {
			element.addEventListener('click', () => {
				this.turnOnLight(element);
			});
		});
	}

	stopChangeLight() {
		this.item.forEach(element => {
			element.removeEventListener('click', () => {
				this.turnOnLight(element);
			});
		});
	}

	

	disableAll() {
		this.item.forEach((element) => {
			if (element.classList.contains('traffic-lighter__lamp_active'))
			{
				element.classList.remove('traffic-lighter__lamp_active');
			}
			console.log('listener disabled');
			});
			this.stopChangeLight();
	}

	lightSwitch() {
		for (let i = 0; i < this.item.length; i++) {
			this.item[i].classList.add('traffic-lighter__lamp_active');
			
		}
	}

	lightSwitchRun() {
		this.interval = setInterval( () => this.lightSwitch(), 1000);
	}

	toggleLighter() {
			if (this.btn.classList.contains('toggle-button_active'))
			{
				this.changeLight();
				this.lightSwitchRun();

			} else {
				this.disableAll();
			}
	}

	turnOnButton() {
		this.btn.addEventListener('click', () => {
			this.btn.classList.toggle('toggle-button_active');
			this.toggleLighter();
		});
	}

}