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
        <h3 className={styles.currency}>Pesos</h3>
        <Row label="Banco" value={gift.pesos.bank} />
        <Row label="Nombre completo" value={gift.pesos.holder} />
        <Row label="Alias" value={gift.pesos.alias} />
        <Row label="CVU" value={gift.pesos.cvu} />

        <h3 className={`${styles.currency} ${styles.currencySpaced}`}>
          Dólares
        </h3>
        <Row label="Banco" value={gift.dolares.bank} />
        <Row label="Nombre completo" value={gift.dolares.holder} />
        <Row label="Alias" value={gift.dolares.alias} />
        <Row label="CVU" value={gift.dolares.cvu} />
      </div>
    </section>
  );
}
