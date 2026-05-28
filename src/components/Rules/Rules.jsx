import styles from './Rules.module.css';
import { GiHighHeel, GiPartyPopper } from 'react-icons/gi';
import { HiOutlineClock } from 'react-icons/hi2';
import { event } from '../../data/event.js';

const ICONS = {
  dress: GiHighHeel,
  adults: GiPartyPopper,
  clock: HiOutlineClock,
};

export default function Rules() {
  return (
    <section className="section section--soft">
      <p className="section__eyebrow">A tener en cuenta</p>
      <h2 className="section__title">Algunas reglas</h2>
      <div className="section__divider" />

      <div className={styles.grid}>
        {event.rules.map((r) => {
          const Icon = ICONS[r.icon];
          return (
            <div key={r.title} className={styles.item}>
              <div className={styles.icon} aria-hidden="true">
                {Icon ? <Icon /> : null}
              </div>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.subtitle}>{r.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
