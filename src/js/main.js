import { burgerMenu } from "./components-js/burger-menu.js";
import { openFaq } from "./components-js/faq.js";
import { initLanguageSwitcher } from "./components-js/language-switcher.js";
import { initAnimations } from "./components-js/animations.js";

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu();
  openFaq();
  initLanguageSwitcher();
  initAnimations();
});
