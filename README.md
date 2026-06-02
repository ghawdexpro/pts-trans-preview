# PTS-TRANS

Statyczna strona informacyjna firmy transportowej PTS-TRANS.

## Zawartość

- `index.html` - treść strony
- `styles.css` - wygląd i responsywność mobile-first
- `script.js` - menu mobilne i stan nagłówka
- `i18n.js` - manifest języków i polski słownik startowy
- `assets/` - lokalne zdjęcia aut, grafik tras i wygenerowana grafika hero

## Publikacja przez Cloudflare

Najprościej opublikować jako statyczną stronę:

1. Wrzucić repozytorium do GitHub.
2. W Cloudflare Pages utworzyć projekt z tego repozytorium.
3. Build command zostawić pusty.
4. Output directory ustawić na `/`.
5. Po publikacji podpiąć domenę `ptstrans.pl` w Cloudflare Pages.

Strona nie wymaga backendu. Przyciski kontaktowe używają telefonu i emaila.

Uwaga: Cloudflare Pages i DNS mogą obsłużyć domenę `ptstrans.pl`, ale Cloudflare Registrar nie rejestruje obecnie rozszerzenia `.pl`. Domenę trzeba kupić u rejestratora obsługującego `.pl`, a potem dodać ją w Cloudflare.

## Hero

Aktualna grafika renderowana na stronie to zoptymalizowany `assets/hero-next-day-map.webp`. Pliki `assets/hero-next-day-map.jpg` i `assets/hero-next-day-map.png` zostają jako wersje źródłowe/fallback oraz podgląd Open Graph. Grafika pokazuje flotę, mapę Warszawa-Wiedeń, lotniska WWA/Vienna Airport i branding PTS-TRANS.

## Języki

Na start strona działa tylko po polsku. `i18n.js` zawiera docelowy manifest języków pod przyszłe tłumaczenia: `pl`, `en`, `de`, `fr`, `es`, `it`, `nl`, `cs`, `sk`, `ro`. Przełącznik języka nie jest widoczny, dopóki tłumaczenia nie będą gotowe.
