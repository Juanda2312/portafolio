# claude.md — Portafolio personal de Juan David Tapiero Montoya

Este archivo es tu única fuente de verdad. Léelo completo una vez y luego trabaja **un paso del roadmap (sección 8) a la vez**.

---

## 1. Reglas del agente (obligatorias)

1. **Un paso a la vez.** Haz solo el paso indicado, ejecuta su "Verifica", informa "Paso N completado" y **detente**. No avances hasta que el usuario diga "continúa".
2. **Copia textos y código tal cual** desde las secciones 6 y 7. No reescribas, no traduzcas, no "mejores" la redacción, no agregues secciones, proyectos, métricas ni enlaces que no estén aquí.
3. **Cero dependencias:** sin frameworks, sin npm, sin CDN, sin fuentes externas, sin imágenes en la página (solo `favicon.svg`; única excepción: `og-image.png`, usada solo en la vista previa al compartir), sin jQuery. Todo es HTML, CSS y JavaScript puros, abrible con doble clic en `index.html`.
4. **Sin estilos en línea** (`style="..."`) y sin `!important` (excepto en el bloque `prefers-reduced-motion`).
5. Código: indentación de 2 espacios, comillas dobles, punto y coma en JS, nombres de clases e IDs en inglés y `kebab-case`.
6. **Idioma del contenido:** el texto en **español vive en `index.html`** (es el idioma por defecto). El texto en **inglés vive solo en `js/translations.js`**. Cada elemento traducible tiene un atributo `data-i18n="clave"` y la clave debe existir en `translations.js`.
7. Si algo no está especificado aquí, **pregunta al usuario** en lugar de inventarlo.
8. **Nunca ejecutes `git push`** ni cambies configuración de GitHub sin pedir confirmación al usuario.

## 2. Decisiones ya tomadas (no preguntes de nuevo)

| Tema | Decisión |
|---|---|
| Estilo visual | Mixto: modo oscuro corporativo sobrio con detalles tipo terminal (fuente monoespaciada en etiquetas, prompt `$`, cursor parpadeante) |
| Tecnología | HTML/CSS/JS puro, sin build |
| Proyectos destacados | Marketplace Gamer, PropTech, ListaMercado, Sistema de Proveedores y Productos (en ese orden) |
| Idiomas | Bilingüe ES (por defecto) / EN con botón de cambio, recordado en `localStorage` |
| Contacto | Correo, LinkedIn y GitHub. Nada más (sin formulario, sin WhatsApp, sin CV) |
| Extras | Incluir certificaciones e idiomas. **Sin foto** |
| Despliegue | GitHub Pages, sin dominio propio |
| Vista previa al compartir | Etiquetas Open Graph y canonical en index.html, solo en español, con una imagen `assets/og-image.png` (1200x630 px) usada solo para esto |

## 3. Estructura exacta de archivos

```
portafolio/
├── index.html
├── claude.md
├── README.md
├── .nojekyll
├── assets/
│   ├── favicon.svg
│   └── og-image.png
├── css/
│   ├── variables.css
│   ├── base.css
│   └── components.css
├── js/
│   ├── translations.js
│   └── main.js
└── tools/
    └── check-i18n.js
```

No crees ningún otro archivo ni carpeta.

## 4. Directrices de diseño

**Paleta (usa siempre `var(--nombre)`, nunca HEX sueltos en `base.css` ni `components.css`):**

| Variable | HEX | Uso |
|---|---|---|
| `--bg` | `#0d1117` | Fondo de la página |
| `--bg-elevated` | `#161b22` | Paneles, terminal, caja de datos |
| `--bg-card` | `#1c232d` | Tarjetas, chips |
| `--border` | `#30363d` | Bordes |
| `--text` | `#e6edf3` | Texto principal |
| `--text-muted` | `#9da7b3` | Texto secundario |
| `--accent` | `#3fb950` | Verde terminal: acentos, botón primario, viñetas |
| `--accent-hover` | `#56d364` | Hover del acento |
| `--link` | `#58a6ff` | Enlaces y claves en la terminal |

**Tipografía:** solo fuentes del sistema (ver `variables.css`). Títulos y cuerpo en `--font-sans`; etiquetas, índices de sección, tags, prompt y terminal en `--font-mono`.

**Reglas visuales:**
- Máximo ancho de contenido 1080 px, centrado. Bordes redondeados de 10 px en paneles y 8 px en botones.
- Una sola columna en pantallas de 760 px o menos (mobile first en la práctica: verifica ambas).
- Contraste: texto siempre `--text` o `--text-muted` sobre `--bg`, `--bg-elevated` o `--bg-card`. El botón primario usa fondo `--accent` con texto `#0d1117`.
- Animación permitida: solo el parpadeo del cursor `_` y transiciones de 150 ms en hover. Respetar `prefers-reduced-motion`.
- Accesibilidad: un solo `<h1>`, `lang` correcto, `:focus-visible` visible, `aria-label` en botones sin texto, `rel="noopener noreferrer"` en enlaces con `target="_blank"`.

## 5. Contenido: dónde está

Todo el copywriting exacto está dentro de los bloques de código de las secciones 6 y 7:
- **Español:** dentro de `index.html` (sección 6.3).
- **Inglés:** dentro de `js/translations.js` (sección 6.4).

---

## 6. Archivos con contenido exacto

### 6.1 `assets/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0d1117"/>
  <rect x="2" y="2" width="60" height="60" rx="10" fill="none" stroke="#30363d" stroke-width="2"/>
  <text x="32" y="42" font-family="monospace" font-size="28" font-weight="700" fill="#3fb950" text-anchor="middle">&gt;_</text>
