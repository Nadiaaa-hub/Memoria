import translations from "../translations.js";

export function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".js-switch-button");
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
}

export function setLanguage(lang) {
  const langButtons = document.querySelectorAll(".js-switch-button");

  if (!translations) {
    console.error("Translations not loaded");
    return;
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;

    const value = translations[key]?.[lang];
    if (!value) return;

    if (Array.isArray(value)) {
      el.innerHTML = value.join("<br>");
    } else {
      el.innerHTML = value;
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
});
