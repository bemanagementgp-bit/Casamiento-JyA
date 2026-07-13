import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';
import { event } from '../../data/event.js';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.badge}>{event.brideAndGroom}</div>
      <p className={styles.meta}>31 · 10 · {event.yearLabel} &nbsp;|&nbsp; {event.city}</p>
      <a
        href={event.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ig}
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </footer>
  );
}
