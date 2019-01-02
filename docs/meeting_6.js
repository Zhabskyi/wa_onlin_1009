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
/******/ 	return __webpack_require__(__webpack_require__.s = 355);
/******/ })
/************************************************************************/
/******/ ({

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(357);

var _trafficLighter = __webpack_require__(358);

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addLighter = addLighter;
exports.addColors = addColors;


var lighterBtn = document.querySelector('#btn-add-lighter');
var colorBtn = document.querySelector('#btn-add-color');
var selector = '#new-traffic-lighter';
var div = void 0;
var colorsNumber = ['red', 'yellow', 'green', 'aqua', 'blue'];

function addLighter() {
	lighterBtn.addEventListener('click', function () {
		trafficLighter(selector);
	});
}

function addColors() {
	colorBtn.addEventListener('click', function () {
		lighterColors();
	});
}

function trafficLighter(selector) {

	var LIGHTER_CLASS_NAME = 'traffic-lighter';
	var lightsNumber = prompt('How many lights in the lighter but not more then 5?');
	var menuParent = document.querySelector(selector);

	function render() {
		div = document.createElement('div');
		div.classList.add(LIGHTER_CLASS_NAME);
		menuParent.appendChild(div);
	}

	function renderLights() {
		for (var i = 0; i < lightsNumber; i++) {
			var option = document.createElement('button');
			option.classList.add('traffic-lighter__lamp');
			option.classList.add('traffic-lighter__lamp_' + colorsNumber[i]);
			div.appendChild(option);
		}
	}

	render();
	renderLights();
}

function lighterColors() {

	var ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
	var color = document.querySelectorAll('.traffic-lighter__lamp');
	var activeElement = void 0;

	function tornOnLight(element) {
		if (activeElement !== undefined) {
			activeElement.classList.remove(ACTIVE_CLASS_NAME);
		}
		activeElement = element;
		element.classList.toggle(ACTIVE_CLASS_NAME);
	}

	var _loop = function _loop(i) {
		color[i].onclick = function () {
			tornOnLight(color[i]);
		};
	};

	for (var i = 0; i < color.length; i += 1) {
		_loop(i);
	}
}

addLighter();
addColors();

var lightersHtmlElements = document.querySelector('.traffic-lighter');
lighterColors(lightersHtmlElements);

/***/ })

/******/ });