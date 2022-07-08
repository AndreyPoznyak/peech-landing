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
    const campaignId = {keys: ["campaign_id", "utm_campaign_id"]};
    const adsetId = {keys: ["adset_id"]};
    const adId = {keys: ["ad_id"]};

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
            campaignId,
            adsetId,
            adId,
        }
    });

    console.log(clickURL);

    linkEl.href = clickURL;
});

//?utm_source=aaa&utm_medium=cpc&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term={{ad.name}}&campaign_id={{campaign.id}}&adset_id={{adset.id}}&ad_id={{ad.id}}&placement={{site_source_name}}-{{placement}}