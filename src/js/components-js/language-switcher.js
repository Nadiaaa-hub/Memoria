import translations from "../translations.js";

export function setLanguage(lang) {
  const langButtons = document.querySelectorAll(".js-switch-button");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const keys = key.split(".");
    let value = translations[keys[0]];
    if (!value) return;
    const langArray = value[lang];
    const index = keys[1] ? Number(keys[1]) : null;

    if (index !== null && langArray && langArray[index] !== undefined) {
      el.innerHTML = langArray[index];
    } else if (Array.isArray(langArray)) {
      el.innerHTML = langArray.join("<br>");
    } else {
      el.innerHTML = langArray || "";
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}
