// ====== Site JS: theme toggle + mobile nav ======
(function () {
  const root = document.documentElement;

  function setTheme(mode) {
    root.setAttribute('data-theme', mode);
    try { localStorage.setItem('theme', mode); } catch (e) {}
  }

  // Theme toggle button
  function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    function refreshIcon() {
      const isDark = root.getAttribute('data-theme') === 'dark';
      btn.textContent = isDark ? '☀️' : '🌙';
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.title = isDark ? 'Light mode' : 'Dark mode';
    }
    refreshIcon();
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
      refreshIcon();
    });
  }

  // Mobile nav toggle
  function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-nav');
    if (!navToggle || !nav) return;
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close menu on link click
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Reduced motion preference
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.style.scrollBehavior = 'auto';
  }

  // Optional year stamp
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Init after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initThemeToggle(); initMobileNav(); });
  } else {
    initThemeToggle(); initMobileNav();
  }
})();
