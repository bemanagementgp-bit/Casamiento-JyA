// Datos centrales del evento. Editá acá para cambiar la web.

export const event = {
  brideAndGroom: 'Juli & Alan',
  initials: 'J & A',
  // 31 de Octubre 2026, 21:00 hora Argentina (UTC-3)
  date: new Date('2026-10-31T21:00:00-03:00'),
  dateLabel: '31 de Octubre',
  yearLabel: '2026',
  timeLabel: '21:00 hs.',
  city: 'City Bell',
  instagram: 'https://instagram.com/bodajuliyalan',

  // Ceremonia y fiesta
  venue: {
    name: 'Casa Perez',
    address: 'Cno. Centenario nro. 7019 e/461F y 462',
    city: 'City Bell · La Plata',
    dateLabel: '31 de Octubre',
    timeLabel: '21:00 hs.',
    mapsQuery:
      'Casa Perez, Camino Centenario 7019, City Bell, La Plata, Buenos Aires, Argentina',
  },

  whatsapp: '5492216554309', // formato internacional sin +

  spotify: {
    songUri: 'spotify:track:6qqrTXSdwiJaq8SO0X2lSe', // canción de fondo
    songEmbed:
      'https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator',
    playlistEmbed:
      'https://open.spotify.com/embed/playlist/6iH357VfmRk6QRgXbYOR2h?utm_source=generator',
  },

  gift: {
    pesos: {
      bank: 'Mercado Pago',
      holder: 'Julieta Daniela Dusio',
      alias: 'BODAJULIALAN',
      cvu: '0000003100061753018746',
    },
    dolares: {
      bank: 'Banco Industrial (BIND)',
      holder: 'Julieta Daniela Dusio',
      alias: 'aula.manera.contuve',
      cvu: '3220001888088436180011',
    },
  },
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  event.venue.mapsQuery
)}`;
