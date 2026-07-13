import styles from './EventInfo.module.css';
import { PiHouseLineLight } from 'react-icons/pi';
import { event, mapsUrl } from '../../data/event.js';

function Card({ eyebrow, icon, name, address, city, dateLabel, timeLabel, href }) {
  return (
    <div className={styles.card}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.icon} aria-hidden="true">{icon}</div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.address}>
        {address}
        <br />
        {city}
      </p>
      <p className={styles.date}>{dateLabel}</p>
      <p className={styles.time}>{timeLabel}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        Cómo llegar
      </a>
    </div>
  );
}

export default function EventInfo() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <Card
          eyebrow="Ceremonia y fiesta"
          icon={<PiHouseLineLight />}
          name={event.venue.name}
          address={event.venue.address}
          city={event.venue.city}
          dateLabel={event.venue.dateLabel}
          timeLabel={event.venue.timeLabel}
          href={mapsUrl}
        />
      </div>
    </section>
  );
}
