import './personal_3.scss';

import { mySlider } from './scripts/my-slider';

const mySlider = new mySlider([
	{
		title: "Hello world",
		imgUrl: 'http://my-cool-pic.com/',
	},
	{
		title: "<h2>Hello world</h2>",
		imgUrl: 'http://my-cool-pic.com/',
	},
], 2500);