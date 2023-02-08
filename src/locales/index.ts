import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUSLanguage from './entries/en-US';
import esESLanguage from './entries/es-ES';
import { isPartOfLanguages } from './helper';

const getLanguageFromUrl = () => {
  const { pathname } = window.location;
  const languageSelected = pathname.split('/')[1];
  if (pathname === '/' || !isPartOfLanguages(languageSelected)) {
    return 'en';
  }
  return languageSelected;
};

const resources = {
  en: enUSLanguage,
  es: esESLanguage,
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguageFromUrl(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
