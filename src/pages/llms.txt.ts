import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Sintesi per gli assistenti AI (formato llms.txt): chi siamo, servizi, dati essenziali, pagine principali.
export const GET: APIRoute = ({ site: origin }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const url = (p: string) => new URL(`${base}/${p}`, origin).href;
  const body = `# ${site.nome}

> Centro cinofilo a Giugliano in Campania (NA), attivo dal ${site.dal}: pensione per cani (residence con 42 box), asilo giornaliero, percorsi educativi individuali, riabilitazione comportamentale in collaborazione con il veterinario comportamentalista, attività di fiuto, Mobility Dog e Tellington TTouch. Fondatore e direttore tecnico: Ferdinando Silvestre.

- Indirizzo: ${site.sedeOperativa}
- Telefono e WhatsApp: ${site.telefono}
- Email: ${site.email}
- Visite su appuntamento; domenica chiuso
- Prima del soggiorno in pensione e dell'inserimento all'asilo: visite conoscitive gratuite

## Servizi

- [Pensione per cani](${url('pensione-per-cani/')}): 42 box coibentati, quattro uscite al giorno, personale presente 24 ore su 24, tariffe per taglia e stagione, soggiorno minimo 2 notti
- [Asilo per cani](${url('asilo-per-cani/')}): quattro ore di vita sociale in gruppi di compatibilità, giorni dispari, chiuso a luglio e agosto, pacchetti da 8 e 10 ingressi
- [Educazione cinofila](${url('educazione-cinofila/')}): percorsi individuali con approccio olistico e cognitivo-relazionale
- [Riabilitazione comportamentale](${url('riabilitazione-comportamentale/')}): progetto condiviso con il veterinario comportamentalista; casi di Siria, Camillo e Argo
- [Attività](${url('attivita/')}): esperienze sociali, olfattive, cognitive, Mobility Dog, Tellington TTouch

## Altre pagine

- [Chi siamo](${url('chi-siamo/')})
- [Contatti e orari](${url('contatti/')})
- [Prenota la visita conoscitiva](${url('prenota/')})
- [Blog: La lettera del Pettirosso](${url('blog/')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
