const board = document.getElementById('board');
const score = document.getElementById('attemptNumber');
const fail = document.getElementById('failCount');
const startGameButton = document.getElementById('startGame');
const rememberFieldButton = document.getElementById('rememberField');

const gameManager = new GameManager(board, score, fail);
gameManager.startGame();

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

    rememberFieldButton.innerHTML = 'Скрыть';
};

rememberFieldButton.addEventListener('click', openCards);
