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