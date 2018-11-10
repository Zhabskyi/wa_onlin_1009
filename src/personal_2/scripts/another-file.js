const ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';

export class NewLighter {
	constructor (rootElement, colors) {
		this.rootElement = rootElement;
		this.colors = colors;
		this.currentColor = 0;
		this.isEnable = false;
		this.renderWidget();
		this.renderLighter();
		this.startRun = this.startRun.bind(this);
		this.attachEventHandlers();
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
		this.item = new Array();
		for (let i = 0; i < this.colors.length; i++) {
			const light = document.createElement('button');
			light.addEventListener('click', () => {
				if (this.isEnable !== false) {
					this.currentColor = i;
					this.turnOnLight();
				}
			});
			light.classList.add('traffic-lighter__lamp');
			light.classList.add(`traffic-lighter__lamp_${this.colors[i]}`);
			this.item.push(light);
			this.lighterContainer.appendChild(light);
		}
	}

	turnOnLight() {
			if (this.activeElement !== undefined) {
				this.activeElement.classList.remove(ACTIVE_CLASS_NAME);
			}
			this.activeElement = this.item[this.currentColor];
			console.log(this.currentColor);
			this.activeElement.classList.add(ACTIVE_CLASS_NAME);
	}

	lightSwitch() {
		this.currentColor = (this.currentColor+1)%(this.item.length);
		this.turnOnLight()
	}

	intervalLightRun() {
		this.interval = setInterval(this.lightSwitch.bind(this), 400);
		this.isEnable = true;
	}

	intervalLightStop() {
	 clearInterval(this.interval);
	 this.interval = undefined;
	 this.isEnable = false;
	}

	attachEventHandlers() {
		this.btn.addEventListener('click', this.startRun);
		this.lighterContainer.addEventListener('mouseenter', () => {
			clearInterval(this.interval);
		});
		this.lighterContainer.addEventListener('mouseleave', () => {
			this.intervalLightRun();
		});
	}

	startRun() {
		if (this.isEnable === false) {
			this.intervalLightRun();
			
		} else {
			this.intervalLightStop();
			this.item[this.currentColor].classList.remove('traffic-lighter__lamp_active');
		}
	}

}