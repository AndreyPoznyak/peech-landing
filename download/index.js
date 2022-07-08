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
    const afSub2 = { keys: ['gclid'], defaultValue: '' };
    const afSub3 = { keys: ['placement'], defaultValue: '' };
    const mediaSource = { keys: ["utm_source"], defaultValue: 'no_media_source' };
    const channel = {keys: ["utm_medium", "utm_channel"]};
    const campaign = {keys: ["campaign", "utm_campaign"]};
    const ad = {keys: ["utm_term", "utm_ad"]};
    const adSet = {keys: ["utm_content", "utm_adset", "utm_adset_name"]};
    const af_c_id = {keys: ["campaign_id", "utm_campaign_id"]};
    const af_adset_id = {keys: ["adset_id"]};
    const af_ad_id = {keys: ["ad_id"]};

    const { clickURL } = AF_SMART_SCRIPT.generateOneLinkURL({
        oneLinkURL,
        afParameters: {
            afSub1,
            afSub2,
            afSub3,
            mediaSource,
            channel,
            campaign,
            ad,
            adSet,
            af_c_id,
            af_adset_id,
            af_ad_id,
        }
    });

    linkEl.href = clickURL;
});
