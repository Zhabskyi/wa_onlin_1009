const ACTIVE_CLASS_NAME = 'slide__container_active';

export class mySlider {
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

		this.slidesInfo.forEach((slideInfo, i) => {
			this.slideContainer = document.createElement('div');
			this.slideContainer.classList.add('slide__container');

			this.image = document.createElement('img');
			this.slideContainerDescription = document.createElement('div');

			this.image.classList.add('slide__container__img');
			this.slideContainerDescription.classList.add('slide__container__description');
		
			this.image.src = slideInfo.imgUrl;

			this.slideContainerDescription.innerHTML = slideInfo.title;

			this.slidesArray.push(this.slideContainer);

			this.rootElement.appendChild(this.slideContainer);
			this.slideContainer.appendChild(this.image);
			this.slideContainer.appendChild(this.slideContainerDescription);
			
		})

		this.controlContainer = document.createElement('div');
		this.controlContainer.classList.add('slide__control');

		this.BackBtn = document.createElement('button');
		this.ForwardBtn = document.createElement('button');

		this.BackBtn.classList.add('slider-back-btn');
		this.ForwardBtn.classList.add('slider-forward-btn');

		this.BackBtn.textContent = '<';
		this.ForwardBtn.textContent = '>';

		this.rootElement.appendChild(this.BackBtn);
		this.rootElement.appendChild(this.ForwardBtn);

		this.defineActiveSlide();		
	}

	defineActiveSlide() {
		this.activeElement = this.slidesArray[this.currentSlide];
		this.activeElement.classList.add(ACTIVE_CLASS_NAME);
	}

	switchingSlides() {
		this.currentSlide = (this.currentSlide+1)%(this.slidesArray.length);
		this.switchSlide();
	}

	switchSlide() {
		if (this.activeElement !== undefined) {
			this.activeElement.classList.remove(ACTIVE_CLASS_NAME);
		}
		this.defineActiveSlide();
	}

	intervalSlideRun() {
		this.slide = setInterval(this.switchingSlides.bind(this), this.timeInterval);
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