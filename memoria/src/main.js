import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", () => {
  const appStoreBtn = document.querySelector(
    ".download-cta-section__button--app-store"
  );
  const googlePlayBtn = document.querySelector(
    ".download-cta-section__button--google-play"
  );

  [appStoreBtn, googlePlayBtn].forEach((btn) => {
    if (!btn) return;

    const ctaButtons = document.querySelectorAll(
      ".cta-banner__buttons-group a, .cta-banner__buttons-group button"
    );
    btn.addEventListener("click", (e) => e.preventDefault());

    tippy(btn, {
      content: "Coming soon",
      placement: "top",
      trigger: "click",
      hideOnClick: true,
    });
    ctaButtons.forEach((btn) => {
      if (btn) {
        tippy(btn, {
          content: "Coming soon",
          placement: "bottom",
          trigger: "click",
          theme: "my-tooltip",
          animation: "scale",
        });
        btn.addEventListener("click", (e) => {
          e.preventDefault();
        });
      }
    });

    AOS.init({
      duration: 1000,
      once: true,
    });
  });
});
