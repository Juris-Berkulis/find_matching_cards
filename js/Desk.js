class Desc {
    #frontSidesOfTheCards = [
        'red', 
        'orange', 
        'yellow', 
        'green', 
        'cyan', 
        'blue', 
        'blueviolet', 
        'azure', 
        'brown', 
        'pink',
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
    constructor () {
        this.cards = [
            ...this.#frontSidesOfTheCards, 
            ...this.#frontSidesOfTheCards,
        ].map((card) => {
            return new Card(card)
        });
    };

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
