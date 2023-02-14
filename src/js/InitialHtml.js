import * as styles from '../styles/style.scss';

export default class InitialHtml {
    #html = `
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
            <div class="${styles.theEndModalBtnWrapper}" id="theEndModalBtnWrapper">
                <button class="${styles.theEndModalInstallAppBtn} ${styles.theEndModalBtn}" id="theEndModalInstallAppBtn" title="Установить приложение">
                    <span class="${styles.theEndModalInstallSign} ${styles.theEndModalSign}">&#11015;</span>
                </button>
                <button class="${styles.theEndModalBtn}" id="theEndModalCloseBtn">
                    <span class="${styles.theEndModalSign}">Ok</span>
                </button>
            </div>
        </div>
        </div>
    `;

    constructor () {
        this.insertHtmlInApp();
    }

    insertHtmlInApp () {
        const app = document.getElementById('app');
        app.innerHTML = this.#html;
    }
};
