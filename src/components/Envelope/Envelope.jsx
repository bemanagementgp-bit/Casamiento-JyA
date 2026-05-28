import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Envelope.module.css';
import { event } from '../../data/event.js';

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
    // Avisamos al padre cuando empieza la animación; el padre muestra el sitio
    // detrás del overlay y hace scroll cuando termina.
    setTimeout(() => onOpen?.(), 1100);
  };

  return (
    <AnimatePresence>
      {!opening || opening ? (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          animate={{ opacity: opening ? 0 : 1 }}
          transition={{ duration: 0.6, delay: opening ? 0.9 : 0 }}
          onAnimationComplete={() => {
            if (opening) {
              // Limpieza visual final
            }
          }}
          style={{ pointerEvents: opening ? 'none' : 'auto' }}
        >
          <motion.div
            className={styles.envelope}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            aria-label="Abrir invitación"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleClick();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className={styles.body} />
            <div className={styles.flapSide} />
            <div className={styles.flapBottom} />

            {/* Flap superior que se abre */}
            <motion.div
              className={styles.flapTop}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: opening ? -180 : 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Sticker que se despega */}
            <motion.div
              className={styles.sticker}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              animate={
                opening
                  ? { rotate: -25, x: -80, y: -120, opacity: 0, scale: 1.2 }
                  : { rotate: 0, x: 0, y: 0, opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span>
                {event.initials}
                <small>abrir</small>
              </span>
            </motion.div>
          </motion.div>

          {!opening && <p className={styles.hint}>Tocá el sticker para abrir</p>}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
