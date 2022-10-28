const translations = {
    en: {
        link: 'Go to App Store',
        text: 'You are one tap away from getting the app...',
        stats: '500K+ users',
    },
    it: {
        link: "Scaricare dall'App Store",
        text: 'Sei solo un passo da noi',
        stats: '500K+ utenti',
    },
    es: {
        link: 'Descargar en la App Store',
        text: 'Estás a un toque de obtener la aplicación...',
        stats: '500K+ usuarios',
    },
}

export const setTranslations = (language) => {
    const linkEl = document.querySelector('.store-link');
    const userStatsEl = document.querySelector('.users-stats');

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
};