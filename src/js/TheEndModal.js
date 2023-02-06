export default class TheEndModal {
    #attemptNumber;
    #failCount;
    #elapsedTime;
    #theEndElement = document.getElementById('theEnd');
    #theEndModalElement = document.getElementById('theEndModal');
    #theEndModalAttemptNumberElement = document.getElementById('theEndModalAttemptNumber');
    #theEndModalFailCountElement = document.getElementById('theEndModalFailCount');
    #theEndModalElapsedTimeElement = document.getElementById('theEndModalElapsedTime');
    #theEndModalCloseBtnElement = document.getElementById('theEndModalCloseBtn');

    constructor (attemptNumber, failCount, elapsedTime) {
        this.#attemptNumber = attemptNumber;
        this.#failCount = failCount;
        this.#elapsedTime = elapsedTime;
        this.openTheEndModal();
        this.#theEndElement.onclick = () => this.closeTheEndModal(this);
        this.#theEndModalCloseBtnElement.onclick = () => this.closeTheEndModal(this);
        this.#theEndModalCloseBtnElement.onmouseover = () => this.changeBGColorForModalBtn(this);
    }

    changeBGColorForModalBtn () {
        const red = (Math.random() * 255).toFixed(0);
        const green = (Math.random() * 255).toFixed(0);
        const blue = (Math.random() * 255).toFixed(0);

        this.#theEndModalCloseBtnElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        this.#theEndModalCloseBtnElement.style.color = `rgb(${255 - red}, ${255 - green}, ${255 - blue})`;
    }

    openTheEndModal () {
        this.#theEndElement.style.display = 'block';
        this.#theEndModalElement.style.display = 'block';
        this.#theEndModalAttemptNumberElement.innerHTML = `Количество ходов: ${this.#attemptNumber}`;
        this.#theEndModalFailCountElement.innerHTML = `Количество ошибок: ${this.#failCount}`;
        this.#theEndModalElapsedTimeElement.innerHTML = `Затраченное время: ${this.#elapsedTime}`;
    }

    closeTheEndModal () {
        this.#theEndElement.style.display = 'none';
        this.#theEndModalElement.style.display = 'none';
        this.#theEndModalAttemptNumberElement.innerHTML = '';
        this.#theEndModalFailCountElement.innerHTML = '';
        this.#theEndModalElapsedTimeElement.innerHTML = '';
    }
};
