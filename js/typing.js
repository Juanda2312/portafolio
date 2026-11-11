(() => {
  const el = document.querySelector('.hero-name');
  if (!el) return;

  const full = el.textContent.trim();
  el.setAttribute('aria-label', full);           // los lectores de pantalla leen el nombre completo

  // Con "reducir movimiento" escribe mucho más lento en vez de omitir el efecto
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DELAY = reduce ? 180 : 70;               // ms por letra

  el.style.minHeight = el.offsetHeight + 'px';   // evita que la página "salte" mientras escribe
  el.textContent = '';

  const text = document.createElement('span');
  const caret = document.createElement('span');
  caret.className = 'type-caret';
  caret.textContent = '_';
  text.setAttribute('aria-hidden', 'true');
  caret.setAttribute('aria-hidden', 'true');
  el.append(text, caret);

  let i = 0;
  const tick = () => {
    text.textContent = full.slice(0, ++i);
    if (i < full.length) setTimeout(tick, DELAY);
  };
  setTimeout(tick, 400);
})();