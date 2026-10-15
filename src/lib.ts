const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Percorso interno con il prefisso del sito (GitHub Pages usa una sottocartella). */
export const u = (p: string) => `${base}/${p.replace(/^\//, '')}`;
export const img = (nome: string) => u(`img/${nome}.webp`);
