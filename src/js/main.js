import { burgerMenu } from "./components-js/burger-menu.js";
import { initCtaTooltips } from "./components-js/tailwind.config.js";
import { setLanguage } from "./components-js/language-switcher.js";

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu();
  initCtaTooltips();

  const langButtons = document.querySelectorAll(".js-switch-button");
  const savedLang = localStorage.getItem("lang") || "en";

  setLanguage(savedLang);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
