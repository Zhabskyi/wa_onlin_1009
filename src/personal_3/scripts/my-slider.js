const ACTIVE_CLASS_NAME = 'slide__container_active';
const ACTIVE_CONTROLS_CLASS_NAME = 'slide__control_btns_active';

export class MySlider {
	constructor(rootElement, slidesInfo, timeInterval){
		this.rootElement = rootElement;
		this.slidesInfo = slidesInfo;
		this.timeInterval = timeInterval;
		this.currentSlide = 0;
		this.render();
		this.intervalSlideRun();
		this.switchSlideBack = this.switchSlideBack.bind(this);
		this.switchSlideForward = this.switchSlideForward.bind(this);
		this.attachEventHandlers();
	}

	render() {
		this.slidesArray = [];
		this.controlBtnArray = [];

		this.mainContainer = document.createElement('div');
		this.mainContainer.classList.add('slide');

		this.slidesInfo.forEach((slideInfo, i) => {
			this.slideContainer = document.createElement('div');
			this.slideContainer.classList.add('slide__container');
			this.slidesArray.push(this.slideContainer);

			this.image = document.createElement('img');
			this.slideContainerDescription = document.createElement('div');

			this.image.classList.add('slide__container__img');
			this.slideContainerDescription.classList.add('slide__container__description');
		
			this.image.src = slideInfo.imgUrl;
			this.slideContainerDescription.innerHTML = slideInfo.title;
  
			this.control = document.createElement('button');
			this.control.classList.add('slide__control_btns');
			this.control.addEventListener('click', () => {
				this.currentSlide = i;
				this.switchSlide();
				this.intervalSlideStop();
				this.intervalDelay();
			});
			this.controlBtnArray.push(this.control);

			this.rootElement.appendChild(this.mainContainer);
			this.mainContainer.appendChild(this.slideContainer);
			this.slideContainer.appendChild(this.image);
			this.slideContainer.appendChild(this.slideContainerDescription);
			
		})

		this.controlContainer = document.createElement('div');
		this.controlContainer.classList.add('slide__control');


		this.BackBtn = document.createElement('button');
		this.ForwardBtn = document.createElement('button');

		this.BackBtn.classList.add('slide__control-back-btn');
		this.ForwardBtn.classList.add('slide__control-forward-btn');

		this.BackBtn.textContent = '<';
		this.ForwardBtn.textContent = '>';

		this.mainContainer.appendChild(this.controlContainer);
		this.controlContainer.appendChild(this.BackBtn);
		this.controlContainer.appendChild(this.ForwardBtn);

		for (const item of this.controlBtnArray) {
			this.controlContainer.appendChild(item);
		}
		
		this.defineActiveSlide();		
	}

	defineActiveSlide() {
		this.activeElement = this.slidesArray[this.currentSlide];
		this.activeControlElement = this.controlBtnArray[this.currentSlide];
		this.activeElement.classList.add(ACTIVE_CLASS_NAME);
		this.activeControlElement.classList.add(ACTIVE_CONTROLS_CLASS_NAME);
	}

	switchSlide() {
		if (this.activeElement !== undefined) {
			this.activeElement.classList.remove(ACTIVE_CLASS_NAME);
		}
		if (this.activeControlElement !== undefined) {
			this.activeControlElement.classList.remove(ACTIVE_CONTROLS_CLASS_NAME);
		}

		this.defineActiveSlide();
	}

	switchingSlides() {
		this.currentSlide = (this.currentSlide+1)%(this.slidesArray.length);
		this.switchSlide();
	}

	intervalSlideRun() {
		this.slideInterval = setInterval(this.switchingSlides.bind(this), this.timeInterval);
	}

	intervalDelay() {
		this.slideTimeout = setTimeout(() => {this.intervalSlideRun()}, 5000);
	}

	intervalSlideStop() {
		clearInterval(this.slideInterval);
		clearTimeout(this.slideTimeout);
		this.slideInterval = undefined;
		this.slideTimeout = undefined;
	}

	attachEventHandlers() {
		this.BackBtn.addEventListener('click', this.switchSlideBack);
		this.ForwardBtn.addEventListener('click', this.switchSlideForward);
	}

	switchSlideBack() {
		if (this.currentSlide > 0 ) {
			this.currentSlide = (this.currentSlide-1)%(this.slidesArray.length);
			} else {
				this.currentSlide = this.slidesArray.length - 1;
			}
			this.switchSlide();
	}

	switchSlideForward() {
		this.currentSlide = (this.currentSlide+1)%(this.slidesArray.length);
			this.switchSlide();
	}
}