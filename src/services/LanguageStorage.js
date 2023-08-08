const LANGUAGE_KEY = "lang";
const DEFAULT_LANG = "en-US";

export const getLang = () => {
  return window.localStorage.getItem(LANGUAGE_KEY) ?? DEFAULT_LANG;
};

export const setLang = (lang) => {
  window.localStorage.setItem(LANGUAGE_KEY, lang);
};

export default {
  getLang,
  setLang,
};
