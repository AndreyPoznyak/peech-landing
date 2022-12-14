import './index.scss';
import { setTranslations } from './l10n';
import { getClickURL } from '../link';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);

    document.body.addEventListener('click', () => navigator.clipboard.writeText(`peechapp://${location.search}`)); //just in case

    setTimeout(() => {
        if (window.fbq) {
            fbq('track', 'ViewContent');
        }

        if (window.gtag) {
            gtag('event', 'StoreRedirect');
        }

        setTimeout(() => window.location.href = getClickURL(urlParams), 200);
    }, 2300);
    
    setTranslations(urlParams.get('language'));
});