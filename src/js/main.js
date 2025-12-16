import { burgerMenu } from "./components-js/burger-menu.js";
// import { initCtaTooltips } from "./components-js/tailwind.config.js";
import { setLanguage } from "./components-js/language-switcher.js";
import "./components-js/language-switcher.js";
import "./components-js/faq.js";

import { openFaq } from "./components-js/faq.js";
document.addEventListener("DOMContentLoaded", () => {
  burgerMenu();
  openFaq();
  // initCtaTooltips();

  const langButtons = document.querySelectorAll(".js-switch-button");
  const savedLang = localStorage.getItem("lang") || "en";

  setLanguage(savedLang);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
