import styles from './SongPlayer.module.css';
import { event } from '../../data/event.js';

export default function SongPlayer() {
  return (
    <section className="section section--soft" id="cancion">
      <div className={styles.wrap}>
        <p className="section__eyebrow">Nuestra canción</p>
        <h2 className="section__title">El soundtrack de hoy</h2>
        <div className="section__divider" />
        <div className={styles.frame}>
          <iframe
            title="Nuestra canción"
            src={event.spotify.songEmbed}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <p className={styles.note}>Subí el volumen y dejate llevar ♪</p>
      </div>
    </section>
  );
}
