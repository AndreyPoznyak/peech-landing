import './index.scss';
import { setTranslations } from './l10n';
import { getClickURL } from '../link';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);

    setTimeout(() => {
        if (window.fbq) {
            fbq('track', 'StoreRedirect');
        }
        navigator.clipboard.writeText(`peechapp://${location.search}`);
        window.location.href = getClickURL(urlParams);
    }, 2500);
    setTranslations(urlParams.get('language'));
});