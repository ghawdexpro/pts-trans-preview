# Production QA

Data kontroli: 2026-06-02

## Status

Strona PTS TRANS działa produkcyjnie pod:

- `http://ptstrans.pl/`
- `http://www.ptstrans.pl/` przekierowuje na `http://ptstrans.pl/`

HTTPS nie jest jeszcze wymuszony, bo GitHub Pages nie wystawił jeszcze certyfikatu dla `ptstrans.pl`. API GitHub zwraca `The certificate does not exist yet`.

## DNS i hosting

Sprawdzone rekordy DNS:

- `A ptstrans.pl` wskazuje na `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `AAAA ptstrans.pl` wskazuje na `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- `CNAME www.ptstrans.pl` wskazuje na `ghawdexpro.github.io`
- GitHub Pages custom domain: `ptstrans.pl`

## Testy techniczne

Wykonane kontrole:

- `node --check i18n.js`
- `node --check script.js`
- każdy `data-i18n` w HTML ma klucz w `i18n.js`
- lokalne assety z `index.html` istnieją w repo
- lokalnie `/`, `hero-next-day-map.webp`, `hero-next-day-map-mobile.webp`, `robots.txt` i `sitemap.xml` zwracają `200 OK`
- `http://ptstrans.pl/` zwraca `200 OK` z GitHub Pages
- tytuł strony: `PTS TRANS | Warszawa-Wiedeń Next Day B2B`
- brak błędów i ostrzeżeń w konsoli przeglądarki podczas renderu
- linki `tel:` i `mailto:` są obecne
- kotwice istnieją: `#produkt`, `#next-day`, `#trasy`, `#lotniska`, `#flota`, `#kontakt`

## QA wizualne

Sprawdzone viewporty:

- desktop `1280x900`
- mobile `390x844`

Wyniki:

- brak poziomego scrolla na desktop i mobile
- desktop ładuje poziome hero `assets/hero-next-day-map.webp` bez mapy w pierwszym ekranie
- mobile ładuje pionowe hero `assets/hero-next-day-map-mobile.webp` bez mapy w pierwszym ekranie
- wygenerowany napis w hero mieści się w kadrze mobile bez ręcznej nakładki HTML
- stały header ma własny offset strony i nie przykrywa treści hero ani sekcji po wejściu z menu
- menu mobilne otwiera się poprawnie, ustawia `aria-expanded="true"` i klasę `is-open`
- sekcja floty nie nachodzi już nagłówkiem na etykietę `FLOTA NA RELACJĘ`
- obrandowane obrazy floty ładują się poprawnie po przewinięciu
- obrazy tras ładują się poprawnie po przewinięciu
- treść zawiera główne komunikaty: `Warszawa`, `Wiedeń`, `Next Day`, `B2B`, `WWA`, `CARGO`, `Vienna Airport`

## Do domknięcia

Po wystawieniu certyfikatu przez GitHub Pages włączyć HTTPS:

```bash
gh api -X PUT repos/ghawdexpro/pts-trans-preview/pages -F https_enforced=true
```

Następnie sprawdzić:

```bash
curl -I https://ptstrans.pl/
curl -I https://www.ptstrans.pl/
```
