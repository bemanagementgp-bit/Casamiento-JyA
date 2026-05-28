import styles from './GiftRegistry.module.css';
import { event } from '../../data/event.js';

function Row({ label, value }) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <div className={styles.box}>{value || '\u00a0'}</div>
    </div>
  );
}

export default function GiftRegistry() {
  const { gift } = event;
  return (
    <section className={styles.section}>
      <div className={styles.star}>✦</div>
      <h2 className={styles.title}>Regalo</h2>
      <div className={styles.divider} />

      <p className={styles.intro}>
        Tu presencia es lo más importante para nosotros.
        <br />
        Si además querés hacernos un regalo te contamos cómo hacerlo.
      </p>

      <div className={styles.fields}>
        <Row label="Banco" value={gift.bank} />
        <Row label="Nombre completo" value={gift.holder} />
        <Row label="Alias" value={gift.alias} />
        <Row label="CBU" value={gift.cbu} />
      </div>
    </section>
  );
}
