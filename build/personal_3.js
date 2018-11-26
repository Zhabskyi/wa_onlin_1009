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
/******/ 	return __webpack_require__(__webpack_require__.s = 391);
/******/ })
/************************************************************************/
/******/ ({

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(393);

var _mySlider = __webpack_require__(394);

var _commentBlock = __webpack_require__(395);

var slidesInfo = [{
	title: "<h5>Hello world</h5>",
	imgUrl: 'https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?cs=srgb&dl=colorful-colourful-fashion-904276.jpg&fm=jpg'
}, {
	title: "<h5>Look around</h5>",
	imgUrl: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=backpack-blonde-hair-blur-214574.jpg&fm=jpg'
}, {
	title: "<h5>It's wildly open</h5>",
	imgUrl: 'https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?cs=srgb&dl=beautiful-cellphone-cute-761963.jpg&fm=jpg'
}, {
	title: "<h5>Lock up your target</h5>",
	imgUrl: 'https://images.pexels.com/photos/7640/pexels-photo.jpg?cs=srgb&dl=adventure-balance-balanced-7640.jpg&fm=jpg'
}];

var timeInterval = 2500;
var divParent = document.querySelector('#container');

var slider = new _mySlider.MySlider(divParent, slidesInfo, timeInterval);
var comments = new _commentBlock.CommentBlock(divParent);

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ACTIVE_CLASS_NAME = 'slide__container_active';
var ACTIVE_CONTROLS_CLASS_NAME = 'slide__control_btns_active';

var MySlider = exports.MySlider = function () {
	function MySlider(rootElement, slidesInfo, timeInterval) {
		_classCallCheck(this, MySlider);

		this.rootElement = rootElement;
		this.slidesInfo = slidesInfo;
		this.timeInterval = timeInterval;
		this.currentSlide = 0;
		this.render();
		this.intervalSlideRun();
		this.switchSlideBack = this.switchSlideBack.bind(this);
		this.switchSlideForward = this.switchSlideForward.bind(this);
		this.attachEventHandlers();
	}

	_createClass(MySlider, [{
		key: 'render',
		value: function render() {
			var _this = this;

			this.slidesArray = [];
			this.controlBtnArray = [];

			this.mainContainer = document.createElement('div');
			this.mainContainer.classList.add('slide');

			this.slidesInfo.forEach(function (slideInfo, i) {
				_this.slideContainer = document.createElement('div');
				_this.slideContainer.classList.add('slide__container');
				_this.slidesArray.push(_this.slideContainer);

				_this.image = document.createElement('img');
				_this.slideContainerDescription = document.createElement('div');

				_this.image.classList.add('slide__container__img');
				_this.slideContainerDescription.classList.add('slide__container__description');

				_this.image.src = slideInfo.imgUrl;
				_this.slideContainerDescription.innerHTML = slideInfo.title;

				_this.control = document.createElement('button');
				_this.control.classList.add('slide__control_btns');
				_this.control.addEventListener('click', function () {
					_this.currentSlide = i;
					_this.switchSlide();
					_this.intervalSlideStop();
					_this.intervalDelay();
				});
				_this.controlBtnArray.push(_this.control);

				_this.rootElement.appendChild(_this.mainContainer);
				_this.mainContainer.appendChild(_this.slideContainer);
				_this.slideContainer.appendChild(_this.image);
				_this.slideContainer.appendChild(_this.slideContainerDescription);
			});

			this.controlContainer = document.createElement('div');
			this.controlContainer.classList.add('slide__control');

			this.BackBtn = document.createElement('button');
			this.ForwardBtn = document.createElement('button');

			this.BackBtn.classList.add('slide__control-back-btn');
			this.ForwardBtn.classList.add('slide__control-forward-btn');

			this.BackBtn.textContent = '<';
			this.ForwardBtn.textContent = '>';

			this.mainContainer.appendChild(this.controlContainer);
			this.controlContainer.appendChild(this.BackBtn);
			this.controlContainer.appendChild(this.ForwardBtn);

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.controlBtnArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var item = _step.value;

					this.controlContainer.appendChild(item);
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

			this.defineActiveSlide();
		}
	}, {
		key: 'defineActiveSlide',
		value: function defineActiveSlide() {
			this.activeElement = this.slidesArray[this.currentSlide];
			this.activeControlElement = this.controlBtnArray[this.currentSlide];
			this.activeElement.classList.add(ACTIVE_CLASS_NAME);
			this.activeControlElement.classList.add(ACTIVE_CONTROLS_CLASS_NAME);
		}
	}, {
		key: 'switchSlide',
		value: function switchSlide() {
			if (this.activeElement !== undefined) {
				this.activeElement.classList.remove(ACTIVE_CLASS_NAME);
			}
			if (this.activeControlElement !== undefined) {
				this.activeControlElement.classList.remove(ACTIVE_CONTROLS_CLASS_NAME);
			}

			this.defineActiveSlide();
		}
	}, {
		key: 'switchingSlides',
		value: function switchingSlides() {
			this.currentSlide = (this.currentSlide + 1) % this.slidesArray.length;
			this.switchSlide();
		}
	}, {
		key: 'intervalSlideRun',
		value: function intervalSlideRun() {
			this.slideInterval = setInterval(this.switchingSlides.bind(this), this.timeInterval);
		}
	}, {
		key: 'intervalDelay',
		value: function intervalDelay() {
			var _this2 = this;

			this.slideTimeout = setTimeout(function () {
				_this2.intervalSlideRun();
			}, 5000);
		}
	}, {
		key: 'intervalSlideStop',
		value: function intervalSlideStop() {
			clearInterval(this.slideInterval);
			clearTimeout(this.slideTimeout);
			this.slideInterval = undefined;
			this.slideTimeout = undefined;
		}
	}, {
		key: 'attachEventHandlers',
		value: function attachEventHandlers() {
			this.BackBtn.addEventListener('click', this.switchSlideBack);
			this.ForwardBtn.addEventListener('click', this.switchSlideForward);
		}
	}, {
		key: 'switchSlideBack',
		value: function switchSlideBack() {
			if (this.currentSlide > 0) {
				this.currentSlide = (this.currentSlide - 1) % this.slidesArray.length;
			} else {
				this.currentSlide = this.slidesArray.length - 1;
			}
			this.switchSlide();
		}
	}, {
		key: 'switchSlideForward',
		value: function switchSlideForward() {
			this.currentSlide = (this.currentSlide + 1) % this.slidesArray.length;
			this.switchSlide();
		}
	}]);

	return MySlider;
}();

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CommentBlock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpService = __webpack_require__(396);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BTN_DEL_CLASS_NAME = 'btn_del';
var AUTHOR_ATTR = 'author';
var TEXT_ATTR = 'text';
var COMMENT_ITEM_TEMPLATE = '<div>\n\t\t<span class = "author-name" data-name="' + AUTHOR_ATTR + '">{{author}}</span>\n\t\t<span class = "comment" data-name="' + TEXT_ATTR + '">{{text}}</span>\n\t\t</div>\n\t\t<div>\n\t\t<span class = "date"">{{date}}</span>\n\t\t<button type="button" class="' + BTN_DEL_CLASS_NAME + '">DELETE</button>\n\t\t</div>';
var URL = 'http://localhost:4001/comments';
var TASK_ID_PREFIX = 'taskID';

var CommentBlock = exports.CommentBlock = function () {
	function CommentBlock(rootElement) {
		_classCallCheck(this, CommentBlock);

		this.rootElement = rootElement;
		this.httpService = new _httpService.HTTPService();
		this.getList();
		this.render();
	}

	_createClass(CommentBlock, [{
		key: 'getList',
		value: function getList() {
			var _this = this;

			this.httpService.get(URL).then(function (response) {
				return _this.renderList(response);
			}).catch(function (e) {
				return console.log(e);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			this.formContainer = document.createElement('div');
			this.comment = document.createElement('div');
			this.form = document.createElement('form');
			this.input = document.createElement('textarea');
			this.submitBtn = document.createElement('button');
			this.submitBtn.textContent = 'Add Comment';

			this.input.setAttribute('rows', 3);
			this.input.setAttribute('cols', 50);
			this.input.setAttribute('placeholder', 'Enter your comment here');

			this.formContainer.classList.add('comments');
			this.comment.classList.add('comments__item');
			this.form.classList.add('comments__form');
			this.input.classList.add('comments__form__input');
			this.submitBtn.classList.add('comments__form__submit-btn');

			this.form.addEventListener('submit', function (e) {
				e.preventDefault();
				var currentText = _this2.input.value;
				_this2.httpService.post(URL, { author: 'Ilya', text: currentText }).then(function (comment) {
					_this2.list.appendChild(_this2.renderOne(comment));
				}).catch(function (e) {
					console.log('Error', e);
				});
			});
			this.form.appendChild(this.input);
			this.form.appendChild(this.submitBtn);
			this.formContainer.appendChild(this.comment);
			this.formContainer.appendChild(this.form);

			this.rootElement.appendChild(this.formContainer);
		}
	}, {
		key: 'renderOne',
		value: function renderOne(comment) {
			var div = document.createElement('div');
			div.id = TASK_ID_PREFIX + comment.id;
			div.innerHTML = COMMENT_ITEM_TEMPLATE.replace('{{author}}', comment.author).replace('{{text}}', comment.text).replace('{{date}}', Date(comment.date));

			return div;
		}
	}, {
		key: 'renderList',
		value: function renderList(comments) {
			var _this3 = this;

			this.list = document.createElement('div');
			var fragment = document.createDocumentFragment();
			comments.forEach(function (comment) {
				fragment.appendChild(_this3.renderOne(comment));
			});

			this.list.appendChild(fragment);

			// this.list.addEventListener('click', (e) => {
			//   if (e.target.classList.contains(BTN_DEL_CLASS_NAME)) {
			//     e.stopPropagation();
			//     const id = e.target.closest('li').getAttribute('id').replace(TASK_ID_PREFIX, '');
			//     this.deleteItem(id);
			//   }
			//   if (e.target.classList.contains(CHACKBOX_CLASS_NAME)) {
			//     const id = e.target.closest('li').getAttribute('id').replace(TASK_ID_PREFIX, '');
			//     console.log(id);
			//     this.updateItem(id)
			//   }
			// })
			this.rootElement.appendChild(this.list);
		}
	}]);

	return CommentBlock;
}();

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTTPService = exports.HTTPService = function () {
  function HTTPService() {
    _classCallCheck(this, HTTPService);
  }

  _createClass(HTTPService, [{
    key: 'get',
    value: function get(url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              var parsedData = JSON.parse(xhr.response);
              resolve(parsedData);
            } else {
              reject(xhr);
            }
          }
        };
      });
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(typeof data !== 'string' ? JSON.stringify(data) : data);

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              var parsedData = JSON.parse(xhr.response);
              resolve(parsedData);
            } else {
              reject(xhr);
            }
          }
        };
      });
    }
  }, {
    key: 'delete',
    value: function _delete(url, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('DELETE', url);

      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var parsedData = JSON.parse(xhr.response);
            successCallback(parsedData);
          } else {
            errorCallback(xhr);
          }
        }
      };
    }
  }, {
    key: 'put',
    value: function put(url, data, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', url);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(data));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var parsedData = JSON.parse(xhr.response);
            successCallback(parsedData);
          } else {
            errorCallback(xhr);
          }
        }
      };
    }
  }]);

  return HTTPService;
}();

/***/ })

/******/ });