</svg>
```

### 6.2 `css/variables.css`

```css
:root {
  --bg: #0d1117;
  --bg-elevated: #161b22;
  --bg-card: #1c232d;
  --border: #30363d;
  --text: #e6edf3;
  --text-muted: #9da7b3;
  --accent: #3fb950;
  --accent-hover: #56d364;
  --accent-soft: rgba(63, 185, 80, 0.12);
  --link: #58a6ff;

  --dot-red: #ff5f56;
  --dot-yellow: #ffbd2e;
  --dot-green: #27c93f;

  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;

  --radius: 10px;
  --radius-sm: 8px;
  --max-width: 1080px;
  --header-height: 64px;
  --transition: 150ms ease;
}
```

### 6.3 `index.html` (se escribe por bloques; cada bloque se agrega al final del archivo)

```html
<!-- ===== BLOCK H1: head + header (el archivo termina con <main id="main">) ===== -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Juan David Tapiero Montoya | Desarrollador Backend y Móvil</title>
  <meta name="description" content="Portafolio de Juan David Tapiero Montoya, estudiante de Ingeniería de Sistemas y Computación y desarrollador junior backend con Java y Spring Boot y móvil con Flutter.">
  <meta name="theme-color" content="#0d1117">
  <link rel="canonical" href="https://juanda2312.github.io/portafolio/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Juan David Tapiero Montoya">
  <meta property="og:title" content="Juan David Tapiero Montoya | Desarrollador Backend y Móvil">
  <meta property="og:description" content="Portafolio de Juan David Tapiero Montoya, estudiante de Ingeniería de Sistemas y Computación y desarrollador junior backend con Java y Spring Boot y móvil con Flutter.">
  <meta property="og:url" content="https://juanda2312.github.io/portafolio/">
  <meta property="og:locale" content="es_CO">
  <meta property="og:image" content="https://juanda2312.github.io/portafolio/assets/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Portafolio de Juan David Tapiero Montoya, desarrollador backend y móvil">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/components.css">
  <script src="js/translations.js" defer></script>
  <script src="js/main.js" defer></script>
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#home">~/juan-david</a>
      <button id="nav-toggle" class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Abrir menú" data-i18n-aria="aria.menu">&#9776;</button>
      <nav id="nav-menu" class="nav-menu" aria-label="Navegación principal" data-i18n-aria="aria.nav">
        <ul class="nav-list">
          <li><a href="#about" data-i18n="nav.about">Sobre mí</a></li>
          <li><a href="#projects" data-i18n="nav.projects">Proyectos</a></li>
          <li><a href="#stack" data-i18n="nav.stack">Stack</a></li>
          <li><a href="#certifications" data-i18n="nav.certs">Certificaciones</a></li>
          <li><a href="#contact" data-i18n="nav.contact">Contacto</a></li>
        </ul>
        <button id="lang-toggle" class="lang-toggle" type="button" aria-label="Cambiar idioma" data-i18n-aria="aria.lang">EN</button>
      </nav>
    </div>
  </header>

  <main id="main">

<!-- ===== BLOCK H2: hero ===== -->
    <section id="home" class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="hero-prompt">$ whoami</p>
          <h1 class="hero-name">Juan David Tapiero Montoya</h1>
          <p class="hero-role" data-i18n="hero.role">Estudiante de Ingeniería de Sistemas y Computación · Desarrollador junior full stack y móvil</p>
          <p class="hero-tagline" data-i18n="hero.tagline">Construyo backends seguros con Java y Spring Boot y apps móviles con Flutter. Me gusta convertir la teoría de estructuras de datos en productos reales que funcionan.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#projects" data-i18n="hero.cta.projects">Ver proyectos</a>
            <a class="btn btn-secondary" href="#contact" data-i18n="hero.cta.contact">Contactar</a>
          </div>
        </div>
        <div class="terminal" aria-hidden="true">
          <div class="terminal-bar">
            <span class="dot"></span><span class="dot"></span><span class="dot"></span>
            <span class="terminal-title">focus.sh</span>
          </div>
          <pre class="terminal-body"><code><span class="t-prompt">$</span> cat focus.txt
<span class="t-key">backend</span>  <span class="t-val">Java · Spring Boot · JWT</span>
<span class="t-key">mobile</span>   <span class="t-val">Dart · Flutter</span>
<span class="t-key">data</span>     <span class="t-val">SQL · Docker</span>
<span class="t-prompt">$</span> <span class="cursor">_</span></code></pre>
        </div>
      </div>
    </section>

<!-- ===== BLOCK H3: about ===== -->
    <section id="about" class="section">
      <div class="container">
        <div class="section-head"><span class="section-index">01</span><h2 data-i18n="about.title">Sobre mí</h2></div>
        <div class="about-grid">
          <div class="about-text">
            <p data-i18n="about.p1">Soy estudiante de Ingeniería de Sistemas y Computación en la Universidad del Quindío, en Armenia, Colombia. Mi enfoque principal es el backend: APIs REST con Spring Boot, seguridad con JWT y roles, y modelos de dominio con DDD y Arquitectura Hexagonal.</p>
            <p data-i18n="about.p2">También desarrollo apps móviles con Flutter y Dart, pensadas para funcionar sin conexión y guardar sus datos de forma local. Disfruto trabajar en equipo, escribir pruebas y documentar mis APIs con Swagger.</p>
          </div>
          <dl class="about-facts">
            <div><dt>location</dt><dd>Armenia, Colombia</dd></div>
            <div><dt>university</dt><dd>Universidad del Quindío</dd></div>
            <div><dt>degree</dt><dd data-i18n="about.degree">Ingeniería de Sistemas y Computación</dd></div>
            <div><dt>focus</dt><dd data-i18n="about.focus">Backend y móvil</dd></div>
          </dl>
        </div>
      </div>
    </section>

