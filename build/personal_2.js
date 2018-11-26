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
/******/ 	return __webpack_require__(__webpack_require__.s = 386);
/******/ })
/************************************************************************/
/******/ ({

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(388);

var _smartLighter = __webpack_require__(389);

var _anotherFile = __webpack_require__(390);

var colors = ['red', 'yellow', 'green'];

//const lighter = new SmartLighter(document.querySelector('.content'), colors);

var lighter = new _anotherFile.NewLighter(document.querySelector('.content'), colors);

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SmartLighter = exports.SmartLighter = function () {
	function SmartLighter(rootElement, colors) {
		_classCallCheck(this, SmartLighter);

		this.rootElement = rootElement;
		this.colors = colors;
		this.currentColor = 0;
		this.listen = this.listen.bind(this);
		this.mouseOverEffectStop = this.mouseOverEffectStop.bind(this);
		this.mouseOverEffectStart = this.mouseOverEffectStart.bind(this);
		this.lightSwitch = this.lightSwitch.bind(this);
		this.renderWidget();
		this.renderLighter();
		this.turnOnButton();
	}

	_createClass(SmartLighter, [{
		key: 'renderWidget',
		value: function renderWidget() {
			this.lighterContainer = document.createElement('div');
			this.btn = document.createElement('button');

			this.lighterContainer.classList.add('traffic-lighter');
			this.btn.classList.add('toggle-button');

			this.btn.textContent = 'On/Off';

			this.rootElement.appendChild(this.lighterContainer);
			this.rootElement.appendChild(this.btn);
		}
	}, {
		key: 'renderLighter',
		value: function renderLighter() {
			this.item = new Array();
			for (var i = 0; i < this.colors.length; i++) {
				this.light = document.createElement('button');
				this.light.classList.add('traffic-lighter__lamp');
				this.light.classList.add('traffic-lighter__lamp_' + this.colors[i]);
				this.item.push(this.light);
				this.lighterContainer.appendChild(this.light);
			}
		}
	}, {
		key: 'turnOnLight',
		value: function turnOnLight(el) {
			var ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
			this.activeElement;

			if (this.activeElement !== undefined) {
				this.activeElement.classList.remove(ACTIVE_CLASS_NAME);
			}
			this.activeElement = el;
			el.classList.toggle(ACTIVE_CLASS_NAME);
		}
	}, {
		key: 'listen',
		value: function listen() {
			this.turnOnLight(el);
			//event.target?????
		}

		// changeLight() {
		// 	for (let i = 0; i < this.item.length; i++) {
		// 		this.item[i].addEventListener('click', this.listen)	
		// 	}
		// }

	}, {
		key: 'changeLight',
		value: function changeLight() {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.item[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _el = _step.value;

					_el.addEventListener('click', this.listen);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: 'stopChangeLight',
		value: function stopChangeLight() {
			for (var i = 0; i < this.item.length; i++) {
				this.item[i].removeEventListener('click', this.listen.bind(null, this.item[i]));
			}
		}
	}, {
		key: 'removeActiveLighterClass',
		value: function removeActiveLighterClass() {
			this.item.forEach(function (element) {
				if (element.classList.contains('traffic-lighter__lamp_active')) {
					element.classList.remove('traffic-lighter__lamp_active');
				}
			});
		}
	}, {
		key: 'lightSwitch',
		value: function lightSwitch() {
			this.item[this.currentColor].classList.remove('traffic-lighter__lamp_active');
			this.currentColor = (this.currentColor + 1) % this.item.length;
			this.item[this.currentColor].classList.add('traffic-lighter__lamp_active');
		}
	}, {
		key: 'intervalLightRun',
		value: function intervalLightRun() {
			this.interval = setInterval(this.lightSwitch, 400);
		}
	}, {
		key: 'intervalLightStop',
		value: function intervalLightStop() {
			clearInterval(this.interval);
			this.interval = undefined;
		}
	}, {
		key: 'mouseOverEffect',
		value: function mouseOverEffect() {
			this.lighterContainer.addEventListener('mouseenter', this.mouseOverEffectStop);
			this.lighterContainer.addEventListener('mouseleave', this.mouseOverEffectStart);
		}
	}, {
		key: 'removeMouseOverEffect',
		value: function removeMouseOverEffect() {
			this.lighterContainer.removeEventListener('mouseenter', this.mouseOverEffectStop);
			this.lighterContainer.removeEventListener('mouseleave', this.mouseOverEffectStart);
		}
	}, {
		key: 'mouseOverEffectStop',
		value: function mouseOverEffectStop() {
			this.intervalLightStop();
			this.removeActiveLighterClass();
		}
	}, {
		key: 'mouseOverEffectStart',
		value: function mouseOverEffectStart() {
			this.intervalLightRun();
		}
	}, {
		key: 'toggleLighter',
		value: function toggleLighter() {
			if (this.btn.classList.contains('toggle-button_active')) {
				this.changeLight();
				this.intervalLightRun();
				this.mouseOverEffect();
			} else {
				this.disableAll();
			}
		}
	}, {
		key: 'disableAll',
		value: function disableAll() {
			this.removeActiveLighterClass();
			this.stopChangeLight();
			this.intervalLightStop();
			this.removeMouseOverEffect();
		}
	}, {
		key: 'turnOnButton',
		value: function turnOnButton() {
			var _this = this;

			this.btn.addEventListener('click', function () {
				_this.btn.classList.toggle('toggle-button_active');
				_this.toggleLighter();
			});
		}
	}]);

	return SmartLighter;
}();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';

var NewLighter = exports.NewLighter = function () {
	function NewLighter(rootElement, colors) {
		_classCallCheck(this, NewLighter);

		this.rootElement = rootElement;
		this.colors = colors;
		this.currentColor = 0;
		this.isEnable = false;
		this.renderWidget();
		this.renderLighter();
		this.startRun = this.startRun.bind(this);
		this.attachEventHandlers();
	}

	_createClass(NewLighter, [{
		key: 'renderWidget',
		value: function renderWidget() {
			this.lighterContainer = document.createElement('div');
			this.btn = document.createElement('button');

			this.lighterContainer.classList.add('traffic-lighter');
			this.btn.classList.add('toggle-button');

			this.btn.textContent = 'On/Off';

			this.rootElement.appendChild(this.lighterContainer);
			this.rootElement.appendChild(this.btn);
		}
	}, {
		key: 'renderLighter',
		value: function renderLighter() {
			var _this = this;

			this.item = new Array();

			var _loop = function _loop(i) {
				var light = document.createElement('button');
				light.addEventListener('click', function () {
					if (_this.isEnable !== false) {
						_this.currentColor = i;
						_this.turnOnLight();
					}
				});
				light.classList.add('traffic-lighter__lamp');
				light.classList.add('traffic-lighter__lamp_' + _this.colors[i]);
				_this.item.push(light);
				_this.lighterContainer.appendChild(light);
			};

			for (var i = 0; i < this.colors.length; i++) {
				_loop(i);
			}
		}
	}, {
		key: 'turnOnLight',
		value: function turnOnLight() {
			if (this.activeElement !== undefined) {
				this.activeElement.classList.remove(ACTIVE_CLASS_NAME);
			}
			this.activeElement = this.item[this.currentColor];
			console.log(this.currentColor);
			this.activeElement.classList.add(ACTIVE_CLASS_NAME);
		}
	}, {
		key: 'lightSwitch',
		value: function lightSwitch() {
			this.currentColor = (this.currentColor + 1) % this.item.length;
			this.turnOnLight();
		}
	}, {
		key: 'intervalLightRun',
		value: function intervalLightRun() {
			this.interval = setInterval(this.lightSwitch.bind(this), 400);
			this.isEnable = true;
		}
	}, {
		key: 'intervalLightStop',
		value: function intervalLightStop() {
			clearInterval(this.interval);
			this.interval = undefined;
			this.isEnable = false;
		}
	}, {
		key: 'attachEventHandlers',
		value: function attachEventHandlers() {
			var _this2 = this;

			this.btn.addEventListener('click', this.startRun);
			this.lighterContainer.addEventListener('mouseenter', function () {
				clearInterval(_this2.interval);
			});
			this.lighterContainer.addEventListener('mouseleave', function () {
				_this2.intervalLightRun();
			});
		}
	}, {
		key: 'startRun',
		value: function startRun() {
			if (this.isEnable === false) {
				this.intervalLightRun();
			} else {
				this.intervalLightStop();
				this.item[this.currentColor].classList.remove('traffic-lighter__lamp_active');
			}
		}
	}]);

	return NewLighter;
}();

/***/ })

/******/ });