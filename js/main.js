/* ============================================================
   Portafolio · Isaac
   Interacciones: idioma, tema, menú móvil, scroll reveal
   ============================================================ */

(function () {
  "use strict";

  /* ============================================================
     0. TRADUCCIONES (i18n)
     ============================================================ */
  var translations = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.journey": "Trayectoria",
      "nav.projects": "Proyectos",
      "nav.skills": "Skills",
      "nav.contact": "Contacto",

      "hero.eyebrow": "Programador",
      "hero.title": `Hola, soy <span class="grad hero__name">Isaac Rueda Biota</span>`,
      "hero.cta1": "Ver proyectos",
      "hero.cta2": "Contáctame",
      "hero.years": "años",
      "hero.experience": "de experiencia",
      "hero.technologies": "tecnologías",
      "hero.eager": "ganas de aprender",

      "about.eyebrow": "Sobre mí",
      "about.title": "Un poco sobre mí",
      "about.p1": `Soy un programador de {age} años apasionado por la tecnología y por resolver problemas reales con código. Me manejo tanto en back-end como en front-end y disfruto aprendiendo lenguajes y herramientas nuevas. Actualmente formo parte del equipo de <strong>Aitana</strong>, donde, entre otras cosas, desarrollo soluciones sobre Dynamics 365 Business Central.`,
      "about.p2": `Me defino por las ganas constantes de aprender y mejorar: cada proyecto es una oportunidad para crecer, cuidar los detalles y hacer las cosas un poco mejor que ayer. Fuera del código me apasiona el deporte —sobre todo el fútbol— y me gusta mantenerme activo entrenando con frecuencia.`,
      "about.cv": "Descargar CV",

      "exp.eyebrow": "Trayectoria",
      "exp.title": "Experiencia y formación",
      "exp.lead": "Mi recorrido profesional y académico.",
      "exp.expHeading": "💼 Experiencia",
      "exp.aitanaDate": "2024 — Actualidad",
      "exp.aitanaRole": "Desarrollador Business Central",
      "exp.aitanaText": `Empecé con 4 meses de formación en prácticas (2024) y fui creciendo: 3 meses a media jornada (4 h/día), un año a 5 h/día y, desde el <strong>15 de septiembre de 2025</strong>, a jornada completa. Desarrollo y personalizo soluciones sobre Microsoft Dynamics 365 Business Central: extensiones en AL, integraciones y mejoras a medida.`,
      "exp.coolmodDate": "2022 · 4 meses",
      "exp.coolmodRole": "Prácticas (FCT)",
      "exp.coolmodText": "Atención en recepción, mozo de almacén y montaje y reparación de ordenadores.",
      "exp.eduHeading": "🎓 Formación",
      "exp.iaRole": "Especialización en IA y Big Data",
      "exp.iaOrg": "Curso de especialización (FP)",
      "exp.iaText": "Inteligencia artificial, análisis y explotación de datos a gran escala.",
      "exp.damDate": "Sept 2022 — Jun 2024",
      "exp.damRole": "Desarrollo de Aplicaciones Multiplataforma (DAM)",
      "exp.damOrg": "Nota media: 8,53",
      "exp.damText": "Desarrollo de software multiplataforma, bases de datos, programación orientada a objetos y despliegue de aplicaciones.",
      "exp.smxDate": "Sept 2020 — Jun 2022",
      "exp.smxRole": "Sistemas Microinformáticos y Redes (SMX)",
      "exp.smxOrg": "Nota media: 8,75",
      "exp.smxText": "Montaje y mantenimiento de equipos, redes y sistemas operativos.",
      "exp.esoDate": "Educación",
      "exp.esoRole": "Educación Secundaria Obligatoria (ESO)",
      "exp.certHeading": "📜 Certificaciones",
      "exp.odiloHeading": "✨ Formación complementaria · ODILO",
      "exp.odilo1": "Innovación y creatividad",
      "exp.odilo2": "Capacidad analítica y de síntesis",
      "exp.odilo3": "Adaptación al cambio",

      "proj.eyebrow": "Portafolio",
      "proj.title": "Proyectos destacados",
      "proj.lead": "Una selección de cosas que he construido.",
      "proj.c1title": "Extensión AL a medida",
      "proj.c1text": "Breve descripción de qué resuelve la extensión y el resultado que aportó al cliente.",
      "proj.c2title": "Nombre del Proyecto 2",
      "proj.c2text": "Breve descripción de qué hace el proyecto y qué problema resuelve.",
      "proj.c3badge": "Integración",
      "proj.c3title": "Nombre del Proyecto 3",
      "proj.c3text": "Breve descripción de qué hace el proyecto y qué problema resuelve.",
      "proj.c4title": "Nombre del Proyecto 4",
      "proj.c4text": "Breve descripción de qué hace el proyecto y qué problema resuelve.",
      "proj.more": "Ver más ↗",
      "proj.demo": "Ver demo ↗",
      "proj.code": "Código ↗",

      "skills.eyebrow": "Tecnologías",
      "skills.techLabel": "Tecnologías",
      "skills.patterns": "Patrones de diseño",
      "skills.softLabel": "Habilidades",
      "skills.teamwork": "Trabajo en equipo",
      "skills.leadership": "Liderazgo colaborativo",
      "skills.analytical": "Capacidad analítica",
      "skills.adaptability": "Adaptación al cambio",

      "contact.title": "¿Hablamos?",
      "contact.text": "Estoy abierto a nuevas oportunidades y proyectos. Escríbeme y te respondo pronto.",
      "contact.btn": "Enviar correo",

      "footer.copy": "Hecho con cariño y código.",
      "footer.top": "Volver arriba ↑"
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.journey": "Journey",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",

      "hero.eyebrow": "Developer",
      "hero.title": `Hi, I'm <span class="grad hero__name">Isaac Rueda Biota</span>`,
      "hero.cta1": "View projects",
      "hero.cta2": "Get in touch",
      "hero.years": "years old",
      "hero.experience": "of experience",
      "hero.technologies": "technologies",
      "hero.eager": "eager to learn",

      "about.eyebrow": "About me",
      "about.title": "A bit about me",
      "about.p1": `I'm a {age}-year-old software developer passionate about technology and solving real problems with code. I'm comfortable with both back-end and front-end, and I love learning new languages and tools. I'm currently part of the team at <strong>Aitana</strong>, where, among other things, I develop solutions on Dynamics 365 Business Central.`,
      "about.p2": `I'm defined by a constant drive to learn and improve: every project is a chance to grow, care about the details and do things a little better than yesterday. Away from the keyboard I'm passionate about sport —especially football— and I like to stay active by training regularly.`,
      "about.cv": "Download CV",

      "exp.eyebrow": "Journey",
      "exp.title": "Experience & Education",
      "exp.lead": "My professional and academic path.",
      "exp.expHeading": "💼 Experience",
      "exp.aitanaDate": "2024 — Present",
      "exp.aitanaRole": "Business Central Developer",
      "exp.aitanaText": `I started with a 4-month internship (2024) and grew from there: 3 months part-time (4 h/day), one year at 5 h/day and, since <strong>15 September 2025</strong>, full-time. I develop and customize solutions on Microsoft Dynamics 365 Business Central: AL extensions, integrations and tailor-made improvements.`,
      "exp.coolmodDate": "2022 · 4 months",
      "exp.coolmodRole": "Internship",
      "exp.coolmodText": "Front-desk support, warehouse assistant, and building and repairing computers.",
      "exp.eduHeading": "🎓 Education",
      "exp.iaRole": "AI & Big Data Specialization",
      "exp.iaOrg": "Vocational specialization course",
      "exp.iaText": "Artificial intelligence, analysis and processing of large-scale data.",
      "exp.damDate": "Sep 2022 — Jun 2024",
      "exp.damRole": "Multiplatform Application Development (DAM)",
      "exp.damOrg": "GPA: 8.53",
      "exp.damText": "Cross-platform software development, databases, object-oriented programming and application deployment.",
      "exp.smxDate": "Sep 2020 — Jun 2022",
      "exp.smxRole": "Microcomputer Systems & Networks (SMX)",
      "exp.smxOrg": "GPA: 8.75",
      "exp.smxText": "Assembly and maintenance of equipment, networks and operating systems.",
      "exp.esoDate": "Education",
      "exp.esoRole": "Compulsory Secondary Education (ESO)",
      "exp.certHeading": "📜 Certifications",
      "exp.odiloHeading": "✨ Additional training · ODILO",
      "exp.odilo1": "Innovation & creativity",
      "exp.odilo2": "Analytical & synthesis skills",
      "exp.odilo3": "Adaptability to change",

      "proj.eyebrow": "Portfolio",
      "proj.title": "Featured projects",
      "proj.lead": "A selection of things I've built.",
      "proj.c1title": "Custom AL extension",
      "proj.c1text": "Brief description of what the extension solves and the value it brought to the client.",
      "proj.c2title": "Project name 2",
      "proj.c2text": "Brief description of what the project does and what problem it solves.",
      "proj.c3badge": "Integration",
      "proj.c3title": "Project name 3",
      "proj.c3text": "Brief description of what the project does and what problem it solves.",
      "proj.c4title": "Project name 4",
      "proj.c4text": "Brief description of what the project does and what problem it solves.",
      "proj.more": "View more ↗",
      "proj.demo": "Live demo ↗",
      "proj.code": "Code ↗",

      "skills.eyebrow": "Technologies",
      "skills.techLabel": "Technologies",
      "skills.patterns": "Design patterns",
      "skills.softLabel": "Soft skills",
      "skills.teamwork": "Teamwork",
      "skills.leadership": "Collaborative leadership",
      "skills.analytical": "Analytical thinking",
      "skills.adaptability": "Adaptability to change",

      "contact.title": "Let's work together",
      "contact.text": "I'm open to new opportunities and projects. Feel free to reach out and I'll get back to you soon.",
      "contact.btn": "Send email",

      "footer.copy": "Made with love and code.",
      "footer.top": "Back to top ↑"
    }
  };

  var docTitle = { es: "Isaac Rueda · Programador", en: "Isaac Rueda · Software Developer" };

  // Edad calculada automáticamente desde la fecha de nacimiento: 22/07/2004
  function computeAge() {
    var b = new Date(2004, 6, 22); // 6 = julio (los meses van de 0 a 11)
    var now = new Date();
    var age = now.getFullYear() - b.getFullYear();
    var m = now.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
    return age;
  }
  var AGE = computeAge();

  // Experiencia contada automáticamente desde marzo de 2024 (años, meses y días)
  function computeExperience(lang) {
    var start = new Date(2024, 2, 1); // 2 = marzo (los meses van de 0 a 11)
    var now = new Date();
    var y = now.getFullYear() - start.getFullYear();
    var m = now.getMonth() - start.getMonth();
    var d = now.getDate() - start.getDate();
    if (d < 0) {
      m -= 1;
      d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // días del mes anterior
    }
    if (m < 0) { y -= 1; m += 12; }
    var yl = lang === "en" ? "y" : "a";
    return y + yl + " " + m + "m " + d + "d";
  }

  var root = document.documentElement;
  var langToggle = document.getElementById("langToggle");

  function applyLanguage(lang) {
    if (!translations[lang]) lang = "es";
    var dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key].replace(/\{age\}/g, AGE);
    });
    root.setAttribute("lang", lang);
    document.title = docTitle[lang];
    // El botón muestra el idioma AL QUE se cambia
    langToggle.textContent = lang === "es" ? "EN" : "ES";
    // Experiencia (las unidades cambian según el idioma)
    var expEl = document.getElementById("expStat");
    if (expEl) expEl.textContent = computeExperience(lang);
    localStorage.setItem("lang", lang);
  }

  // Idioma inicial: guardado, o el del navegador, o español
  var savedLang = localStorage.getItem("lang");
  var browserLang = (navigator.language || "es").slice(0, 2);
  applyLanguage(savedLang || (browserLang === "en" ? "en" : "es"));

  langToggle.addEventListener("click", function () {
    applyLanguage(root.getAttribute("lang") === "es" ? "en" : "es");
  });

  /* ============================================================
     1. Tema claro / oscuro
     ============================================================ */
  var themeToggle = document.getElementById("themeToggle");
  var savedTheme = localStorage.getItem("theme");
  var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", savedTheme || (prefersLight ? "light" : "dark"));

  themeToggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ============================================================
     2. Nav con fondo al hacer scroll
     ============================================================ */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ============================================================
     3. Menú móvil (hamburguesa)
     ============================================================ */
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    burger.classList.toggle("open", open);
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      burger.classList.remove("open");
    });
  });

  /* ============================================================
     4. Animaciones al hacer scroll (reveal)
     ============================================================ */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
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
      el.style.transitionDelay = (i % 4) * 60 + "ms";
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ============================================================
     5. Año automático en el footer
     ============================================================ */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ============================================================
     6. Edad automática en el hero
     ============================================================ */
  var ageStat = document.getElementById("ageStat");
  if (ageStat) ageStat.textContent = AGE;
})();
