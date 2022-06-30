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

    const afSub1 = { keys: ['fbclid'], defaultValue: '' };
    const mediaSource = { keys: ["inmedia", "utm_source"], defaultValue: 'no_media_source' };
    const channel = {keys: ["channel", "utm_channel"]};
    const campaign = {keys: ["campaign", "utm_campaign"]};
    const ad = {keys: ["adgroup", "utm_ad"]};
    const adSet = {keys: ["creative", "utm_adset"]};

    const { clickURL } = AF_SMART_SCRIPT.generateOneLinkURL({
        oneLinkURL,
        afParameters: {
            afSub1,
            mediaSource,
            channel,
            campaign,
            ad,
            adSet,
        }
    });

    console.log(clickURL);

    linkEl.href = clickURL;
});
