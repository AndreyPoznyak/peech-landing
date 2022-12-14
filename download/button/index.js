import './index.scss';
import { setTranslations } from './l10n';
import { getClickURL } from '../link';

const goToStore = (link) => {
    setTimeout(() => window.location.href = link, 200);

    if (window.fbq) {
        fbq('track', 'ViewContent');
    }
    if (window.gtag) {
        gtag('event', 'StoreRedirect');
    }
    
    navigator.clipboard.writeText(`peechapp://${location.search}`);
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);
    const linkEl = document.querySelector('.store-link');
    const link = getClickURL(urlParams);

    setTranslations(urlParams.get('language'));

    linkEl.href = link;

    linkEl.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        goToStore(link);
    }); 
    document.body.addEventListener('click', () => goToStore(link)); 
});