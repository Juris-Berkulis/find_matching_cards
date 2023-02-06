class Desc {
    #cardsCount;
    #frontSidesOfTheCards = [
        'red', 
        'yellow', 
        'green', 
        'cyan', 
        'blue', 
        'orange', 
        'blueviolet', 
        'azure', 
        'brown', 
        'pink',
        'lime',
        'deeppink',
        'burlywood',
        'olive',
        'saddlebrown',
        'midnightblue',
        'palegreen',
    ];

    //* Вариант 1:
    // constructor () {
    //     this.cards = [];
    //     this.#frontSidesOfTheCards.forEach((frontSideOfTheCard) => {
    //         this.cards.push(new Card(frontSideOfTheCard));
    //         this.cards.push(new Card(frontSideOfTheCard));
    //     });
    // };

    //* Вариант 2:
    constructor (cardsCount) {
        this.buildListWithFrontSidesOfTheCards();
        this.#cardsCount = cardsCount;
        this.#frontSidesOfTheCards.length = this.#cardsCount / 2;
        this.cards = [
            ...this.#frontSidesOfTheCards, 
            ...this.#frontSidesOfTheCards,
        ].map((card) => {
            return new Card(card)
        });
    };

    buildListWithFrontSidesOfTheCards () {
        for (let i=0; i < 3; i++) {
            const red = (Math.random() * 255).toFixed(0);
            const green = (Math.random() * 255).toFixed(0);
            const blue = (Math.random() * 255).toFixed(0);
            this.#frontSidesOfTheCards.push(`rgb(${red}, ${green}, ${blue})`);
        }
    }

    shuffleCards () {
        this.cards.sort(() => Math.random() - 0.5);
    };

    removeCard (card) {
        const indexCard = this.cards.findIndex(item => item.getFrontSideOfTheCard === card.getFrontSideOfTheCard);

        if (indexCard !== -1) {
            this.cards.splice(indexCard, 1);

            card.disconnectedFromDOM();
        }
    };
};
