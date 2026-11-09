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

  /* Add REAL, permissioned client reviews below. The section stays hidden while the list is empty.
     Example: {quote:"...", name:"Jane Doe", role:"Operations Lead, Company"} */
  const TESTIMONIALS = [];
  const tSec = document.querySelector("[data-testimonials]");
  if (tSec && TESTIMONIALS.length) {
    const grid = tSec.querySelector(".t-grid");
    TESTIMONIALS.forEach(t => {
      const f = document.createElement("figure"); f.className = "t-card";
      const p = document.createElement("p"); p.textContent = "\u201C" + t.quote + "\u201D";
      const b = document.createElement("b"); b.textContent = t.name;
      const s = document.createElement("span"); s.textContent = t.role;
      f.append(p, b, s); grid.appendChild(f);
    });
    tSec.hidden = false;
  }
});