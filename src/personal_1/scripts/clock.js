export function updateClock ( ) {
	let currentTime = new Date ();

	let currentHours = currentTime.getHours ();
	let currentMinutes = currentTime.getMinutes ();
	let currentSeconds = currentTime.getSeconds ();
	let currentDay = currentTime.getDay ();
	let currentMonth = currentTime.getMonth ();
	let currentYear = currentTime.getFullYear ();


	const buttonClock = document.querySelector('#clock');
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	let currentShortTime = `${currentHours}:${currentMinutes}`;
	let currentFullTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;

	buttonClock.textContent = currentShortTime;

	function fullTime () {
		buttonClock.textContent = currentFullTime;
	}

	buttonClock.addEventListener('click', () => {
		fullTime();
	});
}