import { useState } from 'react';
import { PiCookingPotLight } from 'react-icons/pi';
import styles from './SpecialMenu.module.css';
import { event } from '../../data/event.js';

export default function SpecialMenu() {
  const [menu, setMenu] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!menu.trim()) return;
    const text = encodeURIComponent(
      `*Menú especial - ${event.brideAndGroom}*\n\n${menu}`
    );
    window.open(`https://wa.me/${event.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className={styles.section}>
      <div className={styles.icon} aria-hidden="true">
        <PiCookingPotLight />
      </div>
      <h2 className={styles.title}>¿Necesitas menú especial?</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span className={styles.label}>Comentanos</span>
          <input
            className={styles.input}
            type="text"
            value={menu}
            onChange={(e) => setMenu(e.target.value)}
          />
        </label>
        <button type="submit" className={styles.submit}>
          Enviar
        </button>
      </form>
    </section>
  );
}
