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
                gtag('event', 'newGame', {
                    'element': 'btn',
                    'description': 'newGame',
                });
            },
        },
        {
            element: document.getElementById('rememberField'),
            listener: () => {
                gtag('event', 'rememberCards', {
                    'element': 'btn',
                    'description': 'remember',
                });
            },
        },
        {
            element: document.getElementById('cardsCountPanel'),
            listener: () => {
                gtag('event', 'levelsPanel', {
                    'element': 'btnsPanel',
                    'description': 'levelsPanel',
                });
            },
        },
        {
            element: document.getElementById('theEndModalInstallAppBtn'),
            listener: () => {
                gtag('event', 'installApp', {
                    'element': 'btn',
                    'description': 'installApp',
                });
            },
        },
        {
            element: document.getElementById('theEndModalCloseBtn'),
            listener: () => {
                gtag('event', 'theEndModalCloseBtn', {
                    'element': 'btn',
                    'description': 'theEndModalCloseBtn',
                });
            },
        },
        {
            element: document.getElementById('theEnd'),
            listener: () => {
                gtag('event', 'theEndModalCloseField', {
                    'element': 'field',
                    'description': 'theEndModalCloseField',
                });
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
