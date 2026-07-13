import { useState } from 'react';
import styles from './Rsvp.module.css';
import { PiCookingPotLight } from 'react-icons/pi';
import { event } from '../../data/event.js';

export default function Rsvp() {
  const [attending, setAttending] = useState('si');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companions, setCompanions] = useState('');
  const [message, setMessage] = useState('');
  const [menu, setMenu] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const lines = [
      `*Confirmación de asistencia - ${event.brideAndGroom}*`,
      '',
      `Nombre: ${name}`,
      `Asistencia: ${attending === 'si' ? '✅ Sí, confirmo' : '❌ No podré ir'}`,
    ];
    if (email.trim()) lines.push(`E-mail: ${email}`);
    if (attending === 'si') {
      if (companions.trim()) lines.push(`Acompañantes: ${companions}`);
      if (menu.trim()) lines.push(`Menú especial: ${menu}`);
    }
    if (message.trim()) lines.push('', `Mensaje: ${message}`);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${event.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.star}>✦</div>
        <h2 className={styles.title}>Confirmar asistencia</h2>
        <div className={styles.divider} />

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.choices}>
            <button
              type="button"
              className={`${styles.choice} ${attending === 'si' ? styles.active : ''}`}
              onClick={() => setAttending('si')}
            >
              Sí, confirmo
            </button>
            <button
              type="button"
              className={`${styles.choice} ${attending === 'no' ? styles.active : ''}`}
              onClick={() => setAttending('no')}
            >
              No puedo ir
            </button>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Nombre completo</span>
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>E-mail</span>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {attending === 'si' && (
            <label className={styles.field}>
              <span className={styles.label}>¿Venís acompañado?</span>
              <input
                className={styles.input}
                type="text"
                value={companions}
                onChange={(e) => setCompanions(e.target.value)}
                placeholder=""
              />
            </label>
          )}

          <label className={styles.field}>
            <span className={styles.label}>Mensaje para los novios</span>
            <input
              className={styles.input}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          {attending === 'si' && (
            <div className={styles.menuBlock}>
              <div className={styles.menuIcon} aria-hidden="true">
                <PiCookingPotLight />
              </div>
              <h3 className={styles.menuTitle}>¿Necesitas menú especial?</h3>
              <label className={`${styles.field} ${styles.menuField}`}>
                <span className={styles.label}>Comentanos</span>
                <input
                  className={styles.input}
                  type="text"
                  value={menu}
                  onChange={(e) => setMenu(e.target.value)}
                />
              </label>
            </div>
          )}

          <button type="submit" className={styles.submit}>
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}
