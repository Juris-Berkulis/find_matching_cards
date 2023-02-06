/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Card.js":
/*!********************!*\
  !*** ./js/Card.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _bgColor = /*#__PURE__*/new WeakMap();
var _domElement = /*#__PURE__*/new WeakMap();
var _isShowCard = /*#__PURE__*/new WeakMap();
var Card = /*#__PURE__*/function () {
  function Card(bgColor) {
    _classCallCheck(this, Card);
    _classPrivateFieldInitSpec(this, _bgColor, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _domElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _isShowCard, {
      writable: true,
      value: false
    });
    _classPrivateFieldSet(this, _bgColor, bgColor);
    _classPrivateFieldSet(this, _domElement, document.createElement('div'));
    _classPrivateFieldGet(this, _domElement).classList.add('card');
    _classPrivateFieldGet(this, _domElement).style.backgroundColor = "".concat(this.getReverseSideOfTheCard);
    _classPrivateFieldGet(this, _domElement).connectedCard = this;
  }
  _createClass(Card, [{
    key: "getReverseSideOfTheCard",
    get: function get() {
      return '#555555';
    }
  }, {
    key: "getFrontSideOfTheCard",
    get: function get() {
      return _classPrivateFieldGet(this, _bgColor);
    }
  }, {
    key: "getDomElement",
    get: function get() {
      return _classPrivateFieldGet(this, _domElement);
    }
  }, {
    key: "flipCard",
    value: function flipCard() {
      _classPrivateFieldSet(this, _isShowCard, !_classPrivateFieldGet(this, _isShowCard));
      if (_classPrivateFieldGet(this, _isShowCard)) {
        _classPrivateFieldGet(this, _domElement).style.backgroundColor = this.getFrontSideOfTheCard;
        _classPrivateFieldGet(this, _domElement).classList.add('card_open');
      } else {
        _classPrivateFieldGet(this, _domElement).style.backgroundColor = this.getReverseSideOfTheCard;
        _classPrivateFieldGet(this, _domElement).classList.remove('card_open');
      }
    }
  }, {
    key: "disconnectedFromDOM",
    value: function disconnectedFromDOM() {
      _classPrivateFieldGet(this, _domElement).connectedCard = null;
    }
  }]);
  return Card;
}();

;

/***/ }),

/***/ "./js/Desk.js":
/*!********************!*\
  !*** ./js/Desk.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Desc; }
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./js/Card.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _cardsCount = /*#__PURE__*/new WeakMap();
var _frontSidesOfTheCards = /*#__PURE__*/new WeakMap();
var Desc = /*#__PURE__*/function () {
  //* Вариант 1:
  // constructor () {
  //     this.cards = [];
  //     this.#frontSidesOfTheCards.forEach((frontSideOfTheCard) => {
  //         this.cards.push(new Card(frontSideOfTheCard));
  //         this.cards.push(new Card(frontSideOfTheCard));
  //     });
  // };

  //* Вариант 2:
  function Desc(cardsCount) {
    _classCallCheck(this, Desc);
    _classPrivateFieldInitSpec(this, _cardsCount, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _frontSidesOfTheCards, {
      writable: true,
      value: ['red', 'yellow', 'green', 'cyan', 'blue', 'orange', 'blueviolet', 'azure', 'brown', 'pink', 'lime', 'deeppink', 'burlywood', 'olive', 'saddlebrown', 'midnightblue', 'palegreen']
    });
    this.buildListWithFrontSidesOfTheCards();
    _classPrivateFieldSet(this, _cardsCount, cardsCount);
    _classPrivateFieldGet(this, _frontSidesOfTheCards).length = _classPrivateFieldGet(this, _cardsCount) / 2;
    this.cards = [].concat(_toConsumableArray(_classPrivateFieldGet(this, _frontSidesOfTheCards)), _toConsumableArray(_classPrivateFieldGet(this, _frontSidesOfTheCards))).map(function (card) {
      return new _Card__WEBPACK_IMPORTED_MODULE_0__["default"](card);
    });
  }
  _createClass(Desc, [{
    key: "buildListWithFrontSidesOfTheCards",
    value: function buildListWithFrontSidesOfTheCards() {
      for (var i = 0; i < 3; i++) {
        var red = (Math.random() * 255).toFixed(0);
        var green = (Math.random() * 255).toFixed(0);
        var blue = (Math.random() * 255).toFixed(0);
        _classPrivateFieldGet(this, _frontSidesOfTheCards).push("rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")"));
      }
    }
  }, {
    key: "shuffleCards",
    value: function shuffleCards() {
      this.cards.sort(function () {
        return Math.random() - 0.5;
      });
    }
  }, {
    key: "removeCard",
    value: function removeCard(card) {
      var indexCard = this.cards.findIndex(function (item) {
        return item.getFrontSideOfTheCard === card.getFrontSideOfTheCard;
      });
      if (indexCard !== -1) {
        this.cards.splice(indexCard, 1);
        card.disconnectedFromDOM();
      }
    }
  }]);
  return Desc;
}();

