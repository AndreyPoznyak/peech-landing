import './index.scss';
import { setTranslations } from './src/l10n';
import { getClickURL } from './src/link';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);

    setTimeout(() => window.location.href = getClickURL(urlParams), 2500);
    setTranslations(urlParams.get('language'));
});