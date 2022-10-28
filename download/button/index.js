import './index.scss';
import { setTranslations } from './l10n';
import { getClickURL } from '../link';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);
    const linkEl = document.querySelector('.store-link');
    const link = getClickURL(urlParams);

    setTranslations(urlParams.get('language'));

    linkEl.href = link;

    const fbq = fbq || (() => {});
    document.body.addEventListener('click', () => {
        fbq('track', 'StoreRedirect');
        navigator.clipboard.writeText(`peechapp://${location.search}`);
        window.location.href = link;
    }); 
});