;

/***/ }),

/***/ "./js/GameManager.js":
/*!***************************!*\
  !*** ./js/GameManager.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GameManager; }
/* harmony export */ });
/* harmony import */ var _Desk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Desk */ "./js/Desk.js");
/* harmony import */ var _TheEndModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheEndModal */ "./js/TheEndModal.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }


var _boardElement = /*#__PURE__*/new WeakMap();
var _scoreElement = /*#__PURE__*/new WeakMap();
var _failElement = /*#__PURE__*/new WeakMap();
var _desc = /*#__PURE__*/new WeakMap();
var _firstSelectedCard = /*#__PURE__*/new WeakMap();
var _secondSelectedCard = /*#__PURE__*/new WeakMap();
var _attemptNumber = /*#__PURE__*/new WeakMap();
var _failCount = /*#__PURE__*/new WeakMap();
var _cardsCount = /*#__PURE__*/new WeakMap();
var _cardsCountBtnsPanel = /*#__PURE__*/new WeakMap();
var _elapsedTimeElement = /*#__PURE__*/new WeakMap();
var _elapsedTime = /*#__PURE__*/new WeakMap();
var _startTimerBoolean = /*#__PURE__*/new WeakMap();
var _intervalIdForElapsedTime = /*#__PURE__*/new WeakMap();
var GameManager = /*#__PURE__*/function () {
  function GameManager(board, score, fail) {
    _classCallCheck(this, GameManager);
    _classPrivateFieldInitSpec(this, _boardElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _scoreElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _failElement, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _desc, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _firstSelectedCard, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _secondSelectedCard, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _attemptNumber, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _failCount, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _cardsCount, {
      writable: true,
      value: 20
    });
    _classPrivateFieldInitSpec(this, _cardsCountBtnsPanel, {
      writable: true,
      value: document.getElementById('cardsCountPanel')
    });
    _classPrivateFieldInitSpec(this, _elapsedTimeElement, {
      writable: true,
      value: document.getElementById('elapsedTime')
    });
    _classPrivateFieldInitSpec(this, _elapsedTime, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _startTimerBoolean, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _intervalIdForElapsedTime, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _boardElement, board);
    _classPrivateFieldSet(this, _scoreElement, score);
    _classPrivateFieldSet(this, _failElement, fail);
    this.findCardsCount();
    this.activeCardsCountBtnsPanel();
  }
  _createClass(GameManager, [{
    key: "attemptNumber",
    get: function get() {
      return _classPrivateFieldGet(this, _attemptNumber);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _attemptNumber, value);
      _classPrivateFieldGet(this, _scoreElement).innerHTML = value;
    }
  }, {
    key: "failCount",
    get: function get() {
      return _classPrivateFieldGet(this, _failCount);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _failCount, value);
      _classPrivateFieldGet(this, _failElement).innerHTML = value;
    }
  }, {
    key: "cardsCount",
    set: function set(value) {
      return _classPrivateFieldSet(this, _cardsCount, value);
    }
  }, {
    key: "shuffleAndDeal",
    value: function shuffleAndDeal() {
      var _this = this;
      _classPrivateFieldGet(this, _desc).shuffleCards();
      _classPrivateFieldGet(this, _desc).cards.forEach(function (card) {
        _classPrivateFieldGet(_this, _boardElement).append(card.getDomElement);
      });
    }
  }, {
    key: "formatElapsedTime",
    value: function formatElapsedTime(time) {
      return "".concat((time - time % 3600) / 3600 ? "".concat((time - time % 3600) / 3600, ":") : '').concat((time - time % 60 - (time - time % 3600)) / 60 >= 10 ? (time - time % 60 - (time - time % 3600)) / 60 : "0".concat((time - time % 60 - (time - time % 3600)) / 60), ":").concat(time % 60 >= 10 ? time % 60 : "0".concat(time % 60));
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      clearInterval(_classPrivateFieldGet(this, _intervalIdForElapsedTime));
      _classPrivateFieldSet(this, _startTimerBoolean, false);
      _classPrivateFieldSet(this, _elapsedTime, 0);
      _classPrivateFieldGet(this, _elapsedTimeElement).innerHTML = this.formatElapsedTime(_classPrivateFieldGet(this, _elapsedTime));
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.resetTimer();
      this.attemptNumber = 0;
      this.failCount = 0;
      _classPrivateFieldSet(this, _firstSelectedCard, null);
      _classPrivateFieldSet(this, _secondSelectedCard, null);
      _classPrivateFieldSet(this, _desc, new _Desk__WEBPACK_IMPORTED_MODULE_0__["default"](_classPrivateFieldGet(this, _cardsCount)));
      _classPrivateFieldGet(this, _boardElement).innerHTML = '';
      this.shuffleAndDeal();
    }
  }, {
    key: "startElapsedTime",
    value: function startElapsedTime() {
      var _this2 = this;
      _classPrivateFieldSet(this, _intervalIdForElapsedTime, setInterval(function () {
        var _this$elapsedTime, _this$elapsedTime2;
        _classPrivateFieldSet(_this2, _elapsedTime, (_this$elapsedTime = _classPrivateFieldGet(_this2, _elapsedTime), _this$elapsedTime2 = _this$elapsedTime++, _this$elapsedTime)), _this$elapsedTime2;
        _classPrivateFieldGet(_this2, _elapsedTimeElement).innerHTML = _this2.formatElapsedTime(_classPrivateFieldGet(_this2, _elapsedTime));
      }, 1000));
    }
  }, {
    key: "selectCard",
    value: function selectCard(card) {
      var _this3 = this;
      if (!_classPrivateFieldGet(this, _startTimerBoolean)) {
        this.startElapsedTime();
        _classPrivateFieldSet(this, _startTimerBoolean, true);
      }
      if (card === _classPrivateFieldGet(this, _firstSelectedCard)) {
        return;
      }
      card.flipCard();
      if (_classPrivateFieldGet(this, _firstSelectedCard) && _classPrivateFieldGet(this, _secondSelectedCard)) {
        _classPrivateFieldGet(this, _firstSelectedCard).flipCard();
        _classPrivateFieldGet(this, _secondSelectedCard).flipCard();
        _classPrivateFieldSet(this, _firstSelectedCard, null);
        _classPrivateFieldSet(this, _secondSelectedCard, null);
      }
      if (_classPrivateFieldGet(this, _firstSelectedCard) === null) {
        this.attemptNumber++;
        _classPrivateFieldSet(this, _firstSelectedCard, card);
      } else if (_classPrivateFieldGet(this, _secondSelectedCard) === null) {
        _classPrivateFieldSet(this, _secondSelectedCard, card);
        if (_classPrivateFieldGet(this, _firstSelectedCard).getFrontSideOfTheCard === card.getFrontSideOfTheCard) {
          _classPrivateFieldGet(this, _desc).removeCard(_classPrivateFieldGet(this, _firstSelectedCard));
          _classPrivateFieldGet(this, _desc).removeCard(_classPrivateFieldGet(this, _secondSelectedCard));
          _classPrivateFieldSet(this, _firstSelectedCard, null);
          _classPrivateFieldSet(this, _secondSelectedCard, null);
        } else {
          this.failCount++;
        }
      }
      if (!_classPrivateFieldGet(this, _desc).cards.length) {
        clearInterval(_classPrivateFieldGet(this, _intervalIdForElapsedTime));
        var timerId = setTimeout(function () {
          new _TheEndModal__WEBPACK_IMPORTED_MODULE_1__["default"](_this3.attemptNumber, _this3.failCount, _this3.formatElapsedTime(_classPrivateFieldGet(_this3, _elapsedTime)));
          clearTimeout(timerId);
        }, 1000);
      }
    }
  }, {
    key: "findCardsCount",
    value: function findCardsCount() {
      if (_classPrivateFieldGet(this, _cardsCountBtnsPanel).children) {
        for (var i = 0; i < _classPrivateFieldGet(this, _cardsCountBtnsPanel).children.length; i++) {
          if (+_classPrivateFieldGet(this, _cardsCountBtnsPanel).children[i].textContent === +_classPrivateFieldGet(this, _cardsCount)) {
            _classPrivateFieldGet(this, _cardsCountBtnsPanel).children[i].disabled = 'true';
          } else {
            _classPrivateFieldGet(this, _cardsCountBtnsPanel).children[i].removeAttribute('disabled');
          }
        }
      }
    }
  }, {
    key: "selectCardsCount",
    value: function selectCardsCount(event) {
      if (event.target.classList.contains('cardsCountBtn')) {
        this.cardsCount = +event.target.textContent;
      }
      this.findCardsCount();
    }
  }, {
    key: "activeCardsCountBtnsPanel",
    value: function activeCardsCountBtnsPanel() {
      var _this4 = this;
      _classPrivateFieldGet(this, _cardsCountBtnsPanel).addEventListener('click', function (event) {
        return _this4.selectCardsCount(event);
      });
    }
  }]);
  return GameManager;
}();

