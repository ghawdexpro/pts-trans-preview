const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");
const menuLabel = document.querySelector("[data-menu-label]");
const i18n = window.PTSTRANS_I18N;

function setMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.setAttribute("content", value);
}

function applyLocale(locale) {
  if (!i18n || !i18n.translations[locale]) return;

  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
  document.title = i18n.meta?.[locale]?.title || document.title;
  setMeta('meta[name="description"]', i18n.meta?.[locale]?.description);
  setMeta('meta[property="og:title"]', i18n.meta?.[locale]?.title);
  setMeta('meta[property="og:description"]', i18n.meta?.[locale]?.ogDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = i18n.translations[locale][key];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    const value = i18n.translations[locale][key];
    if (value) element.setAttribute("aria-label", value);
  });
}

function syncHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setMenuOpen(isOpen) {
  if (!toggle || !nav || !header) return;
  const locale = document.documentElement.dataset.locale || i18n?.defaultLocale || "pl";
  const labels = i18n?.translations?.[locale] || {};

  toggle.setAttribute("aria-expanded", String(isOpen));
  nav.classList.toggle("is-open", isOpen);
  header.classList.toggle("is-open", isOpen);
  if (menuLabel) menuLabel.textContent = isOpen ? labels["nav.close"] || "Zamknij menu" : labels["nav.open"] || "Otwórz menu";
}

toggle?.addEventListener("click", () => {
  setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) setMenuOpen(false);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
applyLocale(document.documentElement.dataset.locale || i18n?.defaultLocale || "pl");
