const getCookieValue = (name) => document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';

export const getClickURL = (urlParams, customParams) => {
    const oneLinkURL = "https://peech.onelink.me/mjNH/";
    const facebookClickId = getCookieValue('_fbc') || urlParams.get('fbclid') || '';
    const facebookBrowserId = getCookieValue('_fbp') || '';
    const userAgent = navigator.userAgent;
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
        af_sub4: userAgent,
        ...customParams,
        //af_sub4: urlParams.get('gclid'), //google click //TODO: think whether to store it somewhere if needed
    };

    const queryString = Object.keys(afParams)
        .filter(key => !!afParams[key])
        .map(key => `${key}=${afParams[key]}`).join('&');

    return `${oneLinkURL}?${queryString}`;
}