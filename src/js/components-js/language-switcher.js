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

    const keys = key.split(".");
    const group = translations[keys[0]];

    if (!group) return;

    const value = group[lang];
    const index = keys[1] ? Number(keys[1]) : null;

    if (index !== null && Array.isArray(value)) {
      if (value[index]) el.innerHTML = value[index];
    } else if (Array.isArray(value)) {
      el.innerHTML = value.join("<br>");
    } else if (value) {
      el.innerHTML = value;
    }
  });

  langButtons.forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  localStorage.setItem("lang", lang);
}
