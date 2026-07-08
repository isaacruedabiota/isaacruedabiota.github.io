# Portafolio de Isaac

Portafolio web personal para mostrar proyectos. Hecho con **HTML, CSS y JavaScript puro** — sin instalaciones ni frameworks.

## ▶️ Cómo verlo

Simplemente **abre `index.html`** con doble clic en tu navegador.

> Consejo: si usas VS Code, instala la extensión **Live Server** y pulsa
> "Go Live" para recargar automáticamente cada vez que guardes cambios.

## ✏️ Qué personalizar

Todo el contenido está en `index.html`. Busca y reemplaza:

| Qué | Dónde |
|-----|-------|
| Tu nombre | Logo del nav, hero, footer |
| Texto de presentación | Sección `#inicio` (hero) |
| Tu historia | Sección `#sobre-mi` |
| Experiencia, formación y certificaciones | Sección `#experiencia` (fechas, puestos, estudios) |
| Tus proyectos | Sección `#proyectos` (4 tarjetas de ejemplo) |
| Tus tecnologías | Sección `#skills` (los `<span class="chip">`) |
| Tu correo y redes | Sección `#contacto` |

> **Importante:** en la sección de experiencia hay fechas y datos de ejemplo
> (`Año — Año`, ciclo, certificaciones). Sustitúyelos por los reales de tu
> LinkedIn.

### Cambiar colores
Paleta actual: **Grafito & Cian**. En `css/styles.css`, arriba del todo,
edita las variables:
```css
--brand: #22d3ee;   /* acento cian (tema oscuro) */
/* en :root[data-theme="light"] el acento es #0891b2 para mejor contraste */
```

### Añadir tu foto
1. Copia tu imagen en `assets/` (ej. `assets/foto.jpg`).
2. En `index.html`, dentro de `.about__photo`, reemplaza el
   `<span class="about__photo-placeholder">...` por:
   ```html
   <img src="assets/foto.jpg" alt="Isaac" style="width:100%;height:100%;object-fit:cover;border-radius:22px;">
   ```

### Añadir tu CV
Coloca tu PDF como `assets/cv.pdf` (el botón "Descargar CV" ya apunta ahí).

### Imágenes de proyectos
Cada tarjeta usa un degradado de color. Para poner una imagen real,
reemplaza el `<div class="card__media">` por una `<img>` como la de la foto.

## 📁 Estructura

```
WEB/
├── index.html      → contenido y estructura
├── css/styles.css  → estilos y tema claro/oscuro
├── js/main.js      → tema, menú móvil, animaciones
├── assets/         → tus imágenes, foto y CV
└── README.md
```

## 🚀 Publicarlo gratis (opcional)

- **GitHub Pages**: sube la carpeta a un repo y actívalo en Settings → Pages.
- **Netlify / Vercel**: arrastra la carpeta a su web y listo.

---
Hecho con cariño y código.
