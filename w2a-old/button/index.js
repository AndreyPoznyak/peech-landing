import { getClickURL } from '../../link';
import './index.scss';
import { setTranslations } from './l10n';

const goToStore = (link) => {
    setTimeout(() => window.location.href = link, 200);

    if (fbq) {
        fbq('track', 'ViewContent');
    }
    if (gtag) {
        gtag('event', 'StoreRedirect');
    }
    
    navigator.clipboard.writeText(`peechapp://${location.search}`);
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);
    const linkEl = document.querySelector('.store-link');
    const { pixel } = process.env;
    const link = getClickURL(urlParams, { pixel });

    setTranslations(urlParams.get('language'));

    linkEl.href = link;

    linkEl.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        goToStore(link);
    }); 

    document.body.addEventListener('click', () => goToStore(link)); 
});