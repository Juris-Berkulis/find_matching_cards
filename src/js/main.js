import InitialHtml from './InitialHtml';
import GameManager from './GameManager';
import * as serviceWorkerRegistration from '../ServiceWorker/serviceWorkerRegistration';
import {pwaStatus} from '../ServiceWorker/pwaInstall';
import GoogleAnalytics from '../analytics/GoogleAnalitics';

new InitialHtml();
new GoogleAnalytics();

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

if (process.env.NODE_ENV === 'production') {
    //* Register a service-worker:
    serviceWorkerRegistration.register();
} else {
    //* Do not register a service-worker:
    serviceWorkerRegistration.unregister();
}

pwaStatus();
