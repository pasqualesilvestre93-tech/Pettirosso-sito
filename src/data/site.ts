// Dati del centro. Fonte: sito attuale ilpettirossodog.space (ottobre 2026).
// I valori con daConfermare: true vanno verificati con Ferdinando prima del lancio.

export const site = {
  nome: 'Centro Cinofilo Il Pettirosso',
  ragioneSociale: 'Centro Cinofilo "Il Pettirosso" s.a.s.',
  piva: '04046130615',
  dal: 2006,
  sedeOperativa: 'Via degli ex-alleati km 6.00, località Centore, Giugliano in Campania (NA)',
  indirizzo: { via: 'Via degli ex-alleati km 6.00, località Centore', cap: '80014', comune: 'Giugliano in Campania', provincia: 'NA' },
  // Zone citate nelle indicazioni stradali del sito attuale.
  areaServita: ['Giugliano in Campania', 'Aversa', 'Napoli'],
  sedeLegale: 'Via Vittorio Emanuele 72, 81031 Aversa (CE)',
  telefono: '+39 347 863 1076',
  telefonoLink: 'tel:+393478631076',
  whatsapp: 'https://wa.me/393478631076',
  email: 'ferdinando.silvestre@hotmail.com',
  instagram: 'https://www.instagram.com/ilpettirosso_/',
  mappa: 'https://www.google.com/maps/search/?api=1&query=Centro+Cinofilo+Il+Pettirosso+Giugliano+in+Campania',
  orari: {
    daConfermare: true,
    inverno: 'Lun–Sab 9:00–13:00 / 15:00–17:30',
    estate: 'Lun–Sab 10:00–12:30 / 16:30–18:30',
    domenica: 'Domenica chiuso',
    nota: 'Visite su appuntamento',
  },
  google: { voto: '4,7', recensioni: 'oltre 120' },
  puntiRiferimento: [
    "Alle spalle dell'Acquapark Free Time",
    'A 3 minuti dal C.C. Auchan di Giugliano',
    'A 3 minuti dal C.C. Jambo1',
    "A 4 minuti dall'uscita Aversa Sud dell'Asse Mediano",
  ],
  indicazioni: [
    { da: 'Da Napoli zona flegrea', percorso: 'SS7 Quater → Asse Mediano → uscita Villa Literno/Giugliano → seguire per Parete/Free Time.' },
    { da: 'Da Napoli zona orientale/ospedaliera', percorso: 'Asse Mediano (dir. Lago Patria) → uscita Aversa Sud → seguire Lusciano/Parete → trovare Free Time.' },
  ],
};

export const whatsappTesto = (testo: string) => `${site.whatsapp}?text=${encodeURIComponent(testo)}`;
