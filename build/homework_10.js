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
/******/ 	return __webpack_require__(__webpack_require__.s = 350);
/******/ })
/************************************************************************/
/******/ ({

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(352);

var _lightBulb = __webpack_require__(353);

var _accordion = __webpack_require__(354);

var lightersHtmlElements = document.querySelectorAll('.light');

for (var i = 0; i < lightersHtmlElements.length; i++) {
	(0, _lightBulb.LightTheBulb)(lightersHtmlElements[i]);
}

/*Here starts script for accordion*/
var activeEl = document.querySelectorAll('.article');
var activeHead = document.querySelectorAll('.article__header');

var _loop = function _loop(_i) {
	activeHead[_i].onclick = function () {
		(0, _accordion.addClass)(activeEl[_i]);
	};
};

for (var _i = 0; _i < activeEl.length; _i++) {
	_loop(_i);
}

function pagination(currentEl, number) {

	var buttons = [];

	for (var _i2 = 0; _i2 < number; _i2++) {
		var btn = document.createElement('button');
		buttons.push(btn);
		btn.textContent = _i2 + 1;
		currentEl.appendChild(btn);
		btn.addEventListener('click', select);
	}

	function select() {
		buttons.forEach(function (item) {
			return item.style.background = 'none';
		});
		this.style.background = 'red';
	}
}

pagination(document.querySelector('.targetElement'), 3);

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LightTheBulb = LightTheBulb;
function LightTheBulb(targetEl) {
	var ACTIVE_CLASS_NAME = 'light__bulb_active';
	var light = targetEl.querySelector('.light__bulb');
	var lightBtn = targetEl.querySelector('.light__btn');

	function addLight(element) {
		element.classList.toggle(ACTIVE_CLASS_NAME);
	}

	lightBtn.onclick = function () {
		addLight(light);
	};
}

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addClass = addClass;
var OPEN_CLASS_NAME = 'open';
var CLOSE_CLASS_NAME = 'close';

function addClass(element) {
	element.classList.toggle(OPEN_CLASS_NAME);
	element.classList.toggle(CLOSE_CLASS_NAME);
}

/***/ })

/******/ });