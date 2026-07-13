import styles from './HowToArrive.module.css';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { FaCar } from 'react-icons/fa';
import { event, mapsUrl } from '../../data/event.js';

export default function HowToArrive() {
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(
    event.venue.mapsQuery
  )}&output=embed`;

  return (
    <section className={styles.section}>
      <p className="section__eyebrow">
        <HiOutlineMapPin /> Cómo llegar
      </p>
      <h2 className="section__title">Ubicación</h2>
      <div className="section__divider" />

      <div className={styles.map}>
        <iframe
          title="Mapa Casa Perez"
          src={embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <p className={styles.info}>
        <strong>{event.venue.name}</strong>
        <br />
        {event.venue.address} · {event.venue.city}
        <br />
        <br />
        Hay estacionamiento disponible en el lugar. Si venís desde CABA, te
        recomendamos coordinar con tiempo —el viaje es de ~1h sin tráfico.
      </p>

      <div className={styles.actions}>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--filled"
        >
          <FaCar /> Abrir en Google Maps
        </a>
      </div>
    </section>
  );
}
