/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ }),

/***/ "./js/Card.js":
/*!********************!*\
  !*** ./js/Card.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\nclass Card {\r\n    #bgColor;\r\n    #domElement;\r\n    #isShowCard = false;\r\n\r\n    constructor (bgColor) {\r\n        this.#bgColor = bgColor;\r\n\r\n        this.#domElement = document.createElement('div');\r\n        this.#domElement.classList.add('card');\r\n        this.#domElement.style.backgroundColor = `${this.getReverseSideOfTheCard}`;\r\n        this.#domElement.connectedCard = this;\r\n    };\r\n\r\n    get getReverseSideOfTheCard () {\r\n        return '#555555'\r\n    };\r\n\r\n    get getFrontSideOfTheCard () {\r\n        return this.#bgColor\r\n    };\r\n\r\n    get getDomElement () {\r\n        return this.#domElement\r\n    };\r\n\r\n    flipCard () {\r\n        this.#isShowCard = !this.#isShowCard;\r\n\r\n        if (this.#isShowCard) {\r\n            this.#domElement.style.backgroundColor = this.getFrontSideOfTheCard;\r\n            this.#domElement.classList.add('card_open');\r\n        } else {\r\n            this.#domElement.style.backgroundColor = this.getReverseSideOfTheCard;\r\n            this.#domElement.classList.remove('card_open');\r\n        }\r\n    };\r\n\r\n    disconnectedFromDOM () {\r\n        this.#domElement.connectedCard = null;\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./js/Card.js?");

/***/ }),

/***/ "./js/Desk.js":
/*!********************!*\
  !*** ./js/Desk.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Desc; }\n/* harmony export */ });\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./js/Card.js\");\n\r\n\r\nclass Desc {\r\n    #cardsCount;\r\n    #frontSidesOfTheCards = [\r\n        'red', \r\n        'yellow', \r\n        'green', \r\n        'cyan', \r\n        'blue', \r\n        'orange', \r\n        'blueviolet', \r\n        'azure', \r\n        'brown', \r\n        'pink',\r\n        'lime',\r\n        'deeppink',\r\n        'burlywood',\r\n        'olive',\r\n        'saddlebrown',\r\n        'midnightblue',\r\n        'palegreen',\r\n    ];\r\n\r\n    //* Вариант 1:\r\n    // constructor () {\r\n    //     this.cards = [];\r\n    //     this.#frontSidesOfTheCards.forEach((frontSideOfTheCard) => {\r\n    //         this.cards.push(new Card(frontSideOfTheCard));\r\n    //         this.cards.push(new Card(frontSideOfTheCard));\r\n    //     });\r\n    // };\r\n\r\n    //* Вариант 2:\r\n    constructor (cardsCount) {\r\n        this.buildListWithFrontSidesOfTheCards();\r\n        this.#cardsCount = cardsCount;\r\n        this.#frontSidesOfTheCards.length = this.#cardsCount / 2;\r\n        this.cards = [\r\n            ...this.#frontSidesOfTheCards, \r\n            ...this.#frontSidesOfTheCards,\r\n        ].map((card) => {\r\n            return new _Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](card)\r\n        });\r\n    };\r\n\r\n    buildListWithFrontSidesOfTheCards () {\r\n        for (let i=0; i < 3; i++) {\r\n            const red = (Math.random() * 255).toFixed(0);\r\n            const green = (Math.random() * 255).toFixed(0);\r\n            const blue = (Math.random() * 255).toFixed(0);\r\n            this.#frontSidesOfTheCards.push(`rgb(${red}, ${green}, ${blue})`);\r\n        }\r\n    }\r\n\r\n    shuffleCards () {\r\n        this.cards.sort(() => Math.random() - 0.5);\r\n    };\r\n\r\n    removeCard (card) {\r\n        const indexCard = this.cards.findIndex(item => item.getFrontSideOfTheCard === card.getFrontSideOfTheCard);\r\n\r\n        if (indexCard !== -1) {\r\n            this.cards.splice(indexCard, 1);\r\n\r\n            card.disconnectedFromDOM();\r\n        }\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./js/Desk.js?");

/***/ }),

