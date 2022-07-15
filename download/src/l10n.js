const translations = {
    en: {
        link: 'Download on the AppStore',
        text: 'You are one tap away from getting the app...',
        stats: '250k+ users',
    },
    it: {
        link: "Scaricare dall'App Store",
        text: 'Sei solo un passo da noi',
        stats: '250k+ utenti',
    },
    es: {
        link: 'Descargar en la App Store',
        text: 'Estás a un toque de obtener la aplicación...',
        stats: '250k+ usuarios',
    },
}

export const setTranslations = (language) => {
    if (!language) {
        return;
    }

    const linkEl = document.querySelector('.store-link');
    const userStatsEl = document.querySelector('.users-stats');
    const textEl = document.querySelector('.text');

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

    linkEl.innerHTML = locales.link;
    userStatsEl.innerHTML = locales.stats;
    textEl.innerHTML = locales.text;
};