<!-- ===== BLOCK H4a: projects (apertura + tarjetas 1 y 2) ===== -->
    <section id="projects" class="section">
      <div class="container">
        <div class="section-head"><span class="section-index">02</span><h2 data-i18n="projects.title">Proyectos destacados</h2></div>
        <p class="section-lead" data-i18n="projects.lead">Una selección de proyectos que muestran mi enfoque en backend, seguridad y apps móviles.</p>
        <div class="projects-grid">

          <article class="card">
            <header class="card-header">
              <p class="card-kind" data-i18n="p1.kind">Full stack · Marketplace multi-vendedor</p>
              <h3 class="card-title">E-Commerce Marketplace Gamer</h3>
            </header>
            <p class="card-desc" data-i18n="p1.desc">Marketplace multi-vendedor de productos gaming (periféricos, mobiliario de setup, juegos físicos, licencias digitales y combos), construido en equipo para Programación Avanzada / Ingeniería de Software en la Universidad del Quindío. Full stack con Angular, Spring Boot y MariaDB, bajo Arquitectura Hexagonal y Domain-Driven Design.</p>
            <ul class="card-bullets">
              <li data-i18n="p1.b1">Modelo de dominio rico: raíces de agregado, objetos de valor como records de Java y reglas de negocio protegidas (stock nunca negativo, reembolso dentro de 48 h, una reseña por compra).</li>
              <li data-i18n="p1.b2">37 casos de uso: compras, catálogo, combos, reseñas y puntos, wishlist, notificaciones, cuentas y reportes.</li>
              <li data-i18n="p1.b3">Seguridad con Spring Security y JWT, roles COMPRADOR y VENDEDOR, contraseñas con BCrypt y la identidad del usuario siempre tomada del token.</li>
              <li data-i18n="p1.b4">API REST documentada con Swagger, con búsqueda paginada de catálogo y reportes de ventas resueltos en la base de datos.</li>
              <li data-i18n="p1.b5">Pruebas con @DataJpaTest, endpoints protegidos (401 / 403 / 201) y una prueba de integración de punta a punta con MockMvc.</li>
            </ul>
            <ul class="tag-list">
              <li>Java 21</li><li>Spring Boot</li><li>Spring Security</li><li>JWT</li><li>Angular</li><li>MariaDB</li><li>DDD</li><li>Swagger</li>
            </ul>
            <a class="card-link" href="https://github.com/ShanT237/EcommerceProductosGamer" target="_blank" rel="noopener noreferrer"><span data-i18n="projects.view">Ver en GitHub</span> →</a>
          </article>

          <article class="card">
            <header class="card-header">
              <p class="card-kind" data-i18n="p2.kind">Full stack · Gestión inmobiliaria</p>
              <h3 class="card-title">PropTech</h3>
            </header>
            <p class="card-desc" data-i18n="p2.desc">Sistema full stack que va más allá del CRUD: gestiona inmuebles, clientes, asesores, visitas y operaciones, y analiza el comportamiento comercial. Sus colecciones principales son implementaciones propias, sin java.util.</p>
            <ul class="card-bullets">
              <li data-i18n="p2.b1">Arquitectura en capas: frontend en Angular 17 y API REST con Spring Boot 3 (Java 21), documentada con Swagger UI.</li>
              <li data-i18n="p2.b2">Estructuras de datos con propósito: árbol AVL para precios y rankings, grafo con BFS para relaciones cliente–inmueble, pila para deshacer y colas FIFO y de prioridad para visitas y alertas.</li>
              <li data-i18n="p2.b3">Motor de recomendaciones con puntaje de 0 a 100, alertas automáticas y detección de comportamientos inusuales.</li>
              <li data-i18n="p2.b4">PropBot: asistente con IA (LLM vía OpenRouter) que responde con datos en vivo de la plataforma, con panel de administración y portal del cliente.</li>
            </ul>
            <ul class="tag-list">
              <li>Java 21</li><li>Spring Boot 3</li><li>Angular 17</li><li>TypeScript</li><li>Maven</li><li>Swagger</li>
            </ul>
            <a class="card-link" href="https://github.com/Juanda2312/PropTech" target="_blank" rel="noopener noreferrer"><span data-i18n="projects.view">Ver en GitHub</span> →</a>
          </article>

<!-- ===== BLOCK H4b: projects (tarjetas 3 y 4 + cierre de la sección) ===== -->
          <article class="card">
            <header class="card-header">
              <p class="card-kind" data-i18n="p3.kind">Móvil · App Android sin conexión</p>
              <h3 class="card-title">ListaMercado</h3>
            </header>
            <p class="card-desc" data-i18n="p3.desc">App Android 100% offline para organizar el mercado: gestiona productos y supermercados, arma la lista con totales por supermercado y controla un presupuesto con el saldo restante. Hecha con Flutter, sin internet.</p>
            <ul class="card-bullets">
              <li data-i18n="p3.b1">Búsqueda inteligente, sin distinguir mayúsculas ni tildes, y filtro por supermercado.</li>
              <li data-i18n="p3.b2">Dos vistas, plana y por supermercado, con tachado sincronizado entre ambas.</li>
              <li data-i18n="p3.b3">Deslizar para quitar ítems con opción de deshacer, y presupuesto opcional con saldo en verde o rojo.</li>
              <li data-i18n="p3.b4">APK de release firmado, sin permiso de internet y con todos los datos guardados localmente.</li>
            </ul>
            <ul class="tag-list">
              <li>Flutter</li><li>Dart</li><li>Provider</li><li>Android</li>
            </ul>
            <a class="card-link" href="https://github.com/Juanda2312/ListaMercado" target="_blank" rel="noopener noreferrer"><span data-i18n="projects.view">Ver en GitHub</span> →</a>
          </article>

          <article class="card">
            <header class="card-header">
              <p class="card-kind" data-i18n="p4.kind">Bases de datos · App de escritorio</p>
              <h3 class="card-title">Sistema de Gestión de Proveedores y Productos</h3>
            </header>
            <p class="card-desc" data-i18n="p4.desc">Proyecto final de Bases de Datos I en la Universidad del Quindío: aplicación de escritorio que registra qué proveedores pueden suministrar qué productos, hecha sin frameworks (biblioteca estándar de Python y librerías puntuales) sobre una base de datos normalizada en SQL Server. Proyecto en equipo.</p>
            <ul class="card-bullets">
              <li data-i18n="p4.b1">Diseño relacional: 9 tablas normalizadas, diagrama entidad-relación, diagrama relacional y diccionario de datos; la relación muchos a muchos proveedor–producto se resuelve con una tabla intermedia.</li>
              <li data-i18n="p4.b2">SQL avanzado: consultas JOIN de varias tablas y subconsultas, todas parametrizadas para evitar inyección SQL.</li>
              <li data-i18n="p4.b3">Acceso por roles (administrador, usuarios tradicionales y esporádicos), contraseñas con PBKDF2 y bitácora de entradas y salidas.</li>
              <li data-i18n="p4.b4">Reportes en PDF con filtros elegidos por el usuario, arquitectura en tres capas y SQL Server desplegado con Docker.</li>
            </ul>
            <ul class="tag-list">
              <li>Python</li><li>Tkinter</li><li>SQL Server</li><li>Docker</li><li>reportlab</li>
            </ul>
            <a class="card-link" href="https://github.com/ShanT237/relational-inventory-db" target="_blank" rel="noopener noreferrer"><span data-i18n="projects.view">Ver en GitHub</span> →</a>
          </article>

        </div>
      </div>
    </section>

