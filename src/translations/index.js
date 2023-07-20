import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en.json";

const availableLanguages = ["en"];

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  react: {
    wait: true,
    useSuspense: true,
  },
  detection: {
    checkWhitelist: true,
  },
  fallbackLng: "en",
  debug: false,
  whitelist: availableLanguages,
  interpolation: {
    escapeValue: false,
    skipOnVariables: false,
  },
});

export default i18n;
