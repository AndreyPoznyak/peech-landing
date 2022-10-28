const translations = {
    en: {
        title: 'You are being redirected to App Store',
        subtitle: 'It takes just a few seconds',
    },
    it: {
        title: 'You are being redirected to App Store',
        subtitle: 'It takes just a few seconds',
    },
    es: {
        title: 'You are being redirected to App Store',
        subtitle: 'It takes just a few seconds',
    },
}

export const setTranslations = (language) => {
    const textEl = document.querySelector('.text');
    const bottomTextEl = document.querySelector('.bottom-text');

    let languageCode = 'en';

    switch (language) {
        case 'it':
            languageCode = 'it';
            break;
        case 'es':
            languageCode = 'es';
            break;
        default:
            languageCode = 'en';
            break;
    }

    const locales = translations[languageCode];

    if (!locales) {
        console.log('Error: locales not found.');
        return;
    }

    textEl.innerHTML = locales.title;
    bottomTextEl.innerHTML = locales.subtitle;
};