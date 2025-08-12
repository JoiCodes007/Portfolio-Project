(function () {
  const STORAGE_KEY = 'preferred-theme';
  const root = document.documentElement; // <html>
  const toggle = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('year');

  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    // Tailwind uses the `dark` class; we also keep a data attribute if you want to read it elsewhere
    root.classList.toggle('dark', isDark);
    if (document.body) {
      document.body.classList.toggle('dark', isDark);
    }
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(isDark));
      const iconEl = toggle.querySelector('.icon');
      const labelEl = toggle.querySelector('.label');
      if (iconEl) iconEl.textContent = isDark ? '☀️' : '🌙';
      if (labelEl) labelEl.textContent = isDark ? 'Light mode' : 'Dark mode';
    }
  }

  function loadInitialTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    const theme = stored === 'light' || stored === 'dark' ? stored : getSystemPreference();
    applyTheme(theme);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Initialize (after DOM is parsed; this script is defer-loaded)
  loadInitialTheme();
  if (toggle) toggle.addEventListener('click', toggleTheme);
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Listen to system changes if user has not explicitly chosen
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const onSystemChange = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== 'light' && stored !== 'dark') {
      applyTheme(getSystemPreference());
    }
  };
  if (media.addEventListener) media.addEventListener('change', onSystemChange);
  else if (media.addListener) media.addListener(onSystemChange); // Safari < 14
})();


