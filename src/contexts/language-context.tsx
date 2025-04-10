import { createContext, useState, useContext, useEffect, type ReactNode } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import translationsEN from "@/locales/en/translation.json";
import translationsKO from "@/locales/ko/translation.json";
import translationsJA from "@/locales/ja/translation.json";

// Define available languages
// eslint-disable-next-line react-refresh/only-export-components
export const languages = [
  { code: "ko", name: "한국어" },
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
];

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEN },
      ko: { translation: translationsKO },
      ja: { translation: translationsJA },
    },
    fallbackLng: "ko",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Create context
type LanguageContextType = {
  currentLanguage: string;
  changeLanguage: (code: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "ko",
  changeLanguage: () => { },
});

// Create provider component
export const LanguageProvider = ({ children }: { children: ReactNode; }) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "ko");

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setCurrentLanguage(code);
    // Save language preference to localStorage
    localStorage.setItem("preferredLanguage", code);
    // Update HTML lang attribute
    document.documentElement.lang = code;
  };

  // Load saved language preference on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    }
  }, []);

  return <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>{children}</LanguageContext.Provider>;
};

// Custom hook for using the language context
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
