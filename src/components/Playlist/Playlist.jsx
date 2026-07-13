import styles from './Playlist.module.css';
import { event } from '../../data/event.js';

export default function Playlist() {
  const waText = encodeURIComponent(
    '¡Hola! Quiero sumar este tema a la playlist del casamiento: '
  );
  const waUrl = `https://wa.me/${event.whatsapp}?text=${waText}`;

  return (
    <section className={styles.section}>
      <div className={styles.star}>✦</div>
      <h2 className={styles.title}>Nuestra playlist</h2>
      <div className={styles.divider} />

      <div className={styles.frame}>
        <iframe
          title="Playlist Juli & Alan"
          src={event.spotify.playlistEmbed}
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <p className={styles.ask}>¿Qué temón no puede faltar?</p>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        Agregar tema
      </a>
    </section>
  );
}
