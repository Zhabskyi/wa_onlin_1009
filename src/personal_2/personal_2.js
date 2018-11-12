import './personal_2.scss';

import { SmartLighter } from './scripts/smart-lighter';
import { NewLighter } from './scripts/another-file';

const colors = ['red', 'yellow', 'green'];

//const lighter = new SmartLighter(document.querySelector('.content'), colors);

const lighter = new NewLighter(document.querySelector('.content'), colors);
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