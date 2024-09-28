import React from "react";
import { useLanguage } from "./LanguageContext";

const messages = {
  en: "Hello, World!",
  es: "გამარჯობა"
};

const Message = () => {
  const { language } = useLanguage();
  return <h1>{messages[language]}</h1>;
};

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();
  return <button onClick={switchLanguage}>Switch Language</button>;
};
