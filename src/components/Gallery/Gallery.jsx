import styles from './Gallery.module.css';
import { PiImageSquareLight } from 'react-icons/pi';
import { galleryPhotos } from '../../data/photos.js';

export default function Gallery() {
  // Tomamos las primeras 5 fotos para el layout del mockup.
  const photos = galleryPhotos.slice(0, 5);
  return (
    <section className={styles.section}>
      <div className={styles.icon} aria-hidden="true"><PiImageSquareLight /></div>
      <h2 className={styles.title}>Momentos juntos</h2>
      <div className={styles.divider} />
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <figure className={`${styles.item} ${styles[`item${i + 1}`]}`} key={i}>
            <img src={src} alt={`Foto ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
