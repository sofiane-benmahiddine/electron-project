import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arabic from './libs/locales/ar' 
import french from './libs/locales/fr' 

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ar: {
        translation: arabic
      },
      fr: {
        translation: french
      }
    }
  });

export default i18n;