/***/ "./js/GameManager.js":
/*!***************************!*\
  !*** ./js/GameManager.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameManager; }\n/* harmony export */ });\n/* harmony import */ var _Desk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Desk */ \"./js/Desk.js\");\n/* harmony import */ var _TheEndModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheEndModal */ \"./js/TheEndModal.js\");\n\r\n\r\n\r\nclass GameManager {\r\n    #boardElement;\r\n    #scoreElement;\r\n    #failElement;\r\n    #desc;\r\n    #firstSelectedCard = null;\r\n    #secondSelectedCard = null;\r\n    #attemptNumber = 0;\r\n    #failCount = 0;\r\n    #cardsCount = 20;\r\n    #cardsCountBtnsPanel = document.getElementById('cardsCountPanel');\r\n    #elapsedTimeElement = document.getElementById('elapsedTime');\r\n    #elapsedTime = 0;\r\n    #startTimerBoolean = false;\r\n    #intervalIdForElapsedTime;\r\n\r\n    constructor (board, score, fail) {\r\n        this.#boardElement = board;\r\n        this.#scoreElement = score;\r\n        this.#failElement = fail;\r\n        this.findCardsCount();\r\n        this.activeCardsCountBtnsPanel()\r\n    };\r\n\r\n    get attemptNumber () {\r\n        return this.#attemptNumber\r\n    };\r\n\r\n    set attemptNumber (value) {\r\n        this.#attemptNumber = value;\r\n        this.#scoreElement.innerHTML = value;\r\n    };\r\n\r\n    get failCount () {\r\n        return this.#failCount\r\n    };\r\n\r\n    set failCount (value) {\r\n        this.#failCount = value;\r\n        this.#failElement.innerHTML = value;\r\n    };\r\n\r\n    set cardsCount (value) {\r\n        return this.#cardsCount = value;\r\n    }\r\n\r\n    shuffleAndDeal () {\r\n        this.#desc.shuffleCards();\r\n        this.#desc.cards.forEach((card) => {\r\n            this.#boardElement.append(card.getDomElement);\r\n        });\r\n    };\r\n\r\n    formatElapsedTime (time) {\r\n        return `${(time - time % 3600) / 3600 ? `${(time - time % 3600) / 3600}:` : ''}${((time - time % 60) - (time - time % 3600)) / 60 >= 10 ? ((time - time % 60) - (time - time % 3600)) / 60 : `0${((time - time % 60) - (time - time % 3600)) / 60}`}:${time % 60 >= 10 ? time % 60 : `0${time % 60}`}`\r\n    }\r\n\r\n    resetTimer () {\r\n        clearInterval(this.#intervalIdForElapsedTime);\r\n        this.#startTimerBoolean = false;\r\n        this.#elapsedTime = 0;\r\n        this.#elapsedTimeElement.innerHTML = this.formatElapsedTime(this.#elapsedTime);\r\n    }\r\n\r\n    startGame () {\r\n        this.resetTimer();\r\n        this.attemptNumber = 0;\r\n        this.failCount = 0;\r\n        this.#firstSelectedCard = null;\r\n        this.#secondSelectedCard = null;\r\n        this.#desc = new _Desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.#cardsCount);\r\n        this.#boardElement.innerHTML = '';\r\n        this.shuffleAndDeal();\r\n    };\r\n\r\n    startElapsedTime () {\r\n        this.#intervalIdForElapsedTime = setInterval(() => {\r\n            this.#elapsedTime++;\r\n            this.#elapsedTimeElement.innerHTML = this.formatElapsedTime(this.#elapsedTime);\r\n        }, 1000);\r\n    };\r\n\r\n    selectCard (card) {\r\n        if (!this.#startTimerBoolean) {\r\n            this.startElapsedTime();\r\n\r\n            this.#startTimerBoolean = true;\r\n        }\r\n\r\n        if (card === this.#firstSelectedCard) {\r\n            return\r\n        }\r\n\r\n        card.flipCard();\r\n\r\n        if (this.#firstSelectedCard && this.#secondSelectedCard) {\r\n            this.#firstSelectedCard.flipCard();\r\n            this.#secondSelectedCard.flipCard();\r\n\r\n            this.#firstSelectedCard = null;\r\n            this.#secondSelectedCard = null;\r\n        }\r\n\r\n        if (this.#firstSelectedCard === null) {\r\n            this.attemptNumber++;\r\n            this.#firstSelectedCard = card;\r\n        } else if (this.#secondSelectedCard === null) {\r\n            this.#secondSelectedCard = card;\r\n\r\n            if (this.#firstSelectedCard.getFrontSideOfTheCard === card.getFrontSideOfTheCard) {\r\n                this.#desc.removeCard(this.#firstSelectedCard);\r\n                this.#desc.removeCard(this.#secondSelectedCard);\r\n\r\n                this.#firstSelectedCard = null;\r\n                this.#secondSelectedCard = null;\r\n            } else {\r\n                this.failCount++;\r\n            }\r\n        }\r\n\r\n        if (!this.#desc.cards.length) {\r\n            clearInterval(this.#intervalIdForElapsedTime);\r\n\r\n            const timerId = setTimeout(() => {\r\n                new _TheEndModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.attemptNumber, this.failCount, this.formatElapsedTime(this.#elapsedTime));\r\n\r\n                clearTimeout(timerId);\r\n            }, 1000);\r\n        }\r\n    }\r\n\r\n    findCardsCount () {\r\n        if (this.#cardsCountBtnsPanel.children) {\r\n            for (let i=0; i < this.#cardsCountBtnsPanel.children.length; i++) {\r\n                if (+this.#cardsCountBtnsPanel.children[i].textContent === +this.#cardsCount) {\r\n                    this.#cardsCountBtnsPanel.children[i].disabled = 'true';\r\n                } else {\r\n                    this.#cardsCountBtnsPanel.children[i].removeAttribute('disabled');\r\n                }\r\n            }\r\n        }\r\n    };\r\n    \r\n    selectCardsCount (event) {\r\n        if (event.target.classList.contains('cardsCountBtn')) {\r\n            this.cardsCount = +event.target.textContent;\r\n        }\r\n    \r\n        this.findCardsCount();\r\n    };\r\n    \r\n    activeCardsCountBtnsPanel () {\r\n        this.#cardsCountBtnsPanel.addEventListener('click', (event) => this.selectCardsCount(event));\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./js/GameManager.js?");

