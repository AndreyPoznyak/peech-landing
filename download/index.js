import './index.scss';
import { setTranslations } from './src/l10n';
import { setClickURL } from './src/link';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);

    setClickURL(urlParams);
    setTimeout(() => setClickURL(urlParams), 1000); //this is a hack in case the cookie was updated
    setTranslations(urlParams.get('language'));
});