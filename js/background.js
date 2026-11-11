(() => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const BG = '#0d1117';
  const COLOR = '63, 185, 120';          // RGB del acento (verde terminal); cámbialo a tu gusto
  const TOKENS = ['0', '1', '{', '}', ';', '=>', '</>', '()', '[]', '&&', '//', '#', '$', '>_'];
  const FONT_SIZE = 16;
  const FRAME_MS = 50;                   // ~20 fps: fluido pero ligero

  let cols, drops, width, height, last = 0, rafId = null;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = `${FONT_SIZE}px "JetBrains Mono", "Fira Code", monospace`;

    cols = Math.ceil(width / (FONT_SIZE * 1.6));
    drops = Array.from({ length: cols }, () => Math.random() * -50);
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, width, height);
  }

  function draw() {
    // Rastro: pinta el fondo con poca opacidad para que los caracteres se desvanezcan
    ctx.fillStyle = 'rgba(13, 17, 23, 0.12)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < cols; i++) {
      const x = i * FONT_SIZE * 1.6;
      const y = drops[i] * FONT_SIZE;
      const token = TOKENS[(Math.random() * TOKENS.length) | 0];

      ctx.fillStyle = `rgba(${COLOR}, 0.55)`;
      ctx.fillText(token, x, y);

      if (y > height && Math.random() > 0.975) drops[i] = 0;
      drops[i] += 0.6;
    }
  }

  function loop(t) {
    rafId = requestAnimationFrame(loop);
    if (t - last < FRAME_MS) return;
    last = t;
    draw();
  }

  function start() { if (!rafId) rafId = requestAnimationFrame(loop); }
  function stop() { cancelAnimationFrame(rafId); rafId = null; }

  resize();
  window.addEventListener('resize', resize);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const SPEED = reduce.matches ? 0.15 : 0.6;   // mucho más lento si piden menos movimiento

  // Pausa la animación si la pestaña no está visible (ahorra batería)
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  start();
})();