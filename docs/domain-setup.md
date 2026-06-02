# Konfiguracja domeny ptstrans.pl

Strona PTS-TRANS jest hostowana na GitHub Pages w repozytorium:

- `ghawdexpro/pts-trans-preview`
- docelowa domena: `https://ptstrans.pl/`
- domena pomocnicza GitHub Pages: `https://ghawdexpro.github.io/pts-trans-preview/`

## GitHub Pages

Repozytorium publikuje stronę z gałęzi `main`, katalog `/`.

W repo musi istnieć plik:

- `CNAME` z treścią `ptstrans.pl`

Po stronie GitHub Pages custom domain powinien być ustawiony na:

- `ptstrans.pl`

HTTPS może potrzebować czasu po zmianach DNS. GitHub podaje, że wygenerowanie certyfikatu po poprawnej konfiguracji domeny może potrwać do około godziny.

## DNS w lh.pl

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
curl -I https://ptstrans.pl/
curl -I https://www.ptstrans.pl/
```

Oczekiwane:

- `https://ptstrans.pl/` zwraca stronę PTS-TRANS.
- `https://www.ptstrans.pl/` przekierowuje na domenę główną albo również serwuje stronę, zależnie od ustawień GitHub Pages.