<!-- ===== BLOCK H5: stack ===== -->
    <section id="stack" class="section">
      <div class="container">
        <div class="section-head"><span class="section-index">03</span><h2 data-i18n="stack.title">Stack tecnológico</h2></div>
        <div class="stack-grid">
          <div class="stack-group">
            <h3 class="stack-title">Backend</h3>
            <ul class="chip-list"><li>Java 21</li><li>Spring Boot 3</li><li>Spring Security</li><li>JWT</li><li>REST API</li><li>Swagger</li><li>Maven</li><li>Gradle</li></ul>
          </div>
          <div class="stack-group">
            <h3 class="stack-title" data-i18n="stack.mobile">Móvil</h3>
            <ul class="chip-list"><li>Flutter</li><li>Dart</li><li>Provider</li><li>Android Studio</li></ul>
          </div>
          <div class="stack-group">
            <h3 class="stack-title">Frontend</h3>
            <ul class="chip-list"><li>Angular 17</li><li>TypeScript</li><li>React</li></ul>
          </div>
          <div class="stack-group">
            <h3 class="stack-title" data-i18n="stack.databases">Bases de datos</h3>
            <ul class="chip-list"><li>MariaDB</li><li>MySQL</li><li>PostgreSQL</li><li>SQL Server</li></ul>
          </div>
          <div class="stack-group">
            <h3 class="stack-title" data-i18n="stack.tools">Herramientas</h3>
            <ul class="chip-list"><li>Docker</li><li>Git</li></ul>
          </div>
          <div class="stack-group">
            <h3 class="stack-title" data-i18n="stack.languages">Otros lenguajes</h3>
            <ul class="chip-list"><li>Python</li><li>C++</li><li>Elixir</li></ul>
          </div>
          <div class="stack-group stack-group-wide">
            <h3 class="stack-title" data-i18n="stack.concepts">Conceptos</h3>
            <ul class="chip-list">
              <li data-i18n="stack.c1">Estructuras de datos y algoritmos</li>
              <li data-i18n="stack.c2">Diseño de APIs REST</li>
              <li data-i18n="stack.c3">DDD y Arquitectura Hexagonal</li>
              <li data-i18n="stack.c4">Seguridad con JWT</li>
              <li data-i18n="stack.c5">Pruebas unitarias y de integración</li>
              <li data-i18n="stack.c6">Programación orientada a objetos</li>
              <li data-i18n="stack.c7">Bases de datos relacionales</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

<!-- ===== BLOCK H6: certificaciones e idiomas ===== -->
    <section id="certifications" class="section">
      <div class="container">
        <div class="section-head"><span class="section-index">04</span><h2 data-i18n="certs.title">Certificaciones</h2></div>
        <div class="certs-grid">
          <ul class="cert-list">
            <li class="cert-item"><span class="cert-title">Full Stack Empresarial con Spring Boot y Angular</span><span class="cert-meta">Dev Senior Code · 2025</span></li>
            <li class="cert-item"><span class="cert-title">SQL: Curso completo de Bases de Datos</span><span class="cert-meta">Udemy · 2025</span></li>
          </ul>
          <div class="lang-block">
            <h3 class="stack-title" data-i18n="langs.title">Idiomas</h3>
            <ul class="chip-list">
              <li data-i18n="langs.es">Español · Nativo</li>
              <li data-i18n="langs.en">Inglés · B2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

<!-- ===== BLOCK H7: contacto + footer + cierre del archivo ===== -->
    <section id="contact" class="section">
      <div class="container">
        <div class="section-head"><span class="section-index">05</span><h2 data-i18n="contact.title">Contacto</h2></div>
        <p class="contact-lead" data-i18n="contact.lead">¿Tienes una oportunidad, una práctica o un proyecto en mente? Escríbeme.</p>
        <ul class="contact-list">
          <li><a class="btn btn-primary" href="https://mail.google.com/mail/?view=cm&amp;to=juandavidtapiero8@gmail.com" target="_blank" rel="noopener noreferrer">juandavidtapiero8@gmail.com</a></li>
          <li><a class="btn btn-secondary" href="https://www.linkedin.com/in/juan-david-tapiero-montoya-4834b02b3" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a class="btn btn-secondary" href="https://github.com/Juanda2312" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p><span data-i18n="footer.built">Hecho con HTML, CSS y JavaScript puro.</span> <span>© <span id="year">2026</span> Juan David Tapiero Montoya</span></p>
    </div>
  </footer>
