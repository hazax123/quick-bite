# Quick Bite

Nettside for Quick Bite, gatekjøkken i Gjesdalveien 30, 4306 Sandnes. Laget av Skysite som et **forslag til eieren**. Ikke publisert på vegne av Quick Bite.

Live: https://hazax123.github.io/quick-bite/ (skjult for Google med `noindex`).

## Når eieren sier ja

1. Fjern forslagsbanneret (`<div class="proposal">`) og seksjonen `#til-eieren` på forsiden.
2. Fjern `<meta name="robots" content="noindex">` på alle sidene.
3. Bytt tegningene i `img/` med egne bilder, og fyll inn historien på «Om oss» (seksjonen er skjult til da).
4. Koble til eget domene (fil `CNAME` + DNS hos domeneselskapet).

| Side | Fil |
|---|---|
| Forside | `index.html` |
| Meny | `meny/index.html` |
| Om oss | `om-oss/index.html` |
| Takeaway | `levering/index.html` |

Felles stil i `style.css`, skript (meny, åpent/stengt) i `script.js`, skrifter i `fonts/`.

## Se siden lokalt

```
python3 -m http.server 8000
```

## Bilder

Bildeplassene (`<div class="ph">`) byttes ut med egne bilder ved å legge inn `<img src="..." alt="...">` i dem. Ikke bruk bilder fra Google Maps eller andre uten lov.
