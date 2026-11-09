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