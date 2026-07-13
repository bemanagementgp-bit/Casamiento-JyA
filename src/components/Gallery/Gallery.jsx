import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Gallery.module.css';
import { PiImageSquareLight, PiXLight, PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';
import { galleryPhotos } from '../../data/photos.js';

export default function Gallery() {
  // Tomamos las primeras 5 fotos para el layout del mockup.
  const photos = galleryPhotos.slice(0, 5);
  const [selected, setSelected] = useState(null); // índice o null
  const [direction, setDirection] = useState(0);

  const close = useCallback(() => setSelected(null), []);

  const move = useCallback(
    (dir) => {
      setDirection(dir);
      setSelected((s) =>
        s === null ? s : (s + dir + photos.length) % photos.length
      );
    },
    [photos.length]
  );

  // Teclado: flechas y Escape
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected, close, move]);

  return (
    <section className={styles.section}>
      <div className={styles.icon} aria-hidden="true"><PiImageSquareLight /></div>
      <h2 className={styles.title}>Momentos juntos</h2>
      <div className={styles.divider} />
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <figure
            className={`${styles.item} ${styles[`item${i + 1}`]}`}
            key={i}
            onClick={() => setSelected(i)}
            role="button"
            tabIndex={0}
            aria-label={`Ver foto ${i + 1}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setSelected(i);
            }}
          >
            <img src={src} alt={`Foto ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button
              type="button"
              className={styles.lbClose}
              onClick={close}
              aria-label="Cerrar"
            >
              <PiXLight />
            </button>

            <button
              type="button"
              className={`${styles.lbNav} ${styles.lbPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              aria-label="Foto anterior"
            >
              <PiCaretLeftLight />
            </button>

            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={selected}
                src={photos[selected]}
                alt={`Foto ${selected + 1}`}
                className={styles.lbImg}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -70) move(1);
                  else if (info.offset.x > 70) move(-1);
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <button
              type="button"
              className={`${styles.lbNav} ${styles.lbNext}`}
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              aria-label="Foto siguiente"
            >
              <PiCaretRightLight />
            </button>

            <p className={styles.lbCount}>
              {selected + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
