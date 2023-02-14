import * as styles from '../styles/style.scss';

export const pwaStatus = () => { //* Подробнее на сайте: "https://web.dev/i18n/ru/customize-install/".
    // Initialize deferredPrompt for use later to show browser install prompt.
    let deferredPrompt;
    const theEndModalInstallAppBtnElement = document.getElementById('theEndModalInstallAppBtn');

    const showInstallPromotion = () => {
        theEndModalInstallAppBtnElement.classList.add(`${styles.btnShow}`);
    };

    const hideInstallPromotion = () => {
        theEndModalInstallAppBtnElement.classList.remove(`${styles.btnShow}`);
    };

    const onClickForBtn = async () => {
        // Hide the app provided install promotion
        hideInstallPromotion();
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        // Optionally, send analytics event with outcome of user choice
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        deferredPrompt = null;
    };

    const installApp = () => {
        theEndModalInstallAppBtnElement.onclick = () => onClickForBtn();
    };

    const onApiInstalledForWindows = () => {
        return () => {
            // Hide the app-provided install promotion
            hideInstallPromotion();
            // Clear the deferredPrompt so it can be garbage collected
            deferredPrompt = null;
            // Optionally, send analytics event to indicate successful install
            console.log('PWA was installed');
        }
    };

    const appInstalled = () => {
        window.addEventListener('appinstalled', onApiInstalledForWindows());
    }

    const onBeforeInstallPromptForWindows = () => {
        return (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI notify the user they can install the PWA
            showInstallPromotion();
            // Optionally, send analytics event that PWA install promo was shown.
            console.log(`'beforeinstallprompt' event was fired.`);
        }
    };

    const lissenBeforeInstallPrompt = () => {
        window.addEventListener('beforeinstallprompt', onBeforeInstallPromptForWindows());
    };

    lissenBeforeInstallPrompt();
    installApp();
    appInstalled();
};
