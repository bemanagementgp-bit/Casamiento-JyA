import { useEffect, useRef, useState } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';
import styles from './MusicPlayer.module.css';
import { event } from '../../data/event.js';

// Reproductor de fondo: audio local en loop (canción completa),
// con un botón flotante para pausar/reanudar.
export default function MusicPlayer({ start }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    audioRef.current?.play().catch(() => {
      // Autoplay bloqueado: se reintenta con el primer gesto del usuario
    });
  };

  // Intenta arrancar automáticamente al cargar; si el navegador lo bloquea,
  // arranca con el primer toque/click (por ej. al abrir el sobre).
  useEffect(() => {
    play();
    const startOnGesture = () => play();
    window.addEventListener('pointerdown', startOnGesture, { once: true });
    return () => window.removeEventListener('pointerdown', startOnGesture);
  }, []);

  // Refuerzo: al abrir el sobre, asegura que esté sonando
  useEffect(() => {
    if (start) play();
  }, [start]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) play();
    else audioRef.current.pause();
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={event.songFile}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        type="button"
        className={styles.fab}
        onClick={toggle}
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
        title={playing ? 'Pausar música' : 'Reproducir música'}
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>
    </>
  );
}
