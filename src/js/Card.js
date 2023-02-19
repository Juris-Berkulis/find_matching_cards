import * as styles from '../styles/style.scss';

export default class Card {
    #bgColor;
    #domElement;
    #isShowCard = false;

    constructor (bgColor) {
        this.#bgColor = bgColor;

        this.#domElement = document.createElement('div');
        this.#domElement.classList.add(`${styles.card}`);
        this.#domElement.style.backgroundImage = `${this.getReverseSideOfTheCard}`;
        this.#domElement.isCard = true;
        this.#domElement.connectedCard = this;
    };

    get getReverseSideOfTheCard () {
        return 'linear-gradient(0deg, #555555, #555555)'
    };

    get getFrontSideOfTheCard () {
        return this.#bgColor
    };

    get getDomElement () {
        return this.#domElement
    };

    flipCard () {
        this.#isShowCard = !this.#isShowCard;

        if (this.#isShowCard) {
            this.#domElement.style.backgroundImage = this.getFrontSideOfTheCard;
            this.#domElement.classList.add(`${styles.cardOpen}`);
            this.#domElement.cardOpen = true;
        } else {
            this.#domElement.style.backgroundImage = this.getReverseSideOfTheCard;
            this.#domElement.classList.remove(`${styles.cardOpen}`);
            this.#domElement.cardOpen = false;
        }
    };

    disconnectedFromDOM () {
        this.#domElement.connectedCard = null;
    };
};
