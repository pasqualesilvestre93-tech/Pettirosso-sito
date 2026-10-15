// Dati strutturati schema.org (JSON-LD). Un solo nodo LocalBusiness con @id,
// richiamato dai servizi, dalle FAQ e dalle briciole di pane di ogni pagina.
// Gli orari non sono inclusi finché non sono confermati (vedi site.orari.daConfermare).
import { site } from './data/site';

export type Domanda = { q: string; a: string };
export type Briciola = { nome: string; href: string };

export const idCentro = (home: string) => `${home}#centro`;

export function centro(home: string, logo: string) {
  return {
    '@type': 'LocalBusiness',
    '@id': idCentro(home),
    name: site.nome,
    legalName: site.ragioneSociale,
    vatID: `IT${site.piva}`,
    url: home,
    logo,
    image: logo,
    telephone: site.telefono,
    email: site.email,
    foundingDate: String(site.dal),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.indirizzo.via,
      postalCode: site.indirizzo.cap,
      addressLocality: site.indirizzo.comune,
      addressRegion: site.indirizzo.provincia,
      addressCountry: 'IT',
    },
    hasMap: site.mappa,
    areaServed: site.areaServita.map((c) => ({ '@type': 'City', name: c })),
    founder: { '@type': 'Person', name: 'Ferdinando Silvestre' },
    sameAs: [site.instagram],
  };
}

export function servizio(home: string, url: string, nome: string, tipo: string, descrizione: string, offerte: object[] = []) {
  return {
    '@type': 'Service',
    '@id': `${url}#servizio`,
    name: nome,
    serviceType: tipo,
    description: descrizione,
    url,
    provider: { '@id': idCentro(home) },
    areaServed: site.areaServita.map((c) => ({ '@type': 'City', name: c })),
    ...(offerte.length ? { offers: offerte } : {}),
  };
}

export const prezzo = (nome: string, valore: number, unita: string, ivaInclusa?: boolean) => ({
  '@type': 'Offer',
  name: nome,
  priceSpecification: {
    '@type': 'UnitPriceSpecification',
    price: valore,
    priceCurrency: 'EUR',
    unitText: unita,
    ...(ivaInclusa === undefined ? {} : { valueAddedTaxIncluded: ivaInclusa }),
  },
});

export const faq = (url: string, domande: Domanda[]) => ({
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  mainEntity: domande.map((d) => ({ '@type': 'Question', name: d.q, acceptedAnswer: { '@type': 'Answer', text: d.a } })),
});

export const briciole = (abs: (h: string) => string, voci: Briciola[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: voci.map((v, i) => ({ '@type': 'ListItem', position: i + 1, name: v.nome, item: abs(v.href) })),
});
