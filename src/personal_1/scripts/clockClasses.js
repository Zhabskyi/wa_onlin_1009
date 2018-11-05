
export class Clock {
	constructor (rootElement, mode) {
		this.rootElement = rootElement;
		this.mode = mode;
		this.renderWidget();
		this.renderTime();
		this.startClock();
		this.changeMode();
	}

	renderWidget() {
	this.clockContainer = document.createElement('div');
	const btn = document.createElement('button');
	btn.textContent = 'toggle';
	btn.addEventListener('click', () => {
		if (this.interval !== undefined) {
			this.stopClock();
		} 
		else {
			this.startClock();
		}
	});

	this.rootElement.appendChild(this.clockContainer);
	this.rootElement.appendChild(btn);
	}

	renderTime() {
		let currentTime = new Date ();
		let currentHours = currentTime.getHours ();
		let currentMinutes = currentTime.getMinutes ();
		let currentSeconds = currentTime.getSeconds ();
		let currentDay = currentTime.getDay ();
		let currentMonth = currentTime.getMonth ();
		let currentYear = currentTime.getFullYear ();

		console.log(this);
		if (this.mode === 'simple') {
			this.clockContainer.textContent = `${currentHours}:${currentMinutes}`;
		} else if (this.mode === 'full') {
			this.clockContainer.textContent = `${currentHours}:${currentMinutes}:${currentSeconds}`;
		} else {
			this.clockContainer.textContent = `${currentHours}:${currentMinutes}:${currentSeconds}:${currentDay}/${currentMonth}/${currentYear}`;
		}
	}

	startClock() {
		this.interval = setInterval(() => this.renderTime(), 1000);
	}

	changeMode() {
		this.clockContainer.addEventListener('click', () => {
			if ( this.mode === 'simple') {
				this.mode = 'full';
			} else {
				this.mode = 'simple';
			}
			this.renderTime();
		});
		
		this.clockContainer.addEventListener('contextmenu', (e) => {
			console.log('CONTEXT MENU CLICEKD');
			e.preventDefault();
			this.mode = 'date';
			this.renderTime();
		});
	}

	stopClock() {
		clearInterval(this.interval);
		this.interval = undefined;
	}

}