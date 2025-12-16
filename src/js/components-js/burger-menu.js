// export function burgerMenu() {
//   const burgerToggle = document.getElementById("burger-toggle");
//   const mobileMenu = document.querySelector(".mobile-menu");
//   const overlay = document.querySelector(".overlay");

//   if (!burgerToggle || !mobileMenu || !overlay) {
//     console.warn("Burger init: required elements missing");
//     return;
//   }

//   function openMenu() {
//     mobileMenu.classList.add("open");
//     overlay.classList.add("open");
//     document.body.style.overflow = "hidden";
//   }

//   function closeMenu() {
//     mobileMenu.classList.remove("open");
//     overlay.classList.remove("open");
//     document.body.style.overflow = "";
//   }

//   function syncFromCheckbox() {
//     if (burgerToggle.checked) {
//       openMenu();
//     } else {
//       closeMenu();
//     }
//   }

//   burgerToggle.addEventListener("change", syncFromCheckbox);

//   overlay.addEventListener("click", () => {
//     burgerToggle.checked = false;
//     closeMenu();
//   });

//   mobileMenu.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", () => {
//       burgerToggle.checked = false;
//       closeMenu();
//     });
//   });

//   window.addEventListener("resize", () => {
//     if (window.innerWidth >= 960 && mobileMenu.classList.contains("open")) {
//       burgerToggle.checked = false;
//       closeMenu();
//     }
//   });
// }
export function burgerMenu() {
  const burgerToggle = document.getElementById("burger-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  if (!burgerToggle || !mobileMenu) return;

  function closeMenu() {
    burgerToggle.checked = false;
    mobileMenu.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    body.style.overflow = ""; // Вмикаємо скрол
  }

  function openMenu() {
    mobileMenu.classList.add("open");
    if (overlay) overlay.classList.add("open");
    body.style.overflow = "hidden"; // Блокуємо скрол
  }

  // Обробка кліку по чекбоксу бургера
  burgerToggle.addEventListener("change", () => {
    if (burgerToggle.checked) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Закриття при кліку на оверлей
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Закриття при кліку на посилання в меню
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
