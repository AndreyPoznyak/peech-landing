import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('.store-link');
    const pixelCall = fbq || (() => console.log('No Pixel initted.'));
    const trackerUrl = `https://app.adjust.com/x0myqi4${location.search || '?campaign=Landing'}`;

    pixelCall('track', 'ViewContent'); //to have the same event as SM

    link.href = trackerUrl;

    link.addEventListener('click', () => {
        pixelCall('track', 'CompleteRegistration');
        console.log('Link clicked.');
    });
});