</body>
</html>
```

> Nota para el agente: los comentarios `<!-- ===== BLOCK ... ===== -->` son solo marcadores del manifiesto. **No los copies** al archivo final. Entre H4a y H4b no hay cierre: las 4 tarjetas viven dentro del mismo `<div class="projects-grid">`.

### 6.4 `js/translations.js` (solo inglés; se escribe por bloques A–D dentro de un único objeto)

```js
// ===== BLOCK A: apertura + meta, aria, nav, hero, about =====
window.TRANSLATIONS_EN = {
  "meta.title": "Juan David Tapiero Montoya | Backend & Mobile Developer",
  "meta.description": "Portfolio of Juan David Tapiero Montoya, Systems and Computer Engineering student and junior developer: backend with Java and Spring Boot, mobile with Flutter.",

  "aria.menu": "Open menu",
  "aria.nav": "Main navigation",
  "aria.lang": "Change language",

  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.stack": "Stack",
  "nav.certs": "Certifications",
  "nav.contact": "Contact",

  "hero.role": "Systems and Computer Engineering student · Junior full stack & mobile developer",
  "hero.tagline": "I build secure backends with Java and Spring Boot and mobile apps with Flutter. I enjoy turning data-structure theory into real, working products.",
  "hero.cta.projects": "View projects",
  "hero.cta.contact": "Get in touch",

  "about.title": "About me",
  "about.p1": "I'm a Systems and Computer Engineering student at Universidad del Quindío in Armenia, Colombia. My main focus is backend development: REST APIs with Spring Boot, JWT and role-based security, and domain models built with DDD and Hexagonal Architecture.",
  "about.p2": "I also build mobile apps with Flutter and Dart, designed to work offline and store their data locally. I enjoy working in teams, writing tests and documenting my APIs with Swagger.",
  "about.degree": "Systems and Computer Engineering",
  "about.focus": "Backend & mobile",

// ===== BLOCK B: projects (cabecera) + p1 + p2 =====
  "projects.title": "Featured projects",
  "projects.lead": "A selection of projects that show my focus on backend, security and mobile apps.",
  "projects.view": "View on GitHub",

  "p1.kind": "Full stack · Multi-vendor marketplace",
  "p1.desc": "A multi-vendor marketplace for gaming products (peripherals, setup furniture, physical games, digital licenses and combos), built as a team project for Advanced Programming / Software Engineering at Universidad del Quindío. Full stack with Angular, Spring Boot and MariaDB, following Hexagonal Architecture and Domain-Driven Design.",
  "p1.b1": "Rich domain model: aggregate roots, value objects as Java records and protected business rules (stock never negative, refunds within 48 h, one review per purchase).",
  "p1.b2": "37 use cases: purchases, catalog, combos, reviews and loyalty points, wishlists, notifications, accounts and reports.",
  "p1.b3": "Security with Spring Security and JWT, COMPRADOR and VENDEDOR roles, BCrypt-hashed passwords and the user identity always taken from the token.",
  "p1.b4": "REST API documented with Swagger, with paginated catalog search and sales reports resolved in the database.",
  "p1.b5": "Testing with @DataJpaTest, secured endpoint tests (401 / 403 / 201) and an end-to-end integration test with MockMvc.",

  "p2.kind": "Full stack · Real estate management",
  "p2.desc": "A full stack real estate system that goes beyond CRUD: it manages properties, clients, advisors, visits and deals, and analyzes commercial behavior. Its core collections are custom implementations, without java.util.",
  "p2.b1": "Layered architecture: Angular 17 frontend and Spring Boot 3 REST API (Java 21), documented with Swagger UI.",
  "p2.b2": "Data structures with a purpose: AVL tree for prices and rankings, graph with BFS for client–property relations, stack for undo, and FIFO and priority queues for visits and alerts.",
  "p2.b3": "Recommendation engine that scores properties from 0 to 100, plus automatic alerts and unusual-behavior detection.",
  "p2.b4": "PropBot: an AI assistant (LLM via OpenRouter) that answers with live platform data, plus an admin dashboard and a client portal.",

// ===== BLOCK C: p3 + p4 =====
  "p3.kind": "Mobile · Offline Android app",
  "p3.desc": "A 100% offline Android app to organize grocery shopping: manage products and supermarkets, build a shopping list with totals per supermarket and track a budget with the remaining balance. Built with Flutter, no internet needed.",
  "p3.b1": "Smart search, case and accent insensitive, and filtering by supermarket.",
  "p3.b2": "Two list views, flat and by supermarket, with strike-through synced between them.",
  "p3.b3": "Swipe to remove items with undo, and an optional budget with the balance shown in green or red.",
  "p3.b4": "Signed release APK, no internet permission and all data stored locally.",

  "p4.kind": "Databases · Desktop app",
  "p4.desc": "Final project for Databases I at Universidad del Quindío: a desktop application that tracks which suppliers can provide which products, built without frameworks (Python standard library plus targeted libraries) on top of a normalized SQL Server database. Team project.",
  "p4.b1": "Relational design: 9 normalized tables, ER diagram, relational diagram and data dictionary; the many-to-many supplier–product relation is resolved with a junction table.",
  "p4.b2": "Advanced SQL: multi-table JOIN queries and subqueries, all parameterized to prevent SQL injection.",
  "p4.b3": "Role-based access (administrator, traditional and occasional users), PBKDF2-hashed passwords and a login/logout audit log.",
  "p4.b4": "PDF reports with user-selected filters, three-layer architecture and SQL Server set up with Docker.",

// ===== BLOCK D: stack, certs, langs, contact, footer + cierre =====
  "stack.title": "Tech stack",
  "stack.mobile": "Mobile",
  "stack.databases": "Databases",
  "stack.tools": "Tools",
  "stack.languages": "Other languages",
  "stack.concepts": "Concepts",
  "stack.c1": "Data structures & algorithms",
  "stack.c2": "REST API design",
  "stack.c3": "DDD & Hexagonal Architecture",
  "stack.c4": "JWT security",
  "stack.c5": "Unit & integration testing",
  "stack.c6": "Object-oriented programming",
  "stack.c7": "Relational databases",

  "certs.title": "Certifications",
  "langs.title": "Languages",
  "langs.es": "Spanish · Native",
  "langs.en": "English · B2",

  "contact.title": "Contact",
  "contact.lead": "Have an opportunity, an internship or a project in mind? Get in touch.",

  "footer.built": "Built with plain HTML, CSS and JavaScript."
};
```

> Nota para el agente: no copies los comentarios `// ===== BLOCK ... =====`. Verifica que no quede coma después de la última entrada (`"footer.built"`) y que todas las demás líneas terminen en coma.

### 6.5 `js/main.js` (dos IIFE independientes: PARTE 1 y PARTE 2)

