class GameManager {
    #boardElement;
    #scoreElement;
    #failElement;
    #desc;
    #firstSelectedCard = null;
    #secondSelectedCard = null;
    #attemptNumber = 0;
    #failCount = 0;
    #cardsCount = 20;
    #cardsCountBtnsPanel = document.getElementById('cardsCountPanel');

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
        return this.#cardsCount = value;
    }

    shuffleAndDeal () {
        this.#desc.shuffleCards();
        this.#desc.cards.forEach((card) => {
            this.#boardElement.append(card.getDomElement);
        });
    };

    startGame () {
        this.attemptNumber = 0;
        this.failCount = 0;
        this.#desc = new Desc(this.#cardsCount);
        this.#boardElement.innerHTML = '';
        this.shuffleAndDeal();
    };

    selectCard (card) {
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
            const timerId = setTimeout(() => {
                alert(`Вы победили!\nКоличество ходов: ${this.attemptNumber}.\nКоличество ошибок: ${this.failCount}.`);

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
        if (event.target.classList.contains('cardsCountBtn')) {
            this.cardsCount = +event.target.textContent;
        }
    
        this.findCardsCount();
    };
    
    activeCardsCountBtnsPanel () {
        this.#cardsCountBtnsPanel.addEventListener('click', (event) => this.selectCardsCount(event));
    }
};
