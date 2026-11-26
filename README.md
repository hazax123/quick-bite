# Quick Bite

Forslag til ny nettside for Quick Bite, Gjesdalveien 30, 4306 Sandnes. Laget av Skysite. Ikke publisert på vegne av Quick Bite.

Live: https://hazax123.github.io/quick-bite/ (skjult for Google med `noindex`).

Én side: slagord fra plakatene, åpningstider med «åpent nå», meny som tavle (priser fra foodora), falafel, finn oss og en hilsen til eieren.

Farger og stil er hentet fra skiltet: svart, hvitt og oransje (`#f07c1f`), Q-logo med oransje strek. Skrifter (lagret lokalt i `fonts/`): Oswald, Kaushan Script og Inter.

## Se siden lokalt

```
python3 -m http.server 8000
```

## Når eieren sier ja

1. Fjern forslagsstripen (`<div class="proposal">`) og seksjonen `#til-eieren`.
2. Fjern `<meta name="robots" content="noindex">`.
3. Legg inn egne bilder av maten og lokalet.
4. Koble til eget domene (fil `CNAME` + DNS hos domeneselskapet).
