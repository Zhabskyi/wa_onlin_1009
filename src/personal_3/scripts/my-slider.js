export class mySlider {
	constructor(rootElement, slidesInfo, timeInterval){
		this.rootElement = rootElement;
		this.slidesInfo = slidesInfo;
		this.timeInterval = timeInterval;
		this.render();
	}

	render() {
		this.slideContainer = document.createElement('div');
		this.image = document.createElement('img');
		this.slideContainerDescription = document.createElement('div');

		this.slideContainer.classList = 'slide-container';
		this.slideContainerDescription.classList = 'slide-container__description';

		this.image.src = slidesInfo[0].imgUrl.src;

		this.slideContainerDescription.innerHTML = this.slidesInfo[0].title;
	}
}