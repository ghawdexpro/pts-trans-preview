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
- tytuł strony: `PTS TRANS | Wiedeń i Bratysława Next Day B2B`
- brak błędów i ostrzeżeń w konsoli przeglądarki podczas renderu
- linki `tel:` i `mailto:` są obecne
- kontakty zawierają: Piotr Kozlowski `+48 507 111 642` oraz Edyta Szambelan `+48 509 519 195`
- kotwice istnieją: `#produkt`, `#next-day`, `#trasy`, `#lotniska`, `#flota`, `#kontakt`
- dane firmy są widoczne w sekcji kontaktu: `PTS TRANS`, `Sławomir Szambelan`, `ul. Wakacyjna 3`, `05-090 Raszyn / Rybie`, `Trans nr: 303457-1`
- baza i magazyn są widoczne w panelu firmowym: `ul. Jaworskiego 8, 05-090 Raszyn`
- JSON-LD zawiera adres firmy, właściciela, email `PTS.Trans@wp.pl` i numer telefonu `+48601302011`

## QA wizualne

Sprawdzone viewporty:

- desktop `1280x900`
- mobile `390x844`

Wyniki:

- brak poziomego scrolla na desktop i mobile
- desktop ładuje poziome hero `assets/hero-next-day-map.webp` z osobnym overlayem trasy
- mobile ładuje pionowe hero `assets/hero-next-day-map-mobile.webp` z osobnym overlayem trasy
- wygenerowany napis w hero mieści się w kadrze mobile bez ręcznej nakładki HTML
- stały header ma własny offset strony i nie przykrywa treści hero ani sekcji po wejściu z menu
- menu mobilne otwiera się poprawnie, ustawia `aria-expanded="true"` i klasę `is-open`
- sekcja floty nie nachodzi już nagłówkiem na etykietę `FLOTA NA RELACJĘ`
- obrandowane obrazy floty ładują się poprawnie po przewinięciu
- obrazy tras ładują się poprawnie po przewinięciu
- treść zawiera główne komunikaty: `Warszawa`, `Wiedeń`, `Next Day`, `B2B`, `Wien CITY, CARGO`, `Vienna Cargo Airport`
- numery telefonów w sekcji kontaktu są wyróżnione pomarańczowym kolorem, a email pozostaje neutralny
- panel `Dane firmy` mieści się na mobile `390x844` i desktop `1280x720` bez poziomego scrolla
- hero pokazuje trasę bez osobnej odnogi `CARGO`; komunikat o codziennych odbiorach z `Wien CITY, CARGO / Vienna Cargo Airport` jest w sekcji lotnisk

## Backlog stylistyczny

- Dodać subtelny efekt ruchu statycznych obrazów w tle: delikatny pan/zoom, jak niewielki ruch kamery po nieruchomym zdjęciu. Efekt powinien działać głównie na hero i dużych sekcjach obrazowych, bez przesuwania treści UI.
- Implementacja powinna używać CSS transform na warstwie obrazu, np. wolne `scale` + `translate`, z `overflow: hidden` na kontenerze i bez zmiany layoutu.
- Dodać zabezpieczenie `@media (prefers-reduced-motion: reduce)`, które całkowicie wyłącza animację.
- Przetestować na mobile, bo przy złym kadrowaniu taki efekt może odsłonić puste krawędzie albo uciąć auta/napisy.

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
