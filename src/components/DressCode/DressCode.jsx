import styles from './DressCode.module.css';

export default function DressCode() {
  return (
    <section className={styles.section}>
      <div className={styles.line} />
      <h2 className={styles.title}>Dress Code</h2>

      <p className={styles.text}>
        Queremos que vengas cómod@ y como más te guste.
        <br />
        Lo importante para nosotros es compartir este día con vos.
      </p>
      <div className={styles.line} />
    </section>
  );
}
