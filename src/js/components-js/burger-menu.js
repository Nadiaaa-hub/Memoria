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
    body.style.overflow = ""; 
  }

  function openMenu() {
    mobileMenu.classList.add("open");
    if (overlay) overlay.classList.add("open");
    body.style.overflow = "hidden"; 
  }

  burgerToggle.addEventListener("change", () => {
    if (burgerToggle.checked) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && burgerToggle.checked) {
      closeMenu();
    }
  });
}