```js
// ===== PARTE 1: cambio de idioma =====
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";
  var original = {};
  var originalAria = {};
  var originalTitle = document.title;
  var metaTag = document.querySelector('meta[name="description"]');
  var originalDescription = metaTag ? metaTag.getAttribute("content") : "";
  var currentLang = "es";

  function readSavedLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") {
        return saved;
      }
    } catch (error) {
      /* localStorage no disponible */
    }
    return "es";
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* localStorage no disponible */
    }
  }

  function captureOriginals() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      original[el.getAttribute("data-i18n")] = el.textContent;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      originalAria[el.getAttribute("data-i18n-aria")] = el.getAttribute("aria-label");
    });
  }

  function pick(key, spanishValue, lang) {
    var en = window.TRANSLATIONS_EN || {};
    if (lang === "en" && en[key] !== undefined) {
      return en[key];
    }
    return spanishValue;
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = pick(key, original[key], lang);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", pick(key, originalAria[key], lang));
    });

    document.title = pick("meta.title", originalTitle, lang);
    if (metaTag) {
      metaTag.setAttribute("content", pick("meta.description", originalDescription, lang));
    }

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.textContent = lang === "es" ? "EN" : "ES";
    }
  }

  function init() {
    captureOriginals();
    currentLang = readSavedLang();
    applyLanguage(currentLang);

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        currentLang = currentLang === "es" ? "en" : "es";
        saveLang(currentLang);
        applyLanguage(currentLang);
      });
    }
  }

  init();
})();

// ===== PARTE 2: menú móvil y año del footer =====
(function () {
  "use strict";

  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
```

### 6.6 `tools/check-i18n.js` (herramienta de verificación, solo para desarrollo)

```js
const fs = require("fs");
const vm = require("vm");

const html = fs.readFileSync("index.html", "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync("js/translations.js", "utf8"), sandbox);

const en = sandbox.window.TRANSLATIONS_EN || {};
const keys = new Set(["meta.title", "meta.description"]);
const re = /data-i18n(?:-aria)?="([^"]+)"/g;
let match;
while ((match = re.exec(html)) !== null) {
  keys.add(match[1]);
}

const missing = [...keys].filter((key) => !(key in en));
const unused = Object.keys(en).filter((key) => !keys.has(key));

console.log("Claves en HTML:", keys.size, "| Claves en EN:", Object.keys(en).length);
console.log("Faltan en EN:", missing.length ? missing.join(", ") : "ninguna");
console.log("Sobran en EN:", unused.length ? unused.join(", ") : "ninguna");
process.exit(missing.length ? 1 : 0);
```

---

## 7. Especificación de CSS

Escribe los valores tal como están. Todos los colores con `var(--...)`.

### 7.1 `css/base.css`

| Selector | Reglas |
|---|---|
| `*, *::before, *::after` | `box-sizing: border-box` |
| `html` | `scroll-behavior: smooth; scroll-padding-top: calc(var(--header-height) + 16px); -webkit-text-size-adjust: 100%` |
| `body` | `margin: 0; background: var(--bg); color: var(--text); font-family: var(--font-sans); font-size: 1rem; line-height: 1.65` |
| `h1, h2, h3, p, ul, dl, dd` | `margin: 0` |
| `h1, h2, h3` | `line-height: 1.2; font-weight: 700` |
| `p` | `margin-bottom: 1rem` |
| `ul` | `list-style: none; padding: 0` |
| `a` | `color: var(--link); text-decoration: none; transition: color var(--transition)` |
| `a:hover` | `text-decoration: underline` |
| `:focus-visible` | `outline: 2px solid var(--accent); outline-offset: 3px` |
| `.container` | `width: min(100% - 2rem, var(--max-width)); margin-inline: auto` |
| `.section` | `padding-block: 5rem` |
| `.section-head` | `display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem` |
| `.section-head::after` | `content: ""; flex: 1; height: 1px; background: var(--border)` |
| `.section-index` | `font-family: var(--font-mono); color: var(--accent); font-size: 0.95rem` |
| `.section-head h2` | `font-size: clamp(1.6rem, 3vw, 2.1rem)` |
| `.section-lead` | `color: var(--text-muted); max-width: 60ch; margin-bottom: 2rem` |
| `@media (prefers-reduced-motion: reduce)` | `html { scroll-behavior: auto }` y `*, *::before, *::after { animation: none !important; transition: none !important }` |

### 7.2 `css/components.css` — se escribe en tandas (agregar al final cada vez)

**Header y navegación**

| Selector | Reglas |
|---|---|
| `.site-header` | `position: sticky; top: 0; z-index: 100; height: var(--header-height); background: rgba(13, 17, 23, 0.85); backdrop-filter: blur(8px); border-bottom: 1px solid var(--border)` |
| `.header-inner` | `display: flex; align-items: center; justify-content: space-between; height: 100%` |
| `.brand` | `font-family: var(--font-mono); font-weight: 700; color: var(--text)` · hover: `color: var(--accent); text-decoration: none` |
| `.nav-menu` | `display: flex; align-items: center; gap: 1.5rem` |
| `.nav-list` | `display: flex; gap: 1.5rem` |
| `.nav-list a` | `color: var(--text-muted); font-size: 0.95rem` · hover: `color: var(--text); text-decoration: none` |
| `.lang-toggle` | `font-family: var(--font-mono); font-size: 0.85rem; background: transparent; color: var(--accent); border: 1px solid var(--accent); border-radius: 6px; padding: 0.25rem 0.6rem; cursor: pointer` · hover: `background: var(--accent-soft)` |
| `.nav-toggle` | `display: none; width: 40px; height: 40px; background: transparent; color: var(--text); border: 1px solid var(--border); border-radius: 6px; font-size: 1.2rem; cursor: pointer` |

**Botones, hero y terminal**

