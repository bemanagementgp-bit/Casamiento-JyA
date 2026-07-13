// Importamos las fotos del directorio assets/ usando new URL() para que Vite
// las procese como assets estáticos con hash en build.

const make = (file) => new URL(`../../assets/${file}`, import.meta.url).href;

// Foto principal del hero.
export const heroPhoto = make('3.png');
export const envelopePhoto = make('2.jpeg');

// Selección curada para la galería.
export const galleryPhotos = [
  make('2.jpeg'),
  make('WhatsApp Image 2026-05-28 at 17.11.31.jpeg'),
  make('WhatsApp Image 2026-05-28 at 17.11.31 (1).jpeg'),
  make('WhatsApp Image 2026-05-28 at 17.11.32.jpeg'),
  make('WhatsApp Image 2026-05-28 at 17.11.32 (1).jpeg'),
  make('WhatsApp Image 2026-05-28 at 17.11.36.jpeg'),
];
