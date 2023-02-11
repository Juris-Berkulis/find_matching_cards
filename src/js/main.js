import * as styles from '../styles/style.scss'
import GameManager from './GameManager';

const app = document.getElementById('app');
app.innerHTML = `
<div class="${styles.main}">
<div class="${styles.controlPanel}" id="controlPanel">
    <div id="cardsCountPanel" class="${styles.cardsCountPanel}">
        <button class="${styles.cardsCountBtn}">10</button>
        <button class="${styles.cardsCountBtn}">20</button>
        <button class="${styles.cardsCountBtn}">30</button>
        <button class="${styles.cardsCountBtn}">40</button>
    </div>
    <button class="${styles.startGameBtn}" id="startGame">Новая игра</button>
    <button class="${styles.startGameBtn}" id="rememberField">Запомнить</button>
    <p>
        <span>Попытка: </span>
        <span id="attemptNumber"></span>
    </p>
    <p>
        <span>Ошибки: </span>
        <span id="failCount"></span>
    </p>
    <p id="elapsedTime"></p>
</div>
<div class="${styles.board}" id="board"></div>
<div class="${styles.theEnd}" id="theEnd">
    <div class="${styles.theEndCross}">
        <div class="${styles.theEndCrossLine} ${styles.theEndCrossLine1}"></div>
        <div class="${styles.theEndCrossLine} ${styles.theEndCrossLine2}"></div>
    </div>
</div>
<div class="${styles.theEndModal}" id="theEndModal">
    <p class="${styles.theEndModalParagraph}">Вы победили!</p>
    <p class="${styles.theEndModalParagraph}" id="theEndModalAttemptNumber"></p>
    <p class="${styles.theEndModalParagraph}" id="theEndModalFailCount"></p>
    <p class="${styles.theEndModalParagraph}" id="theEndModalElapsedTime"></p>
    <div class="${styles.theEndModalCloseBtnWrapper}">
        <button class="${styles.theEndModalCloseBtn}" id="theEndModalCloseBtn">Ok</button>
    </div>
</div>
</div>
`;

const board = document.getElementById('board');
const score = document.getElementById('attemptNumber');
const fail = document.getElementById('failCount');
const startGameButton = document.getElementById('startGame');
const rememberFieldButton = document.getElementById('rememberField');

const gameManager = new GameManager(board, score, fail);
gameManager.startGame();

let intervalIdForCountdown;

const clickCard = (event) => {
    const clickedCard = event.target.connectedCard;

    if (clickedCard) {
        gameManager.selectCard(clickedCard);

        if (!rememberFieldButton.hasAttribute('disabled')) {
            setButtonForFlipAllCardsIsDisabled();

            rememberFieldButton.removeEventListener('click', openCards);
        }
    }
};

board.addEventListener('click', clickCard);

startGameButton.addEventListener('click', () => {
    clearInterval(intervalIdForCountdown);

    gameManager.startGame();

    board.addEventListener('click', clickCard);
    setButtonForFlipAllCardsIsAbled();
});

const setButtonForFlipAllCardsIsDisabled = () => {
    rememberFieldButton.innerHTML = 'Недоступно';
    rememberFieldButton.style.cursor = 'default';
    rememberFieldButton.disabled = 'true';
};

const setButtonForFlipAllCardsIsAbled = () => {
    rememberFieldButton.innerHTML = 'Запомнить';
    rememberFieldButton.style.cursor = 'pointer';
    rememberFieldButton.removeAttribute('disabled');

    rememberFieldButton.removeEventListener('click', closeCards);
    rememberFieldButton.addEventListener('click', openCards);
};

const flipAllCards = () => {
    for (let i=0; i < board.childNodes.length; i++) {
        if (board.childNodes[i].connectedCard) {
            board.childNodes[i].connectedCard.flipCard();
        }
    }
};

const closeCards = () => {
    clearInterval(intervalIdForCountdown);

    flipAllCards();

    rememberFieldButton.removeEventListener('click', closeCards);

    setButtonForFlipAllCardsIsDisabled();

    board.addEventListener('click', clickCard);
};

const openCards = () => {
    board.removeEventListener('click', clickCard);

    flipAllCards();

    rememberFieldButton.removeEventListener('click', openCards);
    rememberFieldButton.addEventListener('click', closeCards);

    let count = 10;
    rememberFieldButton.innerHTML = `Скрыть ${count.toFixed(2)}`;

    const interval = 0.01;
    intervalIdForCountdown = setInterval(() => {
        count = count - interval;
        rememberFieldButton.innerHTML = `Скрыть ${count.toFixed(2)}`;

        if (count <= 0) {
            closeCards();
        }
    }, interval * 1000);
};

rememberFieldButton.addEventListener('click', openCards);
