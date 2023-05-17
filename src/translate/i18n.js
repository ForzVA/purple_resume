import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationRU from "./locales/ru/translation.json";
import translationEN from "./locales/en/translation.json";
import I18NextHttpBackend from "i18next-http-backend";
import I18NextLocalStorageBackend from "i18next-localstorage-backend";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: localStorage.getItem("i18nextLng") || "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    caches: ["localStorage", "cookie"],
    backend: {
      backends: [I18NextLocalStorageBackend, I18NextHttpBackend],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
        {
          loadPath: "./locales/{{lng}}/{{ns}}.json",
        },
      ],
    },
  });

export default i18n;
