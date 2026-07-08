/* ============================================================
   Portafolio · Isaac
   Interacciones: tema, menú móvil, scroll reveal, nav activa
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. Tema claro / oscuro ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  // Aplica el tema guardado, o el que prefiera el sistema
  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", savedTheme || (prefersLight ? "light" : "dark"));

  themeToggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- 2. Nav con fondo al hacer scroll ---------- */
  const nav = document.getElementById("nav");
  const onScroll = function () {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 3. Menú móvil (hamburguesa) ---------- */
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", function () {
    const open = navLinks.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });

  // Cierra el menú al hacer clic en un enlace
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      burger.classList.remove("open");
    });
  });

  /* ---------- 4. Animaciones al hacer scroll (reveal) ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach(function (el, i) {
      // Pequeño escalonado para elementos hermanos
      el.style.transitionDelay = (i % 4) * 60 + "ms";
      observer.observe(el);
    });
  } else {
    // Fallback: muestra todo si no hay soporte
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- 5. Año automático en el footer ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
