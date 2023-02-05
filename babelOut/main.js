"use strict";

var board = document.getElementById('board');
var score = document.getElementById('attemptNumber');
var fail = document.getElementById('failCount');
var startGameButton = document.getElementById('startGame');
var rememberFieldButton = document.getElementById('rememberField');
var gameManager = new GameManager(board, score, fail);
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