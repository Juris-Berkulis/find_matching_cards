import * as styles from '../styles/style.scss';
import Desc from './Desk';
import TheEndModal from './TheEndModal';

export default class GameManager {
    #boardElement;
    #scoreElement;
    #failElement;
    #desc;
    #firstSelectedCard = null;
    #secondSelectedCard = null;
    #attemptNumber = 0;
    #failCount = 0;
    #cardsCount = 10;
    #cardsCountBtnsPanel = document.getElementById('cardsCountPanel');
    #elapsedTimeElement = document.getElementById('elapsedTime');
    #elapsedTime = 0;
    #startTimerBoolean = false;
    #intervalIdForElapsedTime;

    constructor (board, score, fail) {
        this.#boardElement = board;
        this.#scoreElement = score;
        this.#failElement = fail;
        this.findCardsCount();
        this.activeCardsCountBtnsPanel()
    };

    get attemptNumber () {
        return this.#attemptNumber
    };

    set attemptNumber (value) {
        this.#attemptNumber = value;
        this.#scoreElement.innerHTML = value;
    };

    get failCount () {
        return this.#failCount
    };

    set failCount (value) {
        this.#failCount = value;
        this.#failElement.innerHTML = value;
    };

    set cardsCount (value) {
        this.#cardsCount = value;
    }

    shuffleAndDeal () {
        this.#desc.shuffleCards();
        this.#desc.cards.forEach((card) => {
            if (this.#boardElement.append) {
                this.#boardElement.append(card.getDomElement);
            } else {
                this.#boardElement.appendChild(card.getDomElement);
            }
        });
    };

    formatElapsedTime (time) {
        return `${(time - time % 3600) / 3600 ? `${(time - time % 3600) / 3600}:` : ''}${((time - time % 60) - (time - time % 3600)) / 60 >= 10 ? ((time - time % 60) - (time - time % 3600)) / 60 : `0${((time - time % 60) - (time - time % 3600)) / 60}`}:${time % 60 >= 10 ? time % 60 : `0${time % 60}`}`
    }

    resetTimer () {
        clearInterval(this.#intervalIdForElapsedTime);
        this.#startTimerBoolean = false;
        this.#elapsedTime = 0;
        this.#elapsedTimeElement.innerHTML = this.formatElapsedTime(this.#elapsedTime);
    }

    startGame () {
        this.resetTimer();
        this.attemptNumber = 0;
        this.failCount = 0;
        this.#firstSelectedCard = null;
        this.#secondSelectedCard = null;
        this.#desc = new Desc(this.#cardsCount);
        this.#boardElement.innerHTML = '';
        this.shuffleAndDeal();
    };

    startElapsedTime () {
        this.#intervalIdForElapsedTime = setInterval(() => {
            this.#elapsedTime++;
            this.#elapsedTimeElement.innerHTML = this.formatElapsedTime(this.#elapsedTime);
        }, 1000);
    };

    selectCard (card) {
        if (!this.#startTimerBoolean) {
            this.startElapsedTime();

            this.#startTimerBoolean = true;
        }

        if (card === this.#firstSelectedCard) {
            return
        }

        card.flipCard();

        if (this.#firstSelectedCard && this.#secondSelectedCard) {
            this.#firstSelectedCard.flipCard();
            this.#secondSelectedCard.flipCard();

            this.#firstSelectedCard = null;
            this.#secondSelectedCard = null;
        }

        if (this.#firstSelectedCard === null) {
            this.attemptNumber++;
            this.#firstSelectedCard = card;
        } else if (this.#secondSelectedCard === null) {
            this.#secondSelectedCard = card;

            if (this.#firstSelectedCard.getFrontSideOfTheCard === card.getFrontSideOfTheCard) {
                this.#desc.removeCard(this.#firstSelectedCard);
                this.#desc.removeCard(this.#secondSelectedCard);

                this.#firstSelectedCard = null;
                this.#secondSelectedCard = null;
            } else {
                this.failCount++;
            }
        }

        if (!this.#desc.cards.length) {
            clearInterval(this.#intervalIdForElapsedTime);

            const timerId = setTimeout(() => {
                new TheEndModal(this.attemptNumber, this.failCount, this.formatElapsedTime(this.#elapsedTime));

                clearTimeout(timerId);
            }, 1000);
        }
    }

    findCardsCount () {
        if (this.#cardsCountBtnsPanel.children) {
            for (let i=0; i < this.#cardsCountBtnsPanel.children.length; i++) {
                if (+this.#cardsCountBtnsPanel.children[i].textContent === +this.#cardsCount) {
                    this.#cardsCountBtnsPanel.children[i].disabled = 'true';
                } else {
                    this.#cardsCountBtnsPanel.children[i].removeAttribute('disabled');
                }
            }
        }
    };
    
    selectCardsCount (event) {
        if (event.target.classList.contains(`${styles.cardsCountBtn}`)) {
            this.cardsCount = +event.target.textContent;
        }
    
        this.findCardsCount();
    };
    
    activeCardsCountBtnsPanel () {
        this.#cardsCountBtnsPanel.addEventListener('click', (event) => this.selectCardsCount(event));
    }
};
