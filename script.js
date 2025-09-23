// ====== Theme handling ======
(function() {
const root = document.documentElement;
const select = document.getElementById('theme-select');
function applyTheme(mode) {
root.setAttribute('data-theme', mode);
try { localStorage.setItem('theme', mode); } catch (_) {}
}
const saved = (function() {
try { return localStorage.getItem('theme'); } catch (_) { return null; }
})() || 'dark';
if (select) {
select.value = saved;
select.addEventListener('change', (e) => applyTheme(e.target.value));
}
applyTheme(saved);


// Respect reduced motion
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
document.documentElement.style.scrollBehavior = 'auto';
}


// Optional year stamp if present
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
})();
