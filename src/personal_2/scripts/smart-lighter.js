export class SmartLighter {

	constructor (rootElement, colors) {
		this.rootElement = rootElement;
		this.colors = colors;
		this.currentColor = 0;
		this.listen = this.listen.bind(this);
		this.mouseOverEffectStop = this.mouseOverEffectStop.bind(this);
		this.mouseOverEffectStart = this.mouseOverEffectStart.bind(this);
		this.lightSwitch = this.lightSwitch.bind(this);
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

		listen(el) {
			this.turnOnLight(el);
		}


	changeLight_1() {
		this.item.forEach(element => {
			this.element = element;
			this.element.addEventListener('click', this.listen);
		});
	}

	changeLight() {
		for (let i = 0; i < this.item.length; i++) {
			this.item[i].addEventListener( 'click', this.listen);
		}
	}

	stopChangeLight() {
		this.item.forEach(element => {
			element.removeEventListener('click', () => {
				this.turnOnLight(element);
			});
		});
	}

	removeActiveLighterClass() {
		this.item.forEach((element) => {
			if (element.classList.contains('traffic-lighter__lamp_active'))
				{
					element.classList.remove('traffic-lighter__lamp_active');
				}
		});
	}

	lightSwitch() {
		 this.item[this.currentColor].classList.remove('traffic-lighter__lamp_active');
		 this.currentColor = (this.currentColor+1)%(this.item.length);
		 this.item[this.currentColor].classList.add('traffic-lighter__lamp_active');
	 }
	 
	 intervalLightRun() {
		 this.interval = setInterval(this.lightSwitch, 400);
	 }

	 intervalLightStop() {
		clearInterval(this.interval);
		this.interval = undefined;
	 }
	 
	 mouseOverEffect() {
		this.lighterContainer.addEventListener('mouseover', 
			this.mouseOverEffectStop);
		this.lighterContainer.addEventListener('mouseout', 
			this.mouseOverEffectStart);
	 }

	 removeMouseOverEffect() {
		this.lighterContainer.removeEventListener('mouseover', 
			this.mouseOverEffectStop);
		this.lighterContainer.removeEventListener('mouseout', 
			this.mouseOverEffectStart);
	 }

	 mouseOverEffectStop () {
		this.intervalLightStop();
		this.removeActiveLighterClass();
	 }

	 mouseOverEffectStart () {
		this.intervalLightRun();
	 }

	toggleLighter() {
			if (this.btn.classList.contains('toggle-button_active'))
			{
				this.changeLight();
				this.intervalLightRun();
				this.mouseOverEffect();
			} else {
				this.disableAll();
			}
	}

	disableAll() {
		this.removeActiveLighterClass();
		this.stopChangeLight();
		this.intervalLightStop();
		this.removeMouseOverEffect();
	}

	turnOnButton() {
		this.btn.addEventListener('click', () => {
			this.btn.classList.toggle('toggle-button_active');
			this.toggleLighter();
		});
	}

}