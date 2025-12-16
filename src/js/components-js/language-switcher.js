import translations from "../translations.js";

export function setLanguage(lang) {
  const langButtons = document.querySelectorAll(".js-switch-button");

  console.log("LANG SWITCHER LOADED");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const keys = key.split(".");
    const group = translations[keys[0]];
    if (!group) return;

    const value = group[lang];
    const index = keys[1] !== undefined ? Number(keys[1]) : null;

    if (index !== null && Array.isArray(value)) {
      el.innerHTML = value[index] ?? "";
    } else if (Array.isArray(value)) {
      el.innerHTML = value.join("<br>");
    } else {
      el.innerHTML = value ?? "";
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}
