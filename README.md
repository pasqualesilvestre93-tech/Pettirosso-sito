# Sito del Centro Cinofilo Il Pettirosso

Sito statico (Astro) del Centro Cinofilo Il Pettirosso, Giugliano in Campania.

- **Stato**: demo su GitHub Pages, non indicizzata da Google (`noindex` + `robots.txt`).
- **Contenuti**: testi, prezzi e orari presi dal sito attuale (ilpettirossodog.space, ottobre 2026). I dati da verificare sono marcati nel sito con l'etichetta "da confermare" e in `src/data/site.ts`.
- **Foto e video**: scaricati dal sito attuale, convertiti in WebP (max 1600 px) e MP4 720p. Escluse le immagini che sembrano stock o generate con AI.

## Comandi

```bash
npm install
npm run build        # demo: https://pasqualesilvestre93-tech.github.io/Pettirosso-sito/
DEMO=false SITE_URL=https://nuovo-dominio.it BASE_PATH=/ npm run build   # sito definitivo
```

Per il sito definitivo cambiare anche `public/robots.txt` (oggi blocca tutto) e aggiungere `public/CNAME` con il dominio.

## Struttura

- `src/pages/` una pagina per servizio: pensione, asilo, educazione, riabilitazione, attività, chi siamo, gallery, contatti, prenota, blog.
- `src/data/site.ts` dati del centro (indirizzo, orari, contatti).
- `src/components/` foto, video, apertura delle pagine, invito alla visita, newsletter.
- `public/img`, `public/video`, `public/brand` file statici.

## Da fare prima del lancio

- Confermare i dati marcati "da confermare" (orari, IVA dei prezzi della pensione, requisiti sanitari, prezzi di educazione e riabilitazione, link Facebook).
- Testi di privacy e cookie.
- Newsletter (Brevo) e invio email del modulo di prenotazione.
- Recensioni Google da mostrare.
