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


var _tab = __webpack_require__(357);

__webpack_require__(358);

(0, _tab.tab)();

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.tab = tab;
function tab() {
	var ITEM_ACTIVE_CLASS = 'tab__item__article_active';
	var CONTENT_ACTIVE_CLASS = 'tab__content__item_active';
	var itemArticle = document.querySelectorAll('.tab__item__article');
	var itemContent = document.querySelectorAll('.tab__content__item');
	var activeElement = itemArticle[0];
	var activeArticle = itemContent[0];

	function switchContent(element) {
		if (activeElement !== undefined) {
			console.log(activeElement);
			activeElement.classList.remove(CONTENT_ACTIVE_CLASS);
		}
		activeElement = element;
		element.classList.add(CONTENT_ACTIVE_CLASS);
	}

	function switchArticle(element) {
		if (activeArticle !== undefined) {
			activeArticle.classList.remove(ITEM_ACTIVE_CLASS);
		}
		activeArticle = element;
		element.classList.add(ITEM_ACTIVE_CLASS);
	}

	var _loop = function _loop(i) {
		itemArticle[i].addEventListener('click', function () {
			switchContent(itemContent[i]);
			switchArticle(itemArticle[i]);
		});
	};

	for (var i = 0; i < itemArticle.length; i++) {
		_loop(i);
	}
}

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });