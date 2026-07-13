import styles from './Itinerary.module.css';
import { GiBigDiamondRing, GiPartyPopper, GiKnifeFork } from 'react-icons/gi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { LuGlassWater } from 'react-icons/lu';
import { event } from '../../data/event.js';

const ICONS = {
  rings: GiBigDiamondRing,
  cheers: LuGlassWater,
  dinner: GiKnifeFork,
  party: GiPartyPopper,
  sparkles: HiOutlineSparkles,
};

export default function Itinerary() {
  return (
    <section className={styles.section}>
      <p className="section__eyebrow">Cronograma</p>
      <h2 className="section__title">El plan del día</h2>
      <div className="section__divider" />

      <div className={styles.timeline}>
        {event.itinerary.map((it) => {
          const Icon = ICONS[it.icon] || HiOutlineSparkles;
          return (
            <div className={styles.item} key={it.time}>
              <div className={`${styles.side} ${styles.left}`}>
                <span className={styles.time}>{it.time}</span>
                <span className={styles.label}>{it.label}</span>
              </div>
              <div className={styles.bubble}><Icon /></div>
              <div className={`${styles.side} ${styles.right}`}>
                <span className={styles.time}>{it.time}</span>
                <span className={styles.label}>{it.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
