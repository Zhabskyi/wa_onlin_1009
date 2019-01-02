/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 359);
/******/ })
/************************************************************************/
/******/ ({

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(360);


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(361);

var _clock = __webpack_require__(362);

var _clockClasses = __webpack_require__(363);

var ROOT_CLASS_NAME = 'control-panel';
var CONTROL_BTN_CLASS_NAME = ROOT_CLASS_NAME + '__next-btn';
var LIST_COUNTER_CLASS_NAME = ROOT_CLASS_NAME + '__targetElement';
var SELECTED_CLASS_NAME = 'selected-btn';

function pagination(currentEl, number) {

	var controlBack = document.createElement('button');
	var listCounter = document.createElement('div');
	var controlForward = document.createElement('button');

	controlBack.classList.add(CONTROL_BTN_CLASS_NAME);
	controlBack.setAttribute('id', '#back-btn');
	listCounter.classList.add(LIST_COUNTER_CLASS_NAME);
	controlForward.classList.add(CONTROL_BTN_CLASS_NAME);
	controlForward.setAttribute('id', '#forward-btn');

	controlBack.textContent = '<<';
	controlForward.textContent = '>>';

	currentEl.appendChild(controlBack);

	var buttons = [];

	for (var i = 0; i < number; i++) {
		var btn = document.createElement('button');
		buttons.push(btn);
		btn.textContent = i + 1;
		btn.classList.add('control-panel__targetElement__btn');
		currentEl.appendChild(btn);
		btn.addEventListener('click', select);
	}

	buttons[0].classList.add(SELECTED_CLASS_NAME);

	currentEl.appendChild(controlForward);

	controlBack.addEventListener('click', moveBack);
	controlForward.addEventListener('click', moveForward);

	function select() {
		buttons.forEach(function (item) {
			return item.classList.remove(SELECTED_CLASS_NAME);
		});
		this.classList.add(SELECTED_CLASS_NAME);
	}

	function moveBack() {
		for (var _i = 0; _i < buttons.length; _i++) {
			if (buttons[0].classList.contains(SELECTED_CLASS_NAME)) {
				break;
			} else if (buttons[_i].classList.contains(SELECTED_CLASS_NAME)) {
				buttons[_i].classList.remove(SELECTED_CLASS_NAME);
				buttons[_i - 1].classList.add(SELECTED_CLASS_NAME);
			}
		}
	}

	function moveForward() {
		for (var _i2 = 0; _i2 < buttons.length; _i2++) {
			if (buttons[buttons.length - 1].classList.contains(SELECTED_CLASS_NAME)) {
				break;
			} else if (buttons[_i2].classList.contains(SELECTED_CLASS_NAME)) {
				buttons[_i2].classList.remove(SELECTED_CLASS_NAME);
				buttons[_i2 + 1].classList.add(SELECTED_CLASS_NAME);
				break;
			}
		}
	}
}

pagination(document.querySelector('.control-panel'), 7);

var clockFirst = new _clockClasses.Clock(document.querySelector('.clock-classes'), 'full');
var clockSecond = new _clockClasses.Clock(document.querySelector('.second-clock'), 'simple');
var clockThird = new _clockClasses.Clock(document.querySelector('.third-clock'), 'date');

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateClock = updateClock;
function updateClock() {
	var currentTime = new Date();

	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	var currentDay = currentTime.getDay();
	var currentMonth = currentTime.getMonth();
	var currentYear = currentTime.getFullYear();

	var buttonClock = document.querySelector('#clock');
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

	var currentShortTime = currentHours + ":" + currentMinutes;
	var currentFullTime = currentHours + ":" + currentMinutes + ":" + currentSeconds;

	buttonClock.textContent = currentShortTime;

	function fullTime() {
		buttonClock.textContent = currentFullTime;
	}

	buttonClock.addEventListener('click', function () {
		fullTime();
	});
}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = exports.Clock = function () {
	function Clock(rootElement, mode) {
		_classCallCheck(this, Clock);

		this.rootElement = rootElement;
		this.mode = mode;
		this.renderWidget();
		this.renderTime();
		this.startClock();
		this.changeMode();
	}

	_createClass(Clock, [{
		key: 'renderWidget',
		value: function renderWidget() {
			var _this = this;

			this.clockContainer = document.createElement('div');
			var btn = document.createElement('button');
			btn.textContent = 'toggle';
			btn.addEventListener('click', function () {
				if (_this.interval !== undefined) {
					_this.stopClock();
				} else {
					_this.startClock();
				}
			});

			this.rootElement.appendChild(this.clockContainer);
			this.rootElement.appendChild(btn);
		}
	}, {
		key: 'renderTime',
		value: function renderTime() {
			var currentTime = new Date();
			var currentHours = currentTime.getHours();
			var currentMinutes = currentTime.getMinutes();
			var currentSeconds = currentTime.getSeconds();
			var currentDay = currentTime.getDay();
			var currentMonth = currentTime.getMonth();
			var currentYear = currentTime.getFullYear();

			console.log(this);
			if (this.mode === 'simple') {
				this.clockContainer.textContent = currentHours + ':' + currentMinutes;
			} else if (this.mode === 'full') {
				this.clockContainer.textContent = currentHours + ':' + currentMinutes + ':' + currentSeconds;
			} else {
				this.clockContainer.textContent = currentHours + ':' + currentMinutes + ':' + currentSeconds + ':' + currentDay + '/' + currentMonth + '/' + currentYear;
			}
		}
	}, {
		key: 'startClock',
		value: function startClock() {
			var _this2 = this;

			this.interval = setInterval(function () {
				return _this2.renderTime();
			}, 1000);
		}
	}, {
		key: 'changeMode',
		value: function changeMode() {
			var _this3 = this;

			this.clockContainer.addEventListener('click', function () {
				if (_this3.mode === 'simple') {
					_this3.mode = 'full';
				} else {
					_this3.mode = 'simple';
				}
				_this3.renderTime();
			});

			this.clockContainer.addEventListener('contextmenu', function (e) {
				console.log('CONTEXT MENU CLICEKD');
				e.preventDefault();
				_this3.mode = 'date';
				_this3.renderTime();
			});
		}
	}, {
		key: 'stopClock',
		value: function stopClock() {
			clearInterval(this.interval);
			this.interval = undefined;
		}
	}]);

	return Clock;
}();

/***/ })

/******/ });