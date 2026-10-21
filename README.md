# Gabriele Canova — Portfolio / GitHub Pages

Sito statico per GitHub Pages. Non richiede build, framework o dipendenze.

## Struttura

```text
index.html
styles.css
site.js
data/projects.js
assets/img/
assets/docs/
.nojekyll
README.md
```

## Aggiornare contenuti e link

Il file principale da modificare è:

```text
data/projects.js
```

Gli ascolti non sono caricati nella repository: restano su SoundCloud in forma privata/non pubblica e sono collegati come hyperlink esterni. I video non sono caricati su GitHub: vengono visualizzati tramite embed YouTube non in elenco.

Esempio ascolto:

```javascript
links: [
  { label: "Ascolto SoundCloud", href: "https://soundcloud.com/..." }
]
```

Esempio video:

```javascript
videoEmbeds: [
  {
    label: "Guarda il video",
    embed: "https://www.youtube-nocookie.com/embed/VIDEO_ID",
    external: "https://youtu.be/VIDEO_ID"
  }
],
links: [
  { label: "Video", href: "https://youtu.be/VIDEO_ID" }
]
```

I link vuoti non vengono mostrati. Per evitare placeholder visibili, lascia l'array `links` vuoto oppure rimuovi il progetto finché non è pronto.

## Performances

La slide `Performances` si aggiorna modificando l'array:

```javascript
performances: [ ... ]
```

Ogni performance può avere piattaforma, titolo, URL embed e link esterno.

## Media pesanti

Non caricare nella repository:

- WAV;
- MP4;
- video completi;
- foto originali ad alta risoluzione;
- cartelle di archivio pesanti.

Usare invece:

- SoundCloud privato/non pubblico per gli ascolti;
- YouTube non in elenco per i video;
- Drive per archivio o download pesanti;
- immagini `.webp` o `.jpg` compresse per le copertine.

## Deploy

Caricare tutti i file nella root della repository GitHub e attivare:

```text
Settings → Pages → Deploy from a branch → main → /root
```

## Aggiornamento immagini / video — settembre 2026
- ARWE: la galleria fotografica resta esterna su Google Photos per non appesantire GitHub Pages.
- Pinacoteca Albertina: il post Instagram è incorporato nel modale del progetto; la galleria usa immagini WebP locali compresse.
- Le immagini del progetto Pinacoteca sono in `assets/img/pinacoteca-*.webp`.


## Update October 2026
- English layout preserved.
- Published Works replaced by Performances.
- Tide remains only in Voice / Production and uses the official Spotify media when opened.
- Music for Poetry removed while unfinished.
- Margherita Data renamed Materia.
- Explanatory placeholders removed from Index and Contact.
- Vincoli composite added only as a background layer on the Studies slide.


## Update media — 15 October 2026
- Air Controller: added YouTube demonstration embed and external link.
- Pinacoteca Albertina: added private SoundCloud listening link.
- Project media remain centralized in `data/projects.js`; `site.js` contains only rendering logic.
