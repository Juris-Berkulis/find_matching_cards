export default class GoogleAnalytics {
    #hostings = {
        netlify: {
            trackingId: 'G-DF7KP8HJ0W',
        },
        vercel: {
            trackingId: 'G-FTV8XC9XHN',
        },
        surge: {
            trackingId: 'G-P7RCCC94R2',
        },
    }

    #analiticListeners = [
        {
            element: document.getElementById('startGame'),
            listener: () => {
                this.listenerFunc('newGame', 'btn', 'newGame');
            },
        },
        {
            element: document.getElementById('rememberField'),
            listener: () => {
                this.listenerFunc('rememberCards', 'btn', 'rememberCards');
            },
        },
        {
            element: document.getElementById('cardsCountBtn10'),
            listener: () => {
                this.listenerFunc('10CardsLevel', 'Btn', 'set_level_with_10_cards');
            },
        },
        {
            element: document.getElementById('cardsCountBtn20'),
            listener: () => {
                this.listenerFunc('20CardsLevel', 'Btn', 'set_level_with_20_cards');
            },
        },
        {
            element: document.getElementById('cardsCountBtn30'),
            listener: () => {
                this.listenerFunc('30CardsLevel', 'Btn', 'set_level_with_30_cards');
            },
        },
        {
            element: document.getElementById('cardsCountBtn40'),
            listener: () => {
                this.listenerFunc('40CardsLevel', 'Btn', 'set_level_with_40_cards');
            },
        },
        {
            element: document.getElementById('board'),
            listener: () => {
                this.listenerFunc('boardWithCards', 'field', 'board_with_cards');
            },
        },
        {
            element: document.getElementById('theEndModalInstallAppBtn'),
            listener: () => {
                this.listenerFunc('installApp', 'btn', 'installApp');
            },
        },
        {
            element: document.getElementById('theEndModalCloseBtn'),
            listener: () => {
                this.listenerFunc('theEndModalCloseBtn', 'btn', 'theEndModalCloseBtn');
            },
        },
        {
            element: document.getElementById('theEnd'),
            listener: () => {
                this.listenerFunc('theEndModalCloseField', 'field', 'theEndModalCloseField');
            },
        },
    ];

    constructor () {
        this.getScript()
    }

    getDomen () {
        return location.hostname.split('.')[1]
    }

    getTrackingId () {
        const hostingOptions = this.#hostings[this.getDomen()];

        if (hostingOptions) {
            return hostingOptions.trackingId
        } else {
            return null
        }
    }

    getScript1 (trackingId) {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;

        return script
    }

    getScript2 (trackingId) {
        const script = document.createElement("script");
        script.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
        `;

        return script
    }

    listenerFunc (eventName, element, description) {
        gtag(
            'event', 
            eventName, 
            {
                'element': element,
                'description': description,
            }
        );
    }

    addAnalyticsListener () {
        for (let i=0; i < this.#analiticListeners.length; i++) {
            if (this.#analiticListeners[i].element) {
                this.#analiticListeners[i].element.addEventListener('click', this.#analiticListeners[i].listener);
            }
        }
    }

    getScript () {
        const trackingId = this.getTrackingId();
        
        if (trackingId) {
            document.head.insertAdjacentElement("beforeend", this.getScript1(trackingId));
            document.head.insertAdjacentElement("beforeend", this.getScript2(trackingId));

            this.addAnalyticsListener();
        }
    }
};
