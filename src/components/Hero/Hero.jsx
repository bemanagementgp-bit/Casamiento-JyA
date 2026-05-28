import styles from './Hero.module.css';
import { FaInstagram } from 'react-icons/fa';
import { event } from '../../data/event.js';
import { heroPhoto } from '../../data/photos.js';

export default function Hero() {
  return (
    <section
      id="inicio"
      className={styles.hero}
      style={{ backgroundImage: `url(${heroPhoto})` }}
    >
      <div className={styles.content}>
        <div className={styles.badge}>{event.brideAndGroom}</div>
        <h1 className={styles.title}>Nos casamos</h1>
        <p className={styles.subtitle}>y queremos compartirlo con vos!</p>
        <a
          href={event.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ig}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
