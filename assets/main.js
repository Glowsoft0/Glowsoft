document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }));
  }
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const banner = document.querySelector("[data-cookie-banner]");
  const saved = localStorage.getItem("glowsoft-cookie-choice");
  if (banner && !saved) banner.hidden = false;
  document.querySelectorAll(".cookie-accept").forEach(b => b.addEventListener("click", () => {
    localStorage.setItem("glowsoft-cookie-choice", "accepted"); if (banner) banner.hidden = true;
  }));
  document.querySelectorAll(".cookie-reject").forEach(b => b.addEventListener("click", () => {
    localStorage.setItem("glowsoft-cookie-choice", "essential"); if (banner) banner.hidden = true;
  }));
});