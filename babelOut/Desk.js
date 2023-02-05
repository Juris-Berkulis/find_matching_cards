"use strict";

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
      return new Card(card);
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