import { burgerMenu } from "./components-js/burger-menu.js";
import { openFaq } from "./components-js/faq.js";
import { setLanguage } from "./components-js/language-switcher.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("MAIN LOADED");

  burgerMenu();
  openFaq();

  const langButtons = document.querySelectorAll(".js-switch-button");
  const savedLang = localStorage.getItem("lang") || "en";

  setLanguage(savedLang);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
