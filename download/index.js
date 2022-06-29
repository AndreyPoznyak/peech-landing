import './index.scss';
import './onelink-smart-script-latest.js';

document.addEventListener('DOMContentLoaded', () => {
    const oneLinkURL = "https://peech.onelink.me/mjNH/";
    const linkEl = document.querySelector('.store-link');

    if (!AF_SMART_SCRIPT) {
        console.log('OneLink script is not loaded.');
        linkEl.href = oneLinkURL;
        return;
    }

    const afSub1 = {
        keys: ['fbclid'],
        defaultValue: ''
    };
    const { clickURL } = AF_SMART_SCRIPT.generateOneLinkURL({
        oneLinkURL,
        afParameters: {
            afSub1,
        }
    });

    console.log(clickURL);

    linkEl.href = clickURL;
});
