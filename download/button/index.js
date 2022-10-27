import './index.scss';
import { setTranslations } from './l10n';
import { getClickURL } from '../link';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(location.search);

    const a = getClickURL(urlParams);
    setTranslations(urlParams.get('language'));
});