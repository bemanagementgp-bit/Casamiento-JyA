import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Envelope.module.css';
import { event } from '../../data/event.js';

const easeSoft = [0.65, 0, 0.35, 1];

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
  };

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: opening ? 0 : 1 }}
      transition={
        opening
          ? { duration: 0.7, delay: 1.3, ease: 'easeInOut' }
          : { duration: 0.5, ease: 'easeOut' }
      }
      onAnimationComplete={() => {
        if (opening) onOpen?.();
      }}
      style={{ pointerEvents: opening ? 'none' : 'auto' }}
    >
      {/* Zoom "hacia adentro" del sobre al abrir */}
      <motion.div
        className={styles.zoom}
        animate={opening ? { scale: 1.55 } : { scale: 1 }}
        transition={{ duration: 0.95, delay: 1.0, ease: easeSoft }}
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
        >
          <div className={styles.body} />

          {/* Líneas del sobre: aparecen con un fundido suave */}
          <motion.div
            className={styles.flapSide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
          />

          {/* Flap superior 3D */}
          <motion.div
            className={styles.flapTop}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: opening ? -180 : 0 }}
            transition={{ duration: 0.9, delay: opening ? 0.35 : 0, ease: 'easeInOut' }}
          />

          {/* Sticker: pop de entrada + pulso invitando a tocar + despegue al abrir */}
          <motion.div
            className={styles.stickerWrap}
            initial={{ scale: 0, rotate: -12 }}
            animate={
              opening
                ? {
                    scale: 1.15,
                    rotate: -22,
                    x: -70,
                    y: -150,
                    opacity: 0,
                    transition: { duration: 0.65, ease: 'easeIn' },
                  }
                : {
                    scale: 1,
                    rotate: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 240,
                      damping: 15,
                      delay: 0.55,
                    },
                  }
            }
          >
            <motion.div
              className={styles.sticker}
              animate={
                opening
                  ? {}
                  : { scale: [1, 1.05, 1] }
              }
              transition={
                opening
                  ? {}
                  : {
                      duration: 2.4,
                      delay: 1.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <span>
                {event.initials}
                <small>abrir</small>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.p
        className={styles.hint}
        initial={{ opacity: 0, y: 8 }}
        animate={
          opening ? { opacity: 0, y: 8 } : { opacity: 0.45, y: 0 }
        }
        transition={{ duration: 0.6, delay: opening ? 0 : 1.1, ease: 'easeOut' }}
      >
        Tocá el sticker para abrir
      </motion.p>
    </motion.div>
  );
}
