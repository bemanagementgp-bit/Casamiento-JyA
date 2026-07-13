import styles from './Story.module.css';
import { PiHeartStraightFill } from 'react-icons/pi';
import { event } from '../../data/event.js';

export default function Story() {
  return (
    <section className={styles.section}>
      <p className="section__eyebrow"><PiHeartStraightFill /> Nuestra historia</p>
      <h2 className="section__title">Así llegamos hasta acá</h2>
      <div className="section__divider" />

      <div className={styles.timeline}>
        {event.story.map((it) => (
          <div className={styles.item} key={it.year}>
            <div className={styles.year}>{it.year}</div>
            <div className={styles.dot} aria-hidden="true" />
            <div className={styles.card}>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
