const translations = {
    en: {
        link: 'Go to App Store',
        title: 'Enjoy your new reading superpowers',
        subtitle: 'Read or listen to anything you want whenever you want',
        stats: '500K+ Users',
    },
    it: {
        link: "Vai all'App Store",
        title: 'Goditi i tuoi  nuovi superpoteri di lettura',
        subtitle: 'Leggi o ascolta tutto quello che vuoi e quando vuoi',
        stats: '500K+ Utenti',
    },
    es: {
        link: 'Descargar en la App Store',
        title: 'Enjoy your new reading superpowers',
        subtitle: 'Read or listen to anything you want whenever you want',
        stats: '500K+ Usuarios',
    },
}

export const setTranslations = (language) => {
    const linkEl = document.querySelector('.store-link');
    const userStatsEl = document.querySelector('.users-stats');
    const titleEl = document.querySelector('.title');
    const subtitleEl = document.querySelector('.subtitle');

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
    titleEl.innerHTML = locales.title;
    subtitleEl.innerHTML = locales.subtitle;
};