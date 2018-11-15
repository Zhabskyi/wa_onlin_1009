import './personal_3.scss';

import { mySlider } from './scripts/my-slider';


const slidesInfo = [
	{
		title: "<h5>Hello world</h5>",
		imgUrl: 'https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?cs=srgb&dl=colorful-colourful-fashion-904276.jpg&fm=jpg',
	},
	{
		title: "<h5>Look around</h5>",
		imgUrl: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=backpack-blonde-hair-blur-214574.jpg&fm=jpg',
	},
	{
		title: "<h5>It's wildly open</h5>",
		imgUrl: 'https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?cs=srgb&dl=beautiful-cellphone-cute-761963.jpg&fm=jpg',
	},
	{
		title: "<h5>Lock up your target</h5>",
		imgUrl: 'https://images.pexels.com/photos/7640/pexels-photo.jpg?cs=srgb&dl=adventure-balance-balanced-7640.jpg&fm=jpg',
	}
];

const timeInterval = 12500;

const slider = new mySlider(document.querySelector('#slide'), slidesInfo, timeInterval);