import styles from './GiftRegistry.module.css';
import { PiGiftThin } from 'react-icons/pi';
import { event } from '../../data/event.js';

function Account({ title, data }) {
  return (
    <div className={styles.box}>
      <p className={styles.boxTitle}>{title}</p>
      <p className={styles.row}>
        <span className={styles.rowLabel}>Cuenta bancaria:</span> {data.bank}
      </p>
      <p className={styles.row}>
        <span className={styles.rowLabel}>Titular:</span> {data.holder}
      </p>
      <p className={styles.row}>
        <span className={styles.rowLabel}>Alias:</span> {data.alias}
      </p>
      <p className={styles.row}>
        <span className={styles.rowLabel}>CVU:</span> {data.cvu}
      </p>
    </div>
  );
}

export default function GiftRegistry() {
  const { gift } = event;
  return (
    <section className={styles.section}>
      <div className={styles.line} />
      <div className={styles.icon} aria-hidden="true">
        <PiGiftThin />
      </div>
      <h2 className={styles.title}>Regalo</h2>

      <p className={styles.intro}>
        Tu presencia es lo más importante para nosotros. Si además querés
        hacernos un regalo te contamos cómo hacerlo.
      </p>

      <div className={styles.boxes}>
        <Account title="Pesos" data={gift.pesos} />
        <Account title="Dólares" data={gift.dolares} />
      </div>

      <p className={styles.cash}>
        En caso que prefieras hacernos un regalo en efectivo,
        <br />
        tendrás a disposición un buzón en el salón durante la recepción.
      </p>
    </section>
  );
}
