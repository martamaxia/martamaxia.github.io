/* ====== Base & Theme Variables ====== */
--shadow: 0 10px 30px rgba(0,0,0,.25);
--radius: 16px;
--content-max: 900px;
}
[data-theme="light"] {
--bg: #ffffff;
--bg-muted: #fafafa;
--text: #1a1b1e;
--text-muted: #505565;
--accent: #275efe;
--card: #ffffff;
--border: #e8e8ef;
--link: var(--accent);
--shadow: 0 10px 30px rgba(0,0,0,.06);
}


/* ====== Resets ====== */
* { box-sizing: border-box; }
html, body { height: 100%; }
body {
margin: 0;
font: 16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
color: var(--text);
background: radial-gradient(1200px 800px at 100% -20%, rgba(39, 94, 254, .08), transparent 50%), var(--bg);
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
scroll-behavior: smooth;
}


/* ====== Layout ====== */
.container { max-width: var(--content-max); margin: 0 auto; padding: 24px; }
header {
position: sticky; top: 0; z-index: 5;
backdrop-filter: saturate(120%) blur(8px);
background: color-mix(in oklab, var(--bg) 90%, transparent);
border-bottom: 1px solid var(--border);
}
.nav { display: flex; align-items: center; gap: 16px; justify-content: space-between; padding: 12px 24px; }
.brand { font-weight: 700; letter-spacing: .2px; }
nav a { color: var(--text-muted); text-decoration: none; padding: 8px 10px; border-radius: 10px; }
nav a:hover, nav a:focus { color: var(--text); background: var(--bg-muted); outline: none; }


.theme-picker { display: inline-flex; align-items: center; gap: 8px; padding: 8px 10px; border: 1px solid var(--border); border-radius: 12px; background: var(--card); }
select.theme-select { background: transparent; color: var(--text); border: none; outline: none; }


.hero { display: grid; gap: 24px; grid-template-columns: 140px 1fr; align-items: center; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 24px; box-shadow: var(--shadow); margin-top: 24px; }
.avatar { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border); }
section { margin-top: 48px; }
.card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow); padding: 24px; }


h1, h2, h3 { line-height: 1.2; margin: 0 0 8px; }
h2 { font-size: 1.4rem; }
p { margin: 0 0 12px; color: var(--text); }
.muted { color: var(--text-muted); }
ul { margin: 8px 0 0 18px; }
.footer { margin: 64px 0 24px; color: var(--text-muted); font-size: .95rem; text-align: center; }


.skip-link { position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden; }
.skip-link:focus { left: 8px; top: 8px; width: auto; height: auto; padding: 8px 10px; background: var(--bg-muted); border-radius: 10px; }


@media (max-width: 640px) {
.hero { grid-template-columns: 1fr; text-align: center; }
.hero .avatar { margin: 0 auto; }
nav { display: none; }
}
