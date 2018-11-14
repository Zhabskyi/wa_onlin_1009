import './personal_3.scss';

import { mySlider } from './scripts/my-slider';


const slidesInfo = [
	{
		title: "Hello world",
		imgUrl: 'https://images.pexels.com/photos/1571783/pexels-photo-1571783.jpeg?cs=srgb&dl=4x4-adventure-automobile-1571783.jpg&fm=jpg',
	},
	{
		title: "<h2>Hello world</h2>",
		imgUrl: 'https://images.pexels.com/photos/678640/pexels-photo-678640.jpeg?cs=srgb&dl=background-calm-cambodia-678640.jpg&fm=jpg',
	},
	{
		title: "<h2>Hello world</h2>",
		imgUrl: 'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?cs=srgb&dl=clouds-fashion-free-103123.jpg&fm=jpg',
	}
];

const timeInterval = 2500;

const slider = new mySlider(document.querySelector('#slider'), slidesInfo, timeInterval);