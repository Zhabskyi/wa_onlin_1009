
export function LightTheBulb(targetEl){
	const ACTIVE_CLASS_NAME = 'light__bulb_active';
	const light = targetEl.querySelector('.light__bulb');
	const lightBtn = targetEl.querySelector('.light__btn');

		function addLight(element) {
			element.classList.toggle(ACTIVE_CLASS_NAME);
		}

		lightBtn.onclick = function() {
			addLight(light);
		}
}