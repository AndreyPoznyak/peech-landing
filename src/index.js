import './index.css';

document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('.store-link');
    const params = new URLSearchParams(location.search.substring(1));
    const trackerId = params.get('tracker') || 'x0myqi4'; //TODO: make sure param name is relevant
    const trackerUrl = `https://app.adjust.com/${trackerId}${location.search}`;

    link.href = trackerUrl;

    link.addEventListener('click', () => {
        const pixelCall = fbq || (() => console.log('No Pixel initted.'));
        pixelCall('track', 'CompleteRegistration');
    });
});
