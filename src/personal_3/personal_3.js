import './personal_3.scss';

import { mySlider } from './scripts/my-slider';


const slidesInfo = [
	{
		title: "Hello world",
		imgUrl: 'https://www.pexels.com/photo/scenic-photography-of-trees-678640/',
	},
	{
		title: "<h2>Hello world</h2>",
		imgUrl: 'https://www.pexels.com/photo/photo-of-man-sitting-on-hood-1571783/',
	},
];

const timeInterval = 2500;

const mySlider = new mySlider(document.querySelector('.slider'), slidesInfo, timeInterval);