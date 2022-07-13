import './index.scss';

const getCookieValue = (name) => document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';

document.addEventListener('DOMContentLoaded', () => {
    const oneLinkURL = "https://peech.onelink.me/mjNH/";
    const linkEl = document.querySelector('.store-link');
    const urlParams = new URLSearchParams(location.search);
    const facebookClickId = getCookieValue('_fbc') || urlParams.get('fbclid') || '';
    const facebookBrowserId = getCookieValue('_fbp') || '';
    const afParams = {
        pid: urlParams.get('utm_source') || 'no_media_source',
        c: urlParams.get('utm_campaign'),
        af_c_id: urlParams.get('campaign_id'),
        af_adset_id: urlParams.get('adset_id'),
        af_ad_id: urlParams.get('ad_id'),
        af_channel: urlParams.get('utm_medium'),
        af_ad: urlParams.get('utm_term'),
        af_adset: urlParams.get('utm_content'),
        af_sub1: facebookClickId,
        af_sub2: facebookBrowserId,
        af_sub3: urlParams.get('placement'),
        af_sub4: urlParams.get('gclid'), //google click
    };

    const queryString = Object.keys(afParams)
        .filter(key => !!afParams[key])
        .map(key => `${key}=${afParams[key]}`).join('&');

    const clickURL = `${oneLinkURL}?${queryString}`;

    console.log(clickURL);

    linkEl.href = clickURL;
});