;

/***/ }),

/***/ "./js/TheEndModal.js":
/*!***************************!*\
  !*** ./js/TheEndModal.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TheEndModal; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _attemptNumber = /*#__PURE__*/new WeakMap();
var _failCount = /*#__PURE__*/new WeakMap();
var _elapsedTime = /*#__PURE__*/new WeakMap();
var _theEndElement = /*#__PURE__*/new WeakMap();
var _theEndModalElement = /*#__PURE__*/new WeakMap();
var _theEndModalAttemptNumberElement = /*#__PURE__*/new WeakMap();
var _theEndModalFailCountElement = /*#__PURE__*/new WeakMap();
var _theEndModalElapsedTimeElement = /*#__PURE__*/new WeakMap();
var _theEndModalCloseBtnElement = /*#__PURE__*/new WeakMap();
var TheEndModal = /*#__PURE__*/function () {
  function TheEndModal(attemptNumber, failCount, elapsedTime) {
    var _this = this;
    _classCallCheck(this, TheEndModal);
    _classPrivateFieldInitSpec(this, _attemptNumber, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _failCount, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _elapsedTime, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _theEndElement, {
      writable: true,
      value: document.getElementById('theEnd')
    });
    _classPrivateFieldInitSpec(this, _theEndModalElement, {
      writable: true,
      value: document.getElementById('theEndModal')
    });
    _classPrivateFieldInitSpec(this, _theEndModalAttemptNumberElement, {
      writable: true,
      value: document.getElementById('theEndModalAttemptNumber')
    });
    _classPrivateFieldInitSpec(this, _theEndModalFailCountElement, {
      writable: true,
      value: document.getElementById('theEndModalFailCount')
    });
    _classPrivateFieldInitSpec(this, _theEndModalElapsedTimeElement, {
      writable: true,
      value: document.getElementById('theEndModalElapsedTime')
    });
    _classPrivateFieldInitSpec(this, _theEndModalCloseBtnElement, {
      writable: true,
      value: document.getElementById('theEndModalCloseBtn')
    });
    _classPrivateFieldSet(this, _attemptNumber, attemptNumber);
    _classPrivateFieldSet(this, _failCount, failCount);
    _classPrivateFieldSet(this, _elapsedTime, elapsedTime);
    this.openTheEndModal();
    _classPrivateFieldGet(this, _theEndElement).onclick = function () {
      return _this.closeTheEndModal(_this);
    };
    _classPrivateFieldGet(this, _theEndModalCloseBtnElement).onclick = function () {
      return _this.closeTheEndModal(_this);
    };
    _classPrivateFieldGet(this, _theEndModalCloseBtnElement).onmouseover = function () {
      return _this.changeBGColorForModalBtn(_this);
    };
  }
  _createClass(TheEndModal, [{
    key: "changeBGColorForModalBtn",
    value: function changeBGColorForModalBtn() {
      var red = (Math.random() * 255).toFixed(0);
      var green = (Math.random() * 255).toFixed(0);
      var blue = (Math.random() * 255).toFixed(0);
      _classPrivateFieldGet(this, _theEndModalCloseBtnElement).style.backgroundColor = "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
      _classPrivateFieldGet(this, _theEndModalCloseBtnElement).style.color = "rgb(".concat(255 - red, ", ").concat(255 - green, ", ").concat(255 - blue, ")");
    }
  }, {
    key: "openTheEndModal",
    value: function openTheEndModal() {
      _classPrivateFieldGet(this, _theEndElement).style.display = 'block';
      _classPrivateFieldGet(this, _theEndModalElement).style.display = 'block';
      _classPrivateFieldGet(this, _theEndModalAttemptNumberElement).innerHTML = "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0445\u043E\u0434\u043E\u0432: ".concat(_classPrivateFieldGet(this, _attemptNumber));
      _classPrivateFieldGet(this, _theEndModalFailCountElement).innerHTML = "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0448\u0438\u0431\u043E\u043A: ".concat(_classPrivateFieldGet(this, _failCount));
      _classPrivateFieldGet(this, _theEndModalElapsedTimeElement).innerHTML = "\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F: ".concat(_classPrivateFieldGet(this, _elapsedTime));
    }
  }, {
    key: "closeTheEndModal",
    value: function closeTheEndModal() {
      _classPrivateFieldGet(this, _theEndElement).style.display = 'none';
      _classPrivateFieldGet(this, _theEndModalElement).style.display = 'none';
      _classPrivateFieldGet(this, _theEndModalAttemptNumberElement).innerHTML = '';
      _classPrivateFieldGet(this, _theEndModalFailCountElement).innerHTML = '';
      _classPrivateFieldGet(this, _theEndModalElapsedTimeElement).innerHTML = '';
    }
  }]);
  return TheEndModal;
}();

