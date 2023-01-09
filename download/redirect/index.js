import './index.scss';
import { setTranslations } from './l10n';
import { getClickURL } from '../link';
import { initFbPixel } from '../pixel';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);
    const { pixel } = process.env;

    initFbPixel(pixel);

    document.body.addEventListener('click', () => navigator.clipboard.writeText(`peechapp://${location.search}`)); //just in case

    setTimeout(() => {
        if (fbq) {
            fbq('track', 'ViewContent');
        }

        if (gtag) {
            gtag('event', 'StoreRedirect');
        }

        setTimeout(() => window.location.href = getClickURL(urlParams, { pixel }), 200);
    }, 2300);
    
    setTranslations(urlParams.get('language'));
});