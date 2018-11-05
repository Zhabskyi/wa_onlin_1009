export class SmartLighter {

	constructor (rootElement, colors) {
		this.rootElement = rootElement;
		this.colors = colors;
		this.renderWidget();
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
		for (let i = 0; i < this.colors.length; i++) {
			let item = document.createElement('button');
			
		}
	}
}