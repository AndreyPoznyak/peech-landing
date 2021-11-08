import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('.store-link');
    const params = new URLSearchParams(location.search.substring(1));
    //const trackerId = params.get('tracker') || 'x0myqi4';
    const trackerUrl = `https://app.adjust.com/x0myqi4${location.search || '?campaign=Landing'}`;

    link.href = trackerUrl;

    link.addEventListener('click', () => {
        const pixelCall = fbq || (() => console.log('No Pixel initted.'));
        pixelCall('track', 'CompleteRegistration');
    });
});
