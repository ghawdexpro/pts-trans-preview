# PTS TRANS

Statyczna strona informacyjna firmy transportowej PTS TRANS.

## Zawartość

- `index.html` - treść strony
- `styles.css` - wygląd i responsywność mobile-first
- `script.js` - menu mobilne i stan nagłówka
- `i18n.js` - manifest języków i polski słownik startowy
- `assets/` - lokalne zdjęcia aut, grafik tras i wygenerowana grafika hero

## Publikacja

Aktualnie strona jest publikowana jako statyczna witryna przez GitHub Pages:

- repozytorium: `ghawdexpro/pts-trans-preview`
- gałąź: `main`
- katalog publikacji: `/`
- domena techniczna: `https://ghawdexpro.github.io/pts-trans-preview/`
- domena produkcyjna: `https://ptstrans.pl/`

Strona nie wymaga backendu. Przyciski kontaktowe używają telefonu i emaila. Konfiguracja domeny `ptstrans.pl` w GitHub Pages i DNS lh.pl jest opisana w [docs/domain-setup.md](docs/domain-setup.md).

Aktualny raport kontroli produkcyjnej jest w [docs/production-qa.md](docs/production-qa.md).

## Hero

Aktualne grafiki hero renderowane na stronie to zoptymalizowane `assets/hero-next-day-map.webp` dla desktopu oraz `assets/hero-next-day-map-mobile.webp` dla telefonów. Pliki PNG/JPG zostają jako wersje źródłowe/fallback oraz podgląd Open Graph. Grafiki pokazują flotę, mapę Warszawa-Brno-Bratysława-Wiedeń, oznaczenie CARGO i branding PTS TRANS.

## Języki

Na start strona działa tylko po polsku. `i18n.js` zawiera docelowy manifest języków pod przyszłe tłumaczenia: `pl`, `en`, `de`, `fr`, `es`, `it`, `nl`, `cs`, `sk`, `ro`. Przełącznik języka nie jest widoczny, dopóki tłumaczenia nie będą gotowe.
