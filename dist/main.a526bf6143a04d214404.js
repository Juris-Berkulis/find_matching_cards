(function(){"use strict";var __webpack_modules__={661:function(){eval('\n;// CONCATENATED MODULE: ./js/Card.js\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\nvar _bgColor = /*#__PURE__*/new WeakMap();\nvar _domElement = /*#__PURE__*/new WeakMap();\nvar _isShowCard = /*#__PURE__*/new WeakMap();\nvar Card = /*#__PURE__*/function () {\n  function Card(bgColor) {\n    _classCallCheck(this, Card);\n    _classPrivateFieldInitSpec(this, _bgColor, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _domElement, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _isShowCard, {\n      writable: true,\n      value: false\n    });\n    _classPrivateFieldSet(this, _bgColor, bgColor);\n    _classPrivateFieldSet(this, _domElement, document.createElement(\'div\'));\n    _classPrivateFieldGet(this, _domElement).classList.add(\'card\');\n    _classPrivateFieldGet(this, _domElement).style.backgroundColor = "".concat(this.getReverseSideOfTheCard);\n    _classPrivateFieldGet(this, _domElement).connectedCard = this;\n  }\n  _createClass(Card, [{\n    key: "getReverseSideOfTheCard",\n    get: function get() {\n      return \'#555555\';\n    }\n  }, {\n    key: "getFrontSideOfTheCard",\n    get: function get() {\n      return _classPrivateFieldGet(this, _bgColor);\n    }\n  }, {\n    key: "getDomElement",\n    get: function get() {\n      return _classPrivateFieldGet(this, _domElement);\n    }\n  }, {\n    key: "flipCard",\n    value: function flipCard() {\n      _classPrivateFieldSet(this, _isShowCard, !_classPrivateFieldGet(this, _isShowCard));\n      if (_classPrivateFieldGet(this, _isShowCard)) {\n        _classPrivateFieldGet(this, _domElement).style.backgroundColor = this.getFrontSideOfTheCard;\n        _classPrivateFieldGet(this, _domElement).classList.add(\'card_open\');\n      } else {\n        _classPrivateFieldGet(this, _domElement).style.backgroundColor = this.getReverseSideOfTheCard;\n        _classPrivateFieldGet(this, _domElement).classList.remove(\'card_open\');\n      }\n    }\n  }, {\n    key: "disconnectedFromDOM",\n    value: function disconnectedFromDOM() {\n      _classPrivateFieldGet(this, _domElement).connectedCard = null;\n    }\n  }]);\n  return Card;\n}();\n\n;\n;// CONCATENATED MODULE: ./js/Desk.js\nfunction Desk_typeof(obj) { "@babel/helpers - typeof"; return Desk_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Desk_typeof(obj); }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction Desk_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction Desk_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Desk_toPropertyKey(descriptor.key), descriptor); } }\nfunction Desk_createClass(Constructor, protoProps, staticProps) { if (protoProps) Desk_defineProperties(Constructor.prototype, protoProps); if (staticProps) Desk_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction Desk_toPropertyKey(arg) { var key = Desk_toPrimitive(arg, "string"); return Desk_typeof(key) === "symbol" ? key : String(key); }\nfunction Desk_toPrimitive(input, hint) { if (Desk_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Desk_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction Desk_classPrivateFieldInitSpec(obj, privateMap, value) { Desk_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction Desk_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\nfunction Desk_classPrivateFieldGet(receiver, privateMap) { var descriptor = Desk_classExtractFieldDescriptor(receiver, privateMap, "get"); return Desk_classApplyDescriptorGet(receiver, descriptor); }\nfunction Desk_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction Desk_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = Desk_classExtractFieldDescriptor(receiver, privateMap, "set"); Desk_classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction Desk_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\nfunction Desk_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\n\nvar _cardsCount = /*#__PURE__*/new WeakMap();\nvar _frontSidesOfTheCards = /*#__PURE__*/new WeakMap();\nvar Desc = /*#__PURE__*/function () {\n  //* Вариант 1:\n  // constructor () {\n  //     this.cards = [];\n  //     this.#frontSidesOfTheCards.forEach((frontSideOfTheCard) => {\n  //         this.cards.push(new Card(frontSideOfTheCard));\n  //         this.cards.push(new Card(frontSideOfTheCard));\n  //     });\n  // };\n\n  //* Вариант 2:\n  function Desc(cardsCount) {\n    Desk_classCallCheck(this, Desc);\n    Desk_classPrivateFieldInitSpec(this, _cardsCount, {\n      writable: true,\n      value: void 0\n    });\n    Desk_classPrivateFieldInitSpec(this, _frontSidesOfTheCards, {\n      writable: true,\n      value: [\'red\', \'yellow\', \'green\', \'cyan\', \'blue\', \'orange\', \'blueviolet\', \'azure\', \'brown\', \'pink\', \'lime\', \'deeppink\', \'burlywood\', \'olive\', \'saddlebrown\', \'midnightblue\', \'palegreen\']\n    });\n    this.buildListWithFrontSidesOfTheCards();\n    Desk_classPrivateFieldSet(this, _cardsCount, cardsCount);\n    Desk_classPrivateFieldGet(this, _frontSidesOfTheCards).length = Desk_classPrivateFieldGet(this, _cardsCount) / 2;\n    this.cards = [].concat(_toConsumableArray(Desk_classPrivateFieldGet(this, _frontSidesOfTheCards)), _toConsumableArray(Desk_classPrivateFieldGet(this, _frontSidesOfTheCards))).map(function (card) {\n      return new Card(card);\n    });\n  }\n  Desk_createClass(Desc, [{\n    key: "buildListWithFrontSidesOfTheCards",\n    value: function buildListWithFrontSidesOfTheCards() {\n      for (var i = 0; i < 3; i++) {\n        var red = (Math.random() * 255).toFixed(0);\n        var green = (Math.random() * 255).toFixed(0);\n        var blue = (Math.random() * 255).toFixed(0);\n        Desk_classPrivateFieldGet(this, _frontSidesOfTheCards).push("rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")"));\n      }\n    }\n  }, {\n    key: "shuffleCards",\n    value: function shuffleCards() {\n      this.cards.sort(function () {\n        return Math.random() - 0.5;\n      });\n    }\n  }, {\n    key: "removeCard",\n    value: function removeCard(card) {\n      var indexCard = this.cards.findIndex(function (item) {\n        return item.getFrontSideOfTheCard === card.getFrontSideOfTheCard;\n      });\n      if (indexCard !== -1) {\n        this.cards.splice(indexCard, 1);\n        card.disconnectedFromDOM();\n      }\n    }\n  }]);\n  return Desc;\n}();\n\n;\n;// CONCATENATED MODULE: ./js/TheEndModal.js\nfunction TheEndModal_typeof(obj) { "@babel/helpers - typeof"; return TheEndModal_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, TheEndModal_typeof(obj); }\nfunction TheEndModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction TheEndModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, TheEndModal_toPropertyKey(descriptor.key), descriptor); } }\nfunction TheEndModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) TheEndModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) TheEndModal_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction TheEndModal_toPropertyKey(arg) { var key = TheEndModal_toPrimitive(arg, "string"); return TheEndModal_typeof(key) === "symbol" ? key : String(key); }\nfunction TheEndModal_toPrimitive(input, hint) { if (TheEndModal_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (TheEndModal_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction TheEndModal_classPrivateFieldInitSpec(obj, privateMap, value) { TheEndModal_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction TheEndModal_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\nfunction TheEndModal_classPrivateFieldGet(receiver, privateMap) { var descriptor = TheEndModal_classExtractFieldDescriptor(receiver, privateMap, "get"); return TheEndModal_classApplyDescriptorGet(receiver, descriptor); }\nfunction TheEndModal_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction TheEndModal_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = TheEndModal_classExtractFieldDescriptor(receiver, privateMap, "set"); TheEndModal_classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction TheEndModal_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\nfunction TheEndModal_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\nvar _attemptNumber = /*#__PURE__*/new WeakMap();\nvar _failCount = /*#__PURE__*/new WeakMap();\nvar _elapsedTime = /*#__PURE__*/new WeakMap();\nvar _theEndElement = /*#__PURE__*/new WeakMap();\nvar _theEndModalElement = /*#__PURE__*/new WeakMap();\nvar _theEndModalAttemptNumberElement = /*#__PURE__*/new WeakMap();\nvar _theEndModalFailCountElement = /*#__PURE__*/new WeakMap();\nvar _theEndModalElapsedTimeElement = /*#__PURE__*/new WeakMap();\nvar _theEndModalCloseBtnElement = /*#__PURE__*/new WeakMap();\nvar TheEndModal = /*#__PURE__*/function () {\n  function TheEndModal(attemptNumber, failCount, elapsedTime) {\n    var _this = this;\n    TheEndModal_classCallCheck(this, TheEndModal);\n    TheEndModal_classPrivateFieldInitSpec(this, _attemptNumber, {\n      writable: true,\n      value: void 0\n    });\n    TheEndModal_classPrivateFieldInitSpec(this, _failCount, {\n      writable: true,\n      value: void 0\n    });\n    TheEndModal_classPrivateFieldInitSpec(this, _elapsedTime, {\n      writable: true,\n      value: void 0\n    });\n    TheEndModal_classPrivateFieldInitSpec(this, _theEndElement, {\n      writable: true,\n      value: document.getElementById(\'theEnd\')\n    });\n    TheEndModal_classPrivateFieldInitSpec(this, _theEndModalElement, {\n      writable: true,\n      value: document.getElementById(\'theEndModal\')\n    });\n    TheEndModal_classPrivateFieldInitSpec(this, _theEndModalAttemptNumberElement, {\n      writable: true,\n      value: document.getElementById(\'theEndModalAttemptNumber\')\n    });\n    TheEndModal_classPrivateFieldInitSpec(this, _theEndModalFailCountElement, {\n      writable: true,\n      value: document.getElementById(\'theEndModalFailCount\')\n    });\n    TheEndModal_classPrivateFieldInitSpec(this, _theEndModalElapsedTimeElement, {\n      writable: true,\n      value: document.getElementById(\'theEndModalElapsedTime\')\n    });\n    TheEndModal_classPrivateFieldInitSpec(this, _theEndModalCloseBtnElement, {\n      writable: true,\n      value: document.getElementById(\'theEndModalCloseBtn\')\n    });\n    TheEndModal_classPrivateFieldSet(this, _attemptNumber, attemptNumber);\n    TheEndModal_classPrivateFieldSet(this, _failCount, failCount);\n    TheEndModal_classPrivateFieldSet(this, _elapsedTime, elapsedTime);\n    this.openTheEndModal();\n    TheEndModal_classPrivateFieldGet(this, _theEndElement).onclick = function () {\n      return _this.closeTheEndModal(_this);\n    };\n    TheEndModal_classPrivateFieldGet(this, _theEndModalCloseBtnElement).onclick = function () {\n      return _this.closeTheEndModal(_this);\n    };\n    TheEndModal_classPrivateFieldGet(this, _theEndModalCloseBtnElement).onmouseover = function () {\n      return _this.changeBGColorForModalBtn(_this);\n    };\n  }\n  TheEndModal_createClass(TheEndModal, [{\n    key: "changeBGColorForModalBtn",\n    value: function changeBGColorForModalBtn() {\n      var red = (Math.random() * 255).toFixed(0);\n      var green = (Math.random() * 255).toFixed(0);\n      var blue = (Math.random() * 255).toFixed(0);\n      TheEndModal_classPrivateFieldGet(this, _theEndModalCloseBtnElement).style.backgroundColor = "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");\n      TheEndModal_classPrivateFieldGet(this, _theEndModalCloseBtnElement).style.color = "rgb(".concat(255 - red, ", ").concat(255 - green, ", ").concat(255 - blue, ")");\n    }\n  }, {\n    key: "openTheEndModal",\n    value: function openTheEndModal() {\n      TheEndModal_classPrivateFieldGet(this, _theEndElement).style.display = \'block\';\n      TheEndModal_classPrivateFieldGet(this, _theEndModalElement).style.display = \'block\';\n      TheEndModal_classPrivateFieldGet(this, _theEndModalAttemptNumberElement).innerHTML = "\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0445\\u043E\\u0434\\u043E\\u0432: ".concat(TheEndModal_classPrivateFieldGet(this, _attemptNumber));\n      TheEndModal_classPrivateFieldGet(this, _theEndModalFailCountElement).innerHTML = "\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u043E\\u0448\\u0438\\u0431\\u043E\\u043A: ".concat(TheEndModal_classPrivateFieldGet(this, _failCount));\n      TheEndModal_classPrivateFieldGet(this, _theEndModalElapsedTimeElement).innerHTML = "\\u0417\\u0430\\u0442\\u0440\\u0430\\u0447\\u0435\\u043D\\u043D\\u043E\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F: ".concat(TheEndModal_classPrivateFieldGet(this, _elapsedTime));\n    }\n  }, {\n    key: "closeTheEndModal",\n    value: function closeTheEndModal() {\n      TheEndModal_classPrivateFieldGet(this, _theEndElement).style.display = \'none\';\n      TheEndModal_classPrivateFieldGet(this, _theEndModalElement).style.display = \'none\';\n      TheEndModal_classPrivateFieldGet(this, _theEndModalAttemptNumberElement).innerHTML = \'\';\n      TheEndModal_classPrivateFieldGet(this, _theEndModalFailCountElement).innerHTML = \'\';\n      TheEndModal_classPrivateFieldGet(this, _theEndModalElapsedTimeElement).innerHTML = \'\';\n    }\n  }]);\n  return TheEndModal;\n}();\n\n;\n;// CONCATENATED MODULE: ./js/GameManager.js\nfunction GameManager_typeof(obj) { "@babel/helpers - typeof"; return GameManager_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, GameManager_typeof(obj); }\nfunction GameManager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction GameManager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, GameManager_toPropertyKey(descriptor.key), descriptor); } }\nfunction GameManager_createClass(Constructor, protoProps, staticProps) { if (protoProps) GameManager_defineProperties(Constructor.prototype, protoProps); if (staticProps) GameManager_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction GameManager_toPropertyKey(arg) { var key = GameManager_toPrimitive(arg, "string"); return GameManager_typeof(key) === "symbol" ? key : String(key); }\nfunction GameManager_toPrimitive(input, hint) { if (GameManager_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (GameManager_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction GameManager_classPrivateFieldInitSpec(obj, privateMap, value) { GameManager_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction GameManager_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\nfunction GameManager_classPrivateFieldGet(receiver, privateMap) { var descriptor = GameManager_classExtractFieldDescriptor(receiver, privateMap, "get"); return GameManager_classApplyDescriptorGet(receiver, descriptor); }\nfunction GameManager_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction GameManager_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = GameManager_classExtractFieldDescriptor(receiver, privateMap, "set"); GameManager_classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction GameManager_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\nfunction GameManager_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\n\n\nvar _boardElement = /*#__PURE__*/new WeakMap();\nvar _scoreElement = /*#__PURE__*/new WeakMap();\nvar _failElement = /*#__PURE__*/new WeakMap();\nvar _desc = /*#__PURE__*/new WeakMap();\nvar _firstSelectedCard = /*#__PURE__*/new WeakMap();\nvar _secondSelectedCard = /*#__PURE__*/new WeakMap();\nvar GameManager_attemptNumber = /*#__PURE__*/new WeakMap();\nvar GameManager_failCount = /*#__PURE__*/new WeakMap();\nvar GameManager_cardsCount = /*#__PURE__*/new WeakMap();\nvar _cardsCountBtnsPanel = /*#__PURE__*/new WeakMap();\nvar _elapsedTimeElement = /*#__PURE__*/new WeakMap();\nvar GameManager_elapsedTime = /*#__PURE__*/new WeakMap();\nvar _startTimerBoolean = /*#__PURE__*/new WeakMap();\nvar _intervalIdForElapsedTime = /*#__PURE__*/new WeakMap();\nvar GameManager = /*#__PURE__*/function () {\n  function GameManager(board, score, fail) {\n    GameManager_classCallCheck(this, GameManager);\n    GameManager_classPrivateFieldInitSpec(this, _boardElement, {\n      writable: true,\n      value: void 0\n    });\n    GameManager_classPrivateFieldInitSpec(this, _scoreElement, {\n      writable: true,\n      value: void 0\n    });\n    GameManager_classPrivateFieldInitSpec(this, _failElement, {\n      writable: true,\n      value: void 0\n    });\n    GameManager_classPrivateFieldInitSpec(this, _desc, {\n      writable: true,\n      value: void 0\n    });\n    GameManager_classPrivateFieldInitSpec(this, _firstSelectedCard, {\n      writable: true,\n      value: null\n    });\n    GameManager_classPrivateFieldInitSpec(this, _secondSelectedCard, {\n      writable: true,\n      value: null\n    });\n    GameManager_classPrivateFieldInitSpec(this, GameManager_attemptNumber, {\n      writable: true,\n      value: 0\n    });\n    GameManager_classPrivateFieldInitSpec(this, GameManager_failCount, {\n      writable: true,\n      value: 0\n    });\n    GameManager_classPrivateFieldInitSpec(this, GameManager_cardsCount, {\n      writable: true,\n      value: 20\n    });\n    GameManager_classPrivateFieldInitSpec(this, _cardsCountBtnsPanel, {\n      writable: true,\n      value: document.getElementById(\'cardsCountPanel\')\n    });\n    GameManager_classPrivateFieldInitSpec(this, _elapsedTimeElement, {\n      writable: true,\n      value: document.getElementById(\'elapsedTime\')\n    });\n    GameManager_classPrivateFieldInitSpec(this, GameManager_elapsedTime, {\n      writable: true,\n      value: 0\n    });\n    GameManager_classPrivateFieldInitSpec(this, _startTimerBoolean, {\n      writable: true,\n      value: false\n    });\n    GameManager_classPrivateFieldInitSpec(this, _intervalIdForElapsedTime, {\n      writable: true,\n      value: void 0\n    });\n    GameManager_classPrivateFieldSet(this, _boardElement, board);\n    GameManager_classPrivateFieldSet(this, _scoreElement, score);\n    GameManager_classPrivateFieldSet(this, _failElement, fail);\n    this.findCardsCount();\n    this.activeCardsCountBtnsPanel();\n  }\n  GameManager_createClass(GameManager, [{\n    key: "attemptNumber",\n    get: function get() {\n      return GameManager_classPrivateFieldGet(this, GameManager_attemptNumber);\n    },\n    set: function set(value) {\n      GameManager_classPrivateFieldSet(this, GameManager_attemptNumber, value);\n      GameManager_classPrivateFieldGet(this, _scoreElement).innerHTML = value;\n    }\n  }, {\n    key: "failCount",\n    get: function get() {\n      return GameManager_classPrivateFieldGet(this, GameManager_failCount);\n    },\n    set: function set(value) {\n      GameManager_classPrivateFieldSet(this, GameManager_failCount, value);\n      GameManager_classPrivateFieldGet(this, _failElement).innerHTML = value;\n    }\n  }, {\n    key: "cardsCount",\n    set: function set(value) {\n      return GameManager_classPrivateFieldSet(this, GameManager_cardsCount, value);\n    }\n  }, {\n    key: "shuffleAndDeal",\n    value: function shuffleAndDeal() {\n      var _this = this;\n      GameManager_classPrivateFieldGet(this, _desc).shuffleCards();\n      GameManager_classPrivateFieldGet(this, _desc).cards.forEach(function (card) {\n        GameManager_classPrivateFieldGet(_this, _boardElement).append(card.getDomElement);\n      });\n    }\n  }, {\n    key: "formatElapsedTime",\n    value: function formatElapsedTime(time) {\n      return "".concat((time - time % 3600) / 3600 ? "".concat((time - time % 3600) / 3600, ":") : \'\').concat((time - time % 60 - (time - time % 3600)) / 60 >= 10 ? (time - time % 60 - (time - time % 3600)) / 60 : "0".concat((time - time % 60 - (time - time % 3600)) / 60), ":").concat(time % 60 >= 10 ? time % 60 : "0".concat(time % 60));\n    }\n  }, {\n    key: "resetTimer",\n    value: function resetTimer() {\n      clearInterval(GameManager_classPrivateFieldGet(this, _intervalIdForElapsedTime));\n      GameManager_classPrivateFieldSet(this, _startTimerBoolean, false);\n      GameManager_classPrivateFieldSet(this, GameManager_elapsedTime, 0);\n      GameManager_classPrivateFieldGet(this, _elapsedTimeElement).innerHTML = this.formatElapsedTime(GameManager_classPrivateFieldGet(this, GameManager_elapsedTime));\n    }\n  }, {\n    key: "startGame",\n    value: function startGame() {\n      this.resetTimer();\n      this.attemptNumber = 0;\n      this.failCount = 0;\n      GameManager_classPrivateFieldSet(this, _firstSelectedCard, null);\n      GameManager_classPrivateFieldSet(this, _secondSelectedCard, null);\n      GameManager_classPrivateFieldSet(this, _desc, new Desc(GameManager_classPrivateFieldGet(this, GameManager_cardsCount)));\n      GameManager_classPrivateFieldGet(this, _boardElement).innerHTML = \'\';\n      this.shuffleAndDeal();\n    }\n  }, {\n    key: "startElapsedTime",\n    value: function startElapsedTime() {\n      var _this2 = this;\n      GameManager_classPrivateFieldSet(this, _intervalIdForElapsedTime, setInterval(function () {\n        var _this$elapsedTime, _this$elapsedTime2;\n        GameManager_classPrivateFieldSet(_this2, GameManager_elapsedTime, (_this$elapsedTime = GameManager_classPrivateFieldGet(_this2, GameManager_elapsedTime), _this$elapsedTime2 = _this$elapsedTime++, _this$elapsedTime)), _this$elapsedTime2;\n        GameManager_classPrivateFieldGet(_this2, _elapsedTimeElement).innerHTML = _this2.formatElapsedTime(GameManager_classPrivateFieldGet(_this2, GameManager_elapsedTime));\n      }, 1000));\n    }\n  }, {\n    key: "selectCard",\n    value: function selectCard(card) {\n      var _this3 = this;\n      if (!GameManager_classPrivateFieldGet(this, _startTimerBoolean)) {\n        this.startElapsedTime();\n        GameManager_classPrivateFieldSet(this, _startTimerBoolean, true);\n      }\n      if (card === GameManager_classPrivateFieldGet(this, _firstSelectedCard)) {\n        return;\n      }\n      card.flipCard();\n      if (GameManager_classPrivateFieldGet(this, _firstSelectedCard) && GameManager_classPrivateFieldGet(this, _secondSelectedCard)) {\n        GameManager_classPrivateFieldGet(this, _firstSelectedCard).flipCard();\n        GameManager_classPrivateFieldGet(this, _secondSelectedCard).flipCard();\n        GameManager_classPrivateFieldSet(this, _firstSelectedCard, null);\n        GameManager_classPrivateFieldSet(this, _secondSelectedCard, null);\n      }\n      if (GameManager_classPrivateFieldGet(this, _firstSelectedCard) === null) {\n        this.attemptNumber++;\n        GameManager_classPrivateFieldSet(this, _firstSelectedCard, card);\n      } else if (GameManager_classPrivateFieldGet(this, _secondSelectedCard) === null) {\n        GameManager_classPrivateFieldSet(this, _secondSelectedCard, card);\n        if (GameManager_classPrivateFieldGet(this, _firstSelectedCard).getFrontSideOfTheCard === card.getFrontSideOfTheCard) {\n          GameManager_classPrivateFieldGet(this, _desc).removeCard(GameManager_classPrivateFieldGet(this, _firstSelectedCard));\n          GameManager_classPrivateFieldGet(this, _desc).removeCard(GameManager_classPrivateFieldGet(this, _secondSelectedCard));\n          GameManager_classPrivateFieldSet(this, _firstSelectedCard, null);\n          GameManager_classPrivateFieldSet(this, _secondSelectedCard, null);\n        } else {\n          this.failCount++;\n        }\n      }\n      if (!GameManager_classPrivateFieldGet(this, _desc).cards.length) {\n        clearInterval(GameManager_classPrivateFieldGet(this, _intervalIdForElapsedTime));\n        var timerId = setTimeout(function () {\n          new TheEndModal(_this3.attemptNumber, _this3.failCount, _this3.formatElapsedTime(GameManager_classPrivateFieldGet(_this3, GameManager_elapsedTime)));\n          clearTimeout(timerId);\n        }, 1000);\n      }\n    }\n  }, {\n    key: "findCardsCount",\n    value: function findCardsCount() {\n      if (GameManager_classPrivateFieldGet(this, _cardsCountBtnsPanel).children) {\n        for (var i = 0; i < GameManager_classPrivateFieldGet(this, _cardsCountBtnsPanel).children.length; i++) {\n          if (+GameManager_classPrivateFieldGet(this, _cardsCountBtnsPanel).children[i].textContent === +GameManager_classPrivateFieldGet(this, GameManager_cardsCount)) {\n            GameManager_classPrivateFieldGet(this, _cardsCountBtnsPanel).children[i].disabled = \'true\';\n          } else {\n            GameManager_classPrivateFieldGet(this, _cardsCountBtnsPanel).children[i].removeAttribute(\'disabled\');\n          }\n        }\n      }\n    }\n  }, {\n    key: "selectCardsCount",\n    value: function selectCardsCount(event) {\n      if (event.target.classList.contains(\'cardsCountBtn\')) {\n        this.cardsCount = +event.target.textContent;\n      }\n      this.findCardsCount();\n    }\n  }, {\n    key: "activeCardsCountBtnsPanel",\n    value: function activeCardsCountBtnsPanel() {\n      var _this4 = this;\n      GameManager_classPrivateFieldGet(this, _cardsCountBtnsPanel).addEventListener(\'click\', function (event) {\n        return _this4.selectCardsCount(event);\n      });\n    }\n  }]);\n  return GameManager;\n}();\n\n;\n;// CONCATENATED MODULE: ./js/main.js\n\n\nvar board = document.getElementById(\'board\');\nvar score = document.getElementById(\'attemptNumber\');\nvar fail = document.getElementById(\'failCount\');\nvar startGameButton = document.getElementById(\'startGame\');\nvar rememberFieldButton = document.getElementById(\'rememberField\');\nvar gameManager = new GameManager(board, score, fail);\ngameManager.startGame();\nvar intervalIdForCountdown;\nvar clickCard = function clickCard(event) {\n  var clickedCard = event.target.connectedCard;\n  if (clickedCard) {\n    gameManager.selectCard(clickedCard);\n    if (!rememberFieldButton.hasAttribute(\'disabled\')) {\n      setButtonForFlipAllCardsIsDisabled();\n      rememberFieldButton.removeEventListener(\'click\', openCards);\n    }\n  }\n};\nboard.addEventListener(\'click\', clickCard);\nstartGameButton.addEventListener(\'click\', function () {\n  clearInterval(intervalIdForCountdown);\n  gameManager.startGame();\n  board.addEventListener(\'click\', clickCard);\n  setButtonForFlipAllCardsIsAbled();\n});\nvar setButtonForFlipAllCardsIsDisabled = function setButtonForFlipAllCardsIsDisabled() {\n  rememberFieldButton.innerHTML = \'Недоступно\';\n  rememberFieldButton.style.cursor = \'default\';\n  rememberFieldButton.disabled = \'true\';\n};\nvar setButtonForFlipAllCardsIsAbled = function setButtonForFlipAllCardsIsAbled() {\n  rememberFieldButton.innerHTML = \'Запомнить\';\n  rememberFieldButton.style.cursor = \'pointer\';\n  rememberFieldButton.removeAttribute(\'disabled\');\n  rememberFieldButton.removeEventListener(\'click\', closeCards);\n  rememberFieldButton.addEventListener(\'click\', openCards);\n};\nvar flipAllCards = function flipAllCards() {\n  for (var i = 0; i < board.childNodes.length; i++) {\n    if (board.childNodes[i].connectedCard) {\n      board.childNodes[i].connectedCard.flipCard();\n    }\n  }\n};\nvar closeCards = function closeCards() {\n  clearInterval(intervalIdForCountdown);\n  flipAllCards();\n  rememberFieldButton.removeEventListener(\'click\', closeCards);\n  setButtonForFlipAllCardsIsDisabled();\n  board.addEventListener(\'click\', clickCard);\n};\nvar openCards = function openCards() {\n  board.removeEventListener(\'click\', clickCard);\n  flipAllCards();\n  rememberFieldButton.removeEventListener(\'click\', openCards);\n  rememberFieldButton.addEventListener(\'click\', closeCards);\n  var count = 10;\n  rememberFieldButton.innerHTML = "\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C ".concat(count.toFixed(2));\n  var interval = 0.01;\n  intervalIdForCountdown = setInterval(function () {\n    count = count - interval;\n    rememberFieldButton.innerHTML = "\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C ".concat(count.toFixed(2));\n    if (count <= 0) {\n      closeCards();\n    }\n  }, interval * 1000);\n};\nrememberFieldButton.addEventListener(\'click\', openCards);\n\n//# sourceURL=webpack:///./js/main.js_+_4_modules?')}},__webpack_exports__={};__webpack_modules__[661]()})();