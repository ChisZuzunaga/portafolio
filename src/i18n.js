import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos JSON con las traducciones
import en from './locales/en.json';
import es from './locales/es.json';

// Obtén el idioma desde localStorage o usa 'en' como predeterminado
const savedLanguage = localStorage.getItem('language') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: savedLanguage, // Usa el idioma guardado en localStorage
  fallbackLng: 'en', // Idioma por defecto si no encuentra traducción
  interpolation: {
    escapeValue: false, // React ya escapa los valores por defecto
  },
});

// Guarda el idioma en localStorage cada vez que cambie
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;