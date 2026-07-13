import styles from './DressCode.module.css';
import { GiHighHeel } from 'react-icons/gi';
import { event } from '../../data/event.js';

export default function DressCode() {
  const dc = event.dressCode;
  return (
    <section className={styles.section}>
      <p className="section__eyebrow">Dress code</p>
      <h2 className="section__title">¿Qué me pongo?</h2>
      <div className="section__divider" />

      <div className={styles.icon}><GiHighHeel /></div>
      <p className={styles.subtitle}>{dc.title}</p>
      <p className={styles.description}>{dc.description}</p>

      <p className={styles.paletteLabel}>Paleta sugerida</p>
      <div className={styles.palette}>
        {dc.palette.map((c) => (
          <div className={styles.swatch} key={c.name}>
            <div
              className={styles.chip}
              style={{ background: c.color }}
              aria-label={c.name}
            />
            <span className={styles.name}>{c.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
