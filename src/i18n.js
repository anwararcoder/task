import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files
import translationEN from "./locales/en.json";
import translationAR from "./locales/ar.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Set the default language here
  interpolation: {
    escapeValue: false, // React already escapes values by default
  },
});

export default i18n;
