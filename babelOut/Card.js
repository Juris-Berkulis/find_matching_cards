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