import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos JSON con las traducciones
import en from './locales/en.json';
import es from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: 'en', // Idioma inicial
  fallbackLng: 'en', // Idioma por defecto si no encuentra traducción
  interpolation: {
    escapeValue: false, // React ya escapa los valores por defecto
  },
});

export default i18n;