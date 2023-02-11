import * as styles from '../styles/style.scss';

export default class Card {
    #bgColor;
    #domElement;
    #isShowCard = false;

    constructor (bgColor) {
        this.#bgColor = bgColor;

        this.#domElement = document.createElement('div');
        this.#domElement.classList.add(`${styles.card}`);
        this.#domElement.style.backgroundColor = `${this.getReverseSideOfTheCard}`;
        this.#domElement.connectedCard = this;
    };

    get getReverseSideOfTheCard () {
        return '#555555'
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
            this.#domElement.style.backgroundColor = this.getFrontSideOfTheCard;
            this.#domElement.classList.add(`${styles.cardOpen}`);
        } else {
            this.#domElement.style.backgroundColor = this.getReverseSideOfTheCard;
            this.#domElement.classList.remove(`${styles.cardOpen}`);
        }
    };

    disconnectedFromDOM () {
        this.#domElement.connectedCard = null;
    };
};
