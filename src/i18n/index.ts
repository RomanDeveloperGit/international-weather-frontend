import i18n from 'i18next';
import 'moment/locale/fr';
import 'moment/locale/ja';
import 'moment/locale/ru';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE } from './config';

import en from './locales/en';
import fr from './locales/fr';
import ja from './locales/ja';
import ru from './locales/ru';

export const resources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  ja: {
    translation: ja,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