| Selector | Reglas |
|---|---|
| `.btn` | `display: inline-flex; align-items: center; padding: 0.65rem 1.2rem; border-radius: var(--radius-sm); font-weight: 600; font-size: 0.95rem; border: 1px solid transparent; cursor: pointer; transition: background var(--transition), border-color var(--transition), color var(--transition)` · hover: `text-decoration: none` |
| `.btn-primary` | `background: var(--accent); color: #0d1117` · hover: `background: var(--accent-hover)` |
| `.btn-secondary` | `background: transparent; color: var(--text); border-color: var(--border)` · hover: `border-color: var(--accent); color: var(--accent)` |
| `.hero` | `padding-block: 5rem 4rem` |
| `.hero-inner` | `display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: center` |
| `.hero-prompt` | `font-family: var(--font-mono); color: var(--accent); margin-bottom: 0.75rem` |
| `.hero-name` | `font-size: clamp(2.2rem, 5vw, 3.4rem); letter-spacing: -0.02em` |
| `.hero-role` | `font-family: var(--font-mono); color: var(--accent); font-size: 1rem; margin: 0.75rem 0 1rem` |
| `.hero-tagline` | `color: var(--text-muted); font-size: 1.1rem; max-width: 52ch` |
| `.hero-actions` | `display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem` |
| `.terminal` | `background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; font-family: var(--font-mono)` |
| `.terminal-bar` | `display: flex; align-items: center; gap: 0.4rem; padding: 0.6rem 0.9rem; background: var(--bg-card); border-bottom: 1px solid var(--border)` |
| `.dot` | `width: 12px; height: 12px; border-radius: 50%` · `.dot:nth-child(1) { background: var(--dot-red) }` · `(2) var(--dot-yellow)` · `(3) var(--dot-green)` |
| `.terminal-title` | `margin-left: auto; color: var(--text-muted); font-size: 0.75rem` |
| `.terminal-body` | `margin: 0; padding: 1.1rem 1.2rem; font-size: 0.9rem; line-height: 1.7; overflow-x: auto; white-space: pre` |
| `.t-prompt` | `color: var(--accent)` · `.t-key { color: var(--link) }` · `.t-val { color: var(--text) }` |
| `.cursor` | `display: inline-block; animation: blink 1s steps(1) infinite` |
| `@keyframes blink` | `50% { opacity: 0 }` |

**Sobre mí**

| Selector | Reglas |
|---|---|
| `.about-grid` | `display: grid; grid-template-columns: 1.5fr 1fr; gap: 3rem; align-items: start` |
| `.about-text p` | `max-width: 62ch` |
| `.about-facts` | `background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem 1.5rem; font-family: var(--font-mono); font-size: 0.9rem` |
| `.about-facts div` | `display: flex; gap: 1rem; padding-block: 0.5rem; border-bottom: 1px dashed var(--border)` · `:last-child { border-bottom: 0 }` |
| `.about-facts dt` | `color: var(--text-muted); min-width: 6.5rem` · `dt::after { content: ":" }` |

**Proyectos (tarjetas)**

| Selector | Reglas |
|---|---|
| `.projects-grid` | `display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem` |
| `.card` | `display: flex; flex-direction: column; gap: 1rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; transition: border-color var(--transition), transform var(--transition)` · hover: `border-color: var(--accent); transform: translateY(-2px)` |
| `.card-kind` | `font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); margin: 0 0 0.25rem` |
| `.card-title` | `font-size: 1.3rem` |
| `.card-desc` | `color: var(--text-muted); font-size: 0.95rem; margin: 0` |
| `.card-bullets` | `display: grid; gap: 0.5rem; font-size: 0.92rem` |
| `.card-bullets li` | `position: relative; padding-left: 1.1rem` · `::before { content: "▹"; position: absolute; left: 0; color: var(--accent) }` |
| `.tag-list` | `display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto` |
| `.tag-list li` | `font-family: var(--font-mono); font-size: 0.75rem; padding: 0.2rem 0.55rem; border-radius: 999px; background: var(--accent-soft); color: var(--accent)` |
| `.card-link` | `align-self: flex-start; font-weight: 600` |

**Stack, certificaciones e idiomas**

| Selector | Reglas |
|---|---|
| `.stack-grid` | `display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem` |
| `.stack-group, .lang-block` | `background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem` |
| `.stack-group-wide` | `grid-column: 1 / -1` |
| `.stack-title` | `font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.75rem` |
| `.chip-list` | `display: flex; flex-wrap: wrap; gap: 0.5rem` |
| `.chip-list li` | `background: var(--bg-card); border: 1px solid var(--border); border-radius: 6px; padding: 0.25rem 0.65rem; font-size: 0.88rem` |
| `.certs-grid` | `display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem; align-items: start` |
| `.cert-list` | `display: grid; gap: 1rem` |
| `.cert-item` | `display: grid; gap: 0.25rem; background: var(--bg-elevated); border: 1px solid var(--border); border-left: 3px solid var(--accent); border-radius: var(--radius); padding: 1rem 1.25rem` |
| `.cert-title` | `font-weight: 600` |
| `.cert-meta` | `font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted)` |

**Contacto y footer**

| Selector | Reglas |
|---|---|
| `.contact-lead` | `color: var(--text-muted); max-width: 56ch` |
| `.contact-list` | `display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem` |
| `.site-footer` | `border-top: 1px solid var(--border); padding-block: 2rem; color: var(--text-muted); font-size: 0.9rem` |
| `.site-footer p` | `margin: 0` |

**Responsive** (`@media (max-width: 760px)`, al final de `components.css`)

| Selector | Reglas |
|---|---|
| `.section` | `padding-block: 3.5rem` |
| `.hero` | `padding-block: 3rem 2.5rem` |
| `.hero-inner, .about-grid, .certs-grid, .projects-grid` | `grid-template-columns: 1fr` |
| `.nav-toggle` | `display: inline-flex; align-items: center; justify-content: center` |
| `.nav-menu` | `display: none; position: absolute; top: var(--header-height); left: 0; right: 0; flex-direction: column; align-items: flex-start; gap: 1rem; padding: 1rem; background: var(--bg-elevated); border-bottom: 1px solid var(--border)` |
| `.nav-menu.is-open` | `display: flex` |
| `.nav-list` | `flex-direction: column; gap: 0.75rem` |

