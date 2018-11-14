export class mySlider {
	constructor(rootElement, slidesInfo, timeInterval){
		this.rootElement = rootElement;
		this.slidesInfo = slidesInfo;
		this.timeInterval = timeInterval;
		this.render();
	}

	render() {
		this.slideContainer = document.createElement('div');
		this.slideContainer.classList.add('slide-container');
		this.slideContainerItem = document.createElement('div');
		this.slideContainerItem.classList.add('slide-container__item')

		this.slidesInfo.forEach((slideInfo, i) => {

			this.image = document.createElement('img');
			this.slideContainerDescription = document.createElement('div');

			this.image.classList.add('slide-container__item__img');
			this.slideContainerDescription.classList.add('slide-container__item__description');
	
			this.image.src = slideInfo.imgUrl;

			this.slideContainerDescription.innerHTML = slideInfo.title;

			this.slideContainerItem.appendChild(this.image);
			this.slideContainerItem.appendChild(this.slideContainerDescription);
		})
		this.slideContainer.appendChild(this.slideContainerItem);
		this.rootElement.appendChild(this.slideContainer);
	}
}