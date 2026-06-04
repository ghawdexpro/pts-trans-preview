# Konfiguracja domeny ptstrans.pl

Strona PTS TRANS jest hostowana na GitHub Pages w repozytorium:

- `ghawdexpro/pts-trans-preview`
- docelowa domena: `https://ptstrans.pl/`
- domena pomocnicza GitHub Pages: `https://ghawdexpro.github.io/pts-trans-preview/`

## GitHub Pages

Repozytorium publikuje stronę z gałęzi `main`, katalog `/`.

W repo musi istnieć plik:

- `CNAME` z treścią `ptstrans.pl`

Po stronie GitHub Pages custom domain powinien być ustawiony na:

- `ptstrans.pl`

HTTPS jest aktywny i wymuszony. GitHub Pages ma certyfikat dla `ptstrans.pl` oraz `www.ptstrans.pl`.

## DNS w lh.pl

Stan z 2026-06-04:

- domena `ptstrans.pl` kupiona i zarządzana w lh.pl,
- domena dodana jako strona WWW na serwerze `serwer398886`,
- pozycja strony WWW w lh.pl: `1589726`,
- strefa DNS w lh.pl: `1551944`,
- GitHub Pages custom domain: `ptstrans.pl`,
- `https://ptstrans.pl/` zwraca stronę z GitHub Pages,
- `https://www.ptstrans.pl/` przekierowuje na `https://ptstrans.pl/`,
- `http://ptstrans.pl/` przekierowuje na `https://ptstrans.pl/`,
- `https_enforced` jest włączone w GitHub Pages.

Dla domeny głównej `ptstrans.pl` ustaw rekordy:

| Typ | Nazwa/host | Wartość |
| --- | --- | --- |
| A | `@` lub puste | `185.199.108.153` |
| A | `@` lub puste | `185.199.109.153` |
| A | `@` lub puste | `185.199.110.153` |
| A | `@` lub puste | `185.199.111.153` |
| AAAA | `@` lub puste | `2606:50c0:8000::153` |
| AAAA | `@` lub puste | `2606:50c0:8001::153` |
| AAAA | `@` lub puste | `2606:50c0:8002::153` |
| AAAA | `@` lub puste | `2606:50c0:8003::153` |
| CNAME | `www` | `ghawdexpro.github.io` |

Usuń albo nie twórz innych rekordów `A`, `AAAA`, `ALIAS`, `ANAME` dla domeny głównej oraz konfliktowych rekordów `CNAME` dla `www`, bo mogą blokować certyfikat HTTPS GitHub Pages.

Rekordy pocztowe lh.pl zostają w strefie, żeby domena była gotowa pod przyszły adres email:

- `MX ptstrans.pl -> 5 mail20.lh.pl`
- `TXT ptstrans.pl -> v=spf1 include:_spf.lh.pl -all`
- `CNAME mail/pop3/smtp/imap.ptstrans.pl -> mail20.lh.pl`
- `SRV _autodiscover._tcp.ptstrans.pl -> autodiscover.lh.pl.`

W strefie zostaje też domyślny wildcard `A *.ptstrans.pl -> 195.2.222.194`. Nie koliduje z domeną główną ani `www`, bo dla nich istnieją dokładne rekordy.

## Weryfikacja

Po zmianach DNS sprawdź:

```bash
dig +short ptstrans.pl A
dig +short ptstrans.pl AAAA
dig +short www.ptstrans.pl CNAME
```

Oczekiwane:

- `ptstrans.pl A` zwraca cztery adresy `185.199.*.153`.
- `ptstrans.pl AAAA` zwraca cztery adresy `2606:50c0:*::153`.
- `www.ptstrans.pl CNAME` wskazuje na `ghawdexpro.github.io`.

Po propagacji:

```bash
curl -I http://ptstrans.pl/
curl -I https://ptstrans.pl/
curl -I https://www.ptstrans.pl/
```

Oczekiwane:

- `http://ptstrans.pl/` zwraca `301` na `https://ptstrans.pl/`.
- `https://ptstrans.pl/` zwraca `200 OK`.
- `https://www.ptstrans.pl/` zwraca `301` na domenę główną.

Aktualny stan GitHub Pages:

```bash
gh api repos/ghawdexpro/pts-trans-preview/pages --jq '{status,cname,html_url,https_enforced,https_certificate}'
```

Oczekiwane: `status: built`, `cname: ptstrans.pl`, `html_url: https://ptstrans.pl/`, `https_enforced: true`, certyfikat `approved`.
