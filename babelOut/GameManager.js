"use strict";

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
      _classPrivateFieldSet(this, _desc, new Desc(_classPrivateFieldGet(this, _cardsCount)));
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
          new TheEndModal(_this3.attemptNumber, _this3.failCount, _this3.formatElapsedTime(_classPrivateFieldGet(_this3, _elapsedTime)));
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