/***/ }),

/***/ "./js/TheEndModal.js":
/*!***************************!*\
  !*** ./js/TheEndModal.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TheEndModal; }\n/* harmony export */ });\nclass TheEndModal {\r\n    #attemptNumber;\r\n    #failCount;\r\n    #elapsedTime;\r\n    #theEndElement = document.getElementById('theEnd');\r\n    #theEndModalElement = document.getElementById('theEndModal');\r\n    #theEndModalAttemptNumberElement = document.getElementById('theEndModalAttemptNumber');\r\n    #theEndModalFailCountElement = document.getElementById('theEndModalFailCount');\r\n    #theEndModalElapsedTimeElement = document.getElementById('theEndModalElapsedTime');\r\n    #theEndModalCloseBtnElement = document.getElementById('theEndModalCloseBtn');\r\n\r\n    constructor (attemptNumber, failCount, elapsedTime) {\r\n        this.#attemptNumber = attemptNumber;\r\n        this.#failCount = failCount;\r\n        this.#elapsedTime = elapsedTime;\r\n        this.openTheEndModal();\r\n        this.#theEndElement.onclick = () => this.closeTheEndModal(this);\r\n        this.#theEndModalCloseBtnElement.onclick = () => this.closeTheEndModal(this);\r\n        this.#theEndModalCloseBtnElement.onmouseover = () => this.changeBGColorForModalBtn(this);\r\n    }\r\n\r\n    changeBGColorForModalBtn () {\r\n        const red = (Math.random() * 255).toFixed(0);\r\n        const green = (Math.random() * 255).toFixed(0);\r\n        const blue = (Math.random() * 255).toFixed(0);\r\n\r\n        this.#theEndModalCloseBtnElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;\r\n        this.#theEndModalCloseBtnElement.style.color = `rgb(${255 - red}, ${255 - green}, ${255 - blue})`;\r\n    }\r\n\r\n    openTheEndModal () {\r\n        this.#theEndElement.style.display = 'block';\r\n        this.#theEndModalElement.style.display = 'block';\r\n        this.#theEndModalAttemptNumberElement.innerHTML = `Количество ходов: ${this.#attemptNumber}`;\r\n        this.#theEndModalFailCountElement.innerHTML = `Количество ошибок: ${this.#failCount}`;\r\n        this.#theEndModalElapsedTimeElement.innerHTML = `Затраченное время: ${this.#elapsedTime}`;\r\n    }\r\n\r\n    closeTheEndModal () {\r\n        this.#theEndElement.style.display = 'none';\r\n        this.#theEndModalElement.style.display = 'none';\r\n        this.#theEndModalAttemptNumberElement.innerHTML = '';\r\n        this.#theEndModalFailCountElement.innerHTML = '';\r\n        this.#theEndModalElapsedTimeElement.innerHTML = '';\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./js/TheEndModal.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameManager */ \"./js/GameManager.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n\r\n\r\n\r\nconst board = document.getElementById('board');\r\nconst score = document.getElementById('attemptNumber');\r\nconst fail = document.getElementById('failCount');\r\nconst startGameButton = document.getElementById('startGame');\r\nconst rememberFieldButton = document.getElementById('rememberField');\r\n\r\nconst gameManager = new _GameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"](board, score, fail);\r\ngameManager.startGame();\r\n\r\nlet intervalIdForCountdown;\r\n\r\nconst clickCard = (event) => {\r\n    const clickedCard = event.target.connectedCard;\r\n\r\n    if (clickedCard) {\r\n        gameManager.selectCard(clickedCard);\r\n\r\n        if (!rememberFieldButton.hasAttribute('disabled')) {\r\n            setButtonForFlipAllCardsIsDisabled();\r\n\r\n            rememberFieldButton.removeEventListener('click', openCards);\r\n        }\r\n    }\r\n};\r\n\r\nboard.addEventListener('click', clickCard);\r\n\r\nstartGameButton.addEventListener('click', () => {\r\n    clearInterval(intervalIdForCountdown);\r\n\r\n    gameManager.startGame();\r\n\r\n    board.addEventListener('click', clickCard);\r\n    setButtonForFlipAllCardsIsAbled();\r\n});\r\n\r\nconst setButtonForFlipAllCardsIsDisabled = () => {\r\n    rememberFieldButton.innerHTML = 'Недоступно';\r\n    rememberFieldButton.style.cursor = 'default';\r\n    rememberFieldButton.disabled = 'true';\r\n};\r\n\r\nconst setButtonForFlipAllCardsIsAbled = () => {\r\n    rememberFieldButton.innerHTML = 'Запомнить';\r\n    rememberFieldButton.style.cursor = 'pointer';\r\n    rememberFieldButton.removeAttribute('disabled');\r\n\r\n    rememberFieldButton.removeEventListener('click', closeCards);\r\n    rememberFieldButton.addEventListener('click', openCards);\r\n};\r\n\r\nconst flipAllCards = () => {\r\n    for (let i=0; i < board.childNodes.length; i++) {\r\n        if (board.childNodes[i].connectedCard) {\r\n            board.childNodes[i].connectedCard.flipCard();\r\n        }\r\n    }\r\n};\r\n\r\nconst closeCards = () => {\r\n    clearInterval(intervalIdForCountdown);\r\n\r\n    flipAllCards();\r\n\r\n    rememberFieldButton.removeEventListener('click', closeCards);\r\n\r\n    setButtonForFlipAllCardsIsDisabled();\r\n\r\n    board.addEventListener('click', clickCard);\r\n};\r\n\r\nconst openCards = () => {\r\n    board.removeEventListener('click', clickCard);\r\n\r\n    flipAllCards();\r\n\r\n    rememberFieldButton.removeEventListener('click', openCards);\r\n    rememberFieldButton.addEventListener('click', closeCards);\r\n\r\n    let count = 10;\r\n    rememberFieldButton.innerHTML = `Скрыть ${count.toFixed(2)}`;\r\n\r\n    const interval = 0.01;\r\n    intervalIdForCountdown = setInterval(() => {\r\n        count = count - interval;\r\n        rememberFieldButton.innerHTML = `Скрыть ${count.toFixed(2)}`;\r\n\r\n        if (count <= 0) {\r\n            closeCards();\r\n        }\r\n    }, interval * 1000);\r\n};\r\n\r\nrememberFieldButton.addEventListener('click', openCards);\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;