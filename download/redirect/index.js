import './index.scss';
import { setTranslations } from './l10n';
import { getClickURL } from '../link';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);

    setTimeout(() => window.location.href = getClickURL(urlParams), 2500000);
    setTranslations(urlParams.get('language'));
});