;

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameManager */ "./js/GameManager.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");


var board = document.getElementById('board');
var score = document.getElementById('attemptNumber');
var fail = document.getElementById('failCount');
var startGameButton = document.getElementById('startGame');
var rememberFieldButton = document.getElementById('rememberField');
var gameManager = new _GameManager__WEBPACK_IMPORTED_MODULE_0__["default"](board, score, fail);
gameManager.startGame();
var intervalIdForCountdown;
var clickCard = function clickCard(event) {
  var clickedCard = event.target.connectedCard;
  if (clickedCard) {
    gameManager.selectCard(clickedCard);
    if (!rememberFieldButton.hasAttribute('disabled')) {
      setButtonForFlipAllCardsIsDisabled();
      rememberFieldButton.removeEventListener('click', openCards);
    }
  }
};
board.addEventListener('click', clickCard);
startGameButton.addEventListener('click', function () {
  clearInterval(intervalIdForCountdown);
  gameManager.startGame();
  board.addEventListener('click', clickCard);
  setButtonForFlipAllCardsIsAbled();
});
var setButtonForFlipAllCardsIsDisabled = function setButtonForFlipAllCardsIsDisabled() {
  rememberFieldButton.innerHTML = 'Недоступно';
  rememberFieldButton.style.cursor = 'default';
  rememberFieldButton.disabled = 'true';
};
var setButtonForFlipAllCardsIsAbled = function setButtonForFlipAllCardsIsAbled() {
  rememberFieldButton.innerHTML = 'Запомнить';
  rememberFieldButton.style.cursor = 'pointer';
  rememberFieldButton.removeAttribute('disabled');
  rememberFieldButton.removeEventListener('click', closeCards);
  rememberFieldButton.addEventListener('click', openCards);
};
var flipAllCards = function flipAllCards() {
  for (var i = 0; i < board.childNodes.length; i++) {
    if (board.childNodes[i].connectedCard) {
      board.childNodes[i].connectedCard.flipCard();
    }
  }
};
var closeCards = function closeCards() {
  clearInterval(intervalIdForCountdown);
  flipAllCards();
  rememberFieldButton.removeEventListener('click', closeCards);
  setButtonForFlipAllCardsIsDisabled();
  board.addEventListener('click', clickCard);
};
var openCards = function openCards() {
  board.removeEventListener('click', clickCard);
  flipAllCards();
  rememberFieldButton.removeEventListener('click', openCards);
  rememberFieldButton.addEventListener('click', closeCards);
  var count = 10;
  rememberFieldButton.innerHTML = "\u0421\u043A\u0440\u044B\u0442\u044C ".concat(count.toFixed(2));
  var interval = 0.01;
  intervalIdForCountdown = setInterval(function () {
    count = count - interval;
    rememberFieldButton.innerHTML = "\u0421\u043A\u0440\u044B\u0442\u044C ".concat(count.toFixed(2));
    if (count <= 0) {
      closeCards();
    }
  }, interval * 1000);
};
rememberFieldButton.addEventListener('click', openCards);
}();
/******/ })()
;
//# sourceMappingURL=main.js.map