import Card from './Card';

export default class Desc {
    #cardsCount;
    #frontSidesOfTheCards = [
        'linear-gradient(0deg, red, red)', 
        'linear-gradient(0deg, yellow, yellow)', 
        'linear-gradient(0deg, green, green)', 
        'linear-gradient(0deg, cyan, cyan)', 
        'linear-gradient(0deg, blue, blue)', 
        'linear-gradient(0deg, orange, orange)', 
        'linear-gradient(0deg, blueviolet, blueviolet)', 
        'linear-gradient(0deg, azure, azure)', 
        'linear-gradient(0deg, brown, brown)', 
        'linear-gradient(0deg, pink, pink)', 
        'linear-gradient(0deg, lime, lime)', 
        'linear-gradient(0deg, deeppink, deeppink)', 
        'linear-gradient(0deg, burlywood, burlywood)', 
        'linear-gradient(0deg, olive, olive)', 
        'linear-gradient(0deg, saddlebrown, saddlebrown)', 
        'linear-gradient(0deg, midnightblue, midnightblue)', 
        'linear-gradient(0deg, palegreen, palegreen)', 
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
        this.#frontSidesOfTheCards.sort(this.randomSort).length = this.#cardsCount / 2;
        this.cards = [
            ...this.#frontSidesOfTheCards, 
            ...this.#frontSidesOfTheCards,
        ].map((card) => {
            return new Card(card)
        });
    };

    createColorPart () {
        return (30 + Math.random() * (255 - 30)).toFixed(0)
    }

    createGradient (colorsCount, switchColorTransitionPoint) {
        const listWithColors = [];
        const listWithColorTransitionPoint = [];

        for (let i = 1; i <= colorsCount; i++) {
            const red = this.createColorPart();
            const green = this.createColorPart();
            const blue = this.createColorPart();

            listWithColors.push(`rgb(${red}, ${green}, ${blue})`);

            let colorTransitionPoint;

            if (switchColorTransitionPoint && i === 1) {
                colorTransitionPoint = 0;
            } else if (switchColorTransitionPoint && i === colorsCount) {
                colorTransitionPoint = 100;
            } else {
                colorTransitionPoint = +(10 + Math.random() * 80).toFixed(0);
            }

            listWithColorTransitionPoint.push(colorTransitionPoint);
        }

        listWithColorTransitionPoint.sort((a, b) => a - b);

        const listWithColorTransitions = [];

        for (let j = 0; j < colorsCount; j++) {
            listWithColorTransitions.push(`${listWithColors[j]} ${listWithColorTransitionPoint[j]}%`);
        }

        return listWithColorTransitions
    }

    createLinearGradient () {
        const degrees = (Math.random() * 360).toFixed(0);
        const colorsCount = +(3 + Math.random() * (4 - 3)).toFixed(0);

        return `linear-gradient(${degrees}deg, ${this.createGradient(colorsCount, true).join(', ')})`
    }

    createRadialGradient () {
        const centerX = (Math.random() * 100).toFixed(0);
        const centerY = (Math.random() * 100).toFixed(0);
        const colorsCount = +(3 + Math.random() * (4 - 3)).toFixed(0);

        return `radial-gradient(at ${centerX}% ${centerY}%, ${this.createGradient(colorsCount, false).join(', ')})`
    }

    buildListWithFrontSidesOfTheCards () {
        for (let i=0; i < 3; i++) {
            const switchGradient = +(Math.random() * 1).toFixed(0);

            if (switchGradient === 0) {
                this.#frontSidesOfTheCards.push(this.createLinearGradient());
            } else {
                this.#frontSidesOfTheCards.push(this.createRadialGradient());
            }
        }
    }

    randomSort () {
        return Math.random() - 0.5
    }

    shuffleCards () {
        this.cards.sort(this.randomSort);
    };

    removeCard (card) {
        const indexCard = this.cards.findIndex(item => item.getFrontSideOfTheCard === card.getFrontSideOfTheCard);

        if (indexCard !== -1) {
            this.cards.splice(indexCard, 1);

            card.disconnectedFromDOM();
        }
    };
};