---

## 8. Roadmap de ejecución (un paso = una tarea pequeña)

### Fase A — Preparación
1. **Estructura.** Crea la carpeta `portafolio/` con las subcarpetas `assets/`, `css/`, `js/`, `tools/` y los archivos vacíos de la sección 3 (excepto `claude.md`, que ya existe). Crea `.nojekyll` vacío. *Verifica:* `ls -R` coincide con la sección 3.
2. **Favicon.** Escribe `assets/favicon.svg` con el contenido de 6.1.
3. **Variables.** Escribe `css/variables.css` con el contenido de 6.2. *Verifica:* hay 10 colores base + 3 dots definidos.

### Fase B — HTML (cada paso agrega al final de `index.html`)
4. **Head y header.** Crea `index.html` con BLOCK H1 (termina en `<main id="main">`).
5. **Hero.** Agrega BLOCK H2.
6. **Sobre mí.** Agrega BLOCK H3.
7. **Proyectos A.** Agrega BLOCK H4a (apertura de la sección + tarjetas Marketplace y PropTech).
8. **Proyectos B.** Agrega BLOCK H4b (tarjetas ListaMercado y Proveedores + cierre de `projects-grid`, `container` y `section`).
9. **Stack.** Agrega BLOCK H5.
10. **Certificaciones.** Agrega BLOCK H6.
11. **Contacto y cierre.** Agrega BLOCK H7. *Verifica:* `grep -c "<section" index.html` devuelve 6 y `grep -c "<article" index.html` devuelve 4.
12. **Revisión HTML.** Comprueba que cada `<section>` tiene su `id` (`home`, `about`, `projects`, `stack`, `certifications`, `contact`), que hay un solo `<h1>` y que no quedaron comentarios `BLOCK`. No cambies nada más.

### Fase C — CSS (cada paso agrega al final del archivo)
13. **Base.** Escribe `css/base.css` con la tabla 7.1.
14. **Header y navegación.** Inicia `css/components.css` con la tanda "Header y navegación".
15. **Botones, hero y terminal.** Agrega esa tanda.
16. **Sobre mí.** Agrega esa tanda.
17. **Tarjetas de proyectos.** Agrega esa tanda.
18. **Stack, certificaciones e idiomas.** Agrega esa tanda.
19. **Contacto y footer.** Agrega esa tanda.
20. **Responsive.** Agrega el bloque `@media (max-width: 760px)` al final. *Verifica:* abre `index.html` con el ancho de ventana ≥ 1000 px y luego ≤ 400 px; el menú ☰ solo aparece en el ancho pequeño.

### Fase D — JavaScript
21. **Traducciones A.** Crea `js/translations.js` con BLOCK A (deja el objeto abierto).
22. **Traducciones B.** Agrega BLOCK B.
23. **Traducciones C.** Agrega BLOCK C.
24. **Traducciones D.** Agrega BLOCK D y cierra el objeto con `};`. *Verifica:* `node -e "require('fs'); new Function(require('fs').readFileSync('js/translations.js','utf8'))"` no lanza error (si no hay Node, revisa a ojo comas y llaves).
25. **main.js parte 1.** Escribe PARTE 1 (cambio de idioma).
26. **main.js parte 2.** Agrega PARTE 2 (menú móvil y año).
27. **Verificador i18n.** Escribe `tools/check-i18n.js` (6.6) y ejecuta `node tools/check-i18n.js`. *Verifica:* "Faltan en EN: ninguna". Si falta alguna clave, corrígela en `translations.js` (nunca cambies el texto en español de `index.html`).

### Fase E — Calidad y publicación
28. **QA manual.** Revisa y corrige solo lo que falle:
    - [ ] Al abrir `index.html` se ve todo en español sin errores en la consola.
    - [ ] El botón `EN` cambia todo el texto a inglés (incluida la pestaña del navegador) y el botón pasa a `ES`; al recargar se recuerda el idioma.
    - [ ] Los 4 enlaces de GitHub, LinkedIn y el enlace de Gmail apuntan a las URLs de la sección 6.3.
    - [ ] El menú ☰ abre, cierra y se cierra al tocar un enlace.
    - [ ] Se puede navegar con teclado (Tab) y el foco se ve.
    - [ ] No hay scroll horizontal en 360 px de ancho.
29. **README.** Escribe `README.md` con el contenido de abajo.
30. **Publicar (pide confirmación al usuario antes de cada comando de red).** Ver sección 9.

**README.md (contenido exacto):**

```markdown
# Portafolio — Juan David Tapiero Montoya

Portafolio personal bilingüe (ES/EN) hecho con HTML, CSS y JavaScript puro, sin dependencias.

- Estilo: modo oscuro sobrio con detalles tipo terminal.
- Para verlo en local: abre `index.html` en el navegador.
- Verificar traducciones: `node tools/check-i18n.js`

Contacto: juandavidtapiero8@gmail.com · [LinkedIn](https://www.linkedin.com/in/juan-david-tapiero-montoya-4834b02b3) · [GitHub](https://github.com/Juanda2312)
```

## 9. Despliegue en GitHub Pages (guía para el usuario)

1. En GitHub crea un repositorio **público** llamado `Juanda2312.github.io` (da la URL `https://juanda2312.github.io/`). Si prefieres otro nombre, por ejemplo `portafolio`, la URL será `https://juanda2312.github.io/portafolio/` y el sitio funciona igual porque todas las rutas son relativas.
2. En la carpeta `portafolio/`:
   ```
   git init
   git add .
   git commit -m "feat: portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/Juanda2312/portafolio.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. Espera 1–2 minutos y abre la URL. Cuando esté publicado, agrega el enlace al sitio en tu README de perfil de GitHub.

## 10. Definición de "terminado"

- `node tools/check-i18n.js` termina sin faltantes.
- Ningún archivo fuera de la sección 3.
- Ninguna petición de red al abrir la página (sin CDN, sin fuentes externas).
- Todos los textos coinciden carácter por carácter con las secciones 6.3 y 6.4.