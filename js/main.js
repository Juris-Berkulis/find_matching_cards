const board = document.getElementById('board');
const score = document.getElementById('attemptNumber');
const fail = document.getElementById('failCount');
const startGameButton = document.getElementById('startGame');

const gameManager = new GameManager(board, score, fail);
gameManager.startGame();

board.addEventListener('click', (event) => {
    const clickedCard = event.target.connectedCard;

    if (clickedCard) {
        gameManager.selectCard(clickedCard);
    }
});

startGameButton.addEventListener('click', () => {
    gameManager.startGame();
});
