import { useEffect, useState } from 'react';
import styles from './Countdown.module.css';
import { event } from '../../data/event.js';

function diff(target) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    minutos: Math.floor((s % 3600) / 60),
    segundos: s % 60,
  };
}

function buildIcs() {
  const start = event.date;
  const end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
  const fmt = (d) =>
    d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Juli&Alan//Boda//ES',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@juli-alan`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Casamiento ${event.brideAndGroom}`,
    `LOCATION:${event.venue.name} - ${event.venue.address}, ${event.venue.city}`,
    'DESCRIPTION:Nos casamos!',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'casamiento-juli-alan.ics';
  a.click();
  URL.revokeObjectURL(url);
}

export default function Countdown() {
  const [t, setT] = useState(() => diff(event.date));

  useEffect(() => {
    const id = setInterval(() => setT(diff(event.date)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="fecha" className={styles.section}>
      <div className={styles.star}>✦</div>
      <h2 className={styles.date}>{event.dateLabel}</h2>
      <div className={styles.divider} />
      <p className={styles.intro}>Faltan para el gran día</p>

      <div className={styles.grid}>
        {[
          ['dias', 'Días'],
          ['horas', 'Horas'],
          ['minutos', 'Minutos'],
          ['segundos', 'Segundos'],
        ].map(([k, label]) => (
          <div className={styles.cell} key={k}>
            <div className={styles.num}>{String(t[k]).padStart(2, '0')}</div>
            <div className={styles.label}>{label}</div>
          </div>
        ))}
      </div>

      <button type="button" className={styles.btn} onClick={buildIcs}>
        Agendar fecha
      </button>
    </section>
  );
}
