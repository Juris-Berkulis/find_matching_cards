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

    getScript () {
        const trackingId = this.getTrackingId();
        
        if (trackingId) {
            document.head.insertAdjacentElement("beforeend", this.getScript1(trackingId));
            document.head.insertAdjacentElement("beforeend", this.getScript2(trackingId));
        }
    }
};
