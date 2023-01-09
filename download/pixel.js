export const initFbPixel = (pixelNum) => {
    if (!fbq) {
        return;
    }

    const ids = {
        pixel1: '1110330096568660',
        pixel2: '1206201043607066',
    };

    fbq('init', pixelNum === 2 ? ids.pixel2 : ids.pixel1);
    fbq('track', 'PageView');
};