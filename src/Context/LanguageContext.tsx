import React, { createContext, useState, useEffect } from "react";
import * as l from "../assets/Languages";

type Props = {
  children: React.ReactNode;
};
enum Language {
  english = "EN",
  greek = "GR",
}
interface LanguageContext {
  language: Language;
  setLanguage?: any;
  isGreek?: any;
  getContent?: any;
  getTags?: any;
}

export const LanguageContext = createContext<LanguageContext>({
  language: Language.english,
  isGreek: false,
});

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>(
    JSON.parse(window.localStorage.getItem("lang") as string) ||
      Language.english
  );

  function getContent() {
    return l.content[language];
  }

  function getTags() {
    return l.tags[language];
  }
  useEffect(() => {
    window.localStorage.setItem("lang", JSON.stringify(language));
  });

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, getContent, getTags }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
