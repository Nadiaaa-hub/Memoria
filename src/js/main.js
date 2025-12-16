import { burgerMenu } from "./components-js/burger-menu.js";
import { openFaq } from "./components-js/faq.js";

// ВИПРАВЛЕНО: Оскільки файл лежить поруч, використовуємо ./
import translations from "./translations.js";

document.addEventListener("DOMContentLoaded", () => {
  // Ініціалізація компонентів
  burgerMenu();
  openFaq();

  // Логіка перемикача мов
  const langButtons = document.querySelectorAll(".js-switch-button");
  const savedLang = localStorage.getItem("lang") || "en";

  // Встановлюємо мову при завантаженні
  setLanguage(savedLang);

  // Додаємо обробники подій на кнопки
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
});

// Функція перекладу
function setLanguage(lang) {
  const langButtons = document.querySelectorAll(".js-switch-button");

  // Оновлюємо тексти
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const keys = key.split(".");

    // Перевірка наявності перекладів
    if (!translations || !translations[keys[0]]) return;

    let value = translations[keys[0]];
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

  // Оновлюємо активний клас кнопок
  langButtons.forEach((btn) => {
    // Якщо data-lang кнопки збігається з вибраною мовою — додаємо active, інакше — прибираємо
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Зберігаємо вибір
  localStorage.setItem("lang", lang);
}
