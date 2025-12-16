// import { burgerMenu } from "./components-js/burger-menu.js";
// import { openFaq } from "./components-js/faq.js";
// import translations from "./translations.js";

// document.addEventListener("DOMContentLoaded", () => {
//   burgerMenu();
//   openFaq();

//   const langButtons = document.querySelectorAll(".js-switch-button");
//   const savedLang = localStorage.getItem("lang") || "en";

//   setLanguage(savedLang);

//   langButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const lang = btn.dataset.lang;
//       setLanguage(lang);
//     });
//   });
// });

// function setLanguage(lang) {
//   const langButtons = document.querySelectorAll(".js-switch-button");

//   document.querySelectorAll("[data-i18n]").forEach((el) => {
//     const key = el.getAttribute("data-i18n");
//     const keys = key.split(".");

//     if (!translations || !translations[keys[0]]) return;

//     let value = translations[keys[0]];
//     const langArray = value[lang];
//     const index = keys[1] ? Number(keys[1]) : null;

//     if (index !== null && langArray && langArray[index] !== undefined) {
//       el.innerHTML = langArray[index];
//     } else if (Array.isArray(langArray)) {
//       el.innerHTML = langArray.join("<br>");
//     } else {
//       el.innerHTML = langArray || "";
//     }
//   });
//   langButtons.forEach((btn) => {
//     if (btn.dataset.lang === lang) {
//       btn.classList.add("active");
//     } else {
//       btn.classList.remove("active");
//     }
//   });

//   localStorage.setItem("lang", lang);
// }
import { burgerMenu } from "./components-js/burger-menu.js";
import { openFaq } from "./components-js/faq.js";
// Переконайся, що translations.js лежить поруч з main.js
import translations from "./translations.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Запускаємо бургер меню
  burgerMenu();

  // 2. Запускаємо FAQ
  openFaq();

  // 3. Логіка мови
  const langButtons = document.querySelectorAll(".js-switch-button");
  const savedLang = localStorage.getItem("lang") || "en";

  // Встановлюємо мову при старті
  setLanguage(savedLang);

  // Додаємо обробники кліку на кнопки мови
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
});

// Функція зміни мови
function setLanguage(lang) {
  const langButtons = document.querySelectorAll(".js-switch-button");

  // Перевірка наявності перекладів
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

    // Обробка масивів (для списків) або звичайних рядків
    const index = keys[1] ? Number(keys[1]) : null;

    if (index !== null && Array.isArray(value)) {
      // Якщо це елемент списку (treeList.0)
      if (value[index]) el.innerHTML = value[index];
    } else if (Array.isArray(value)) {
      // Якщо масив передано в звичайний тег, об'єднуємо через <br>
      el.innerHTML = value.join("<br>");
    } else if (value) {
      // Звичайний текст
      el.innerHTML = value;
    }
  });

  // Перемикання класу active на кнопках
  langButtons.forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  localStorage.setItem("lang", lang);
}
