import { useEffect, useRef, useState } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';
import styles from './MusicPlayer.module.css';
import { event } from '../../data/event.js';

// Reproductor de fondo: usa la iFrame API de Spotify, oculto,
// con un botón flotante para pausar/reanudar.
export default function MusicPlayer({ start }) {
  const controllerRef = useRef(null);
  const initializedRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Evita la doble inicialización de React.StrictMode en desarrollo
    if (initializedRef.current) return;
    initializedRef.current = true;

    if (!document.getElementById('spotify-iframe-api')) {
      const script = document.createElement('script');
      script.id = 'spotify-iframe-api';
      script.src = 'https://open.spotify.com/embed/iframe-api/v1';
      script.async = true;
      document.body.appendChild(script);
    }

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      IFrameAPI.createController(
        document.getElementById('bg-music-embed'),
        { uri: event.spotify.songUri, width: 1, height: 1 },
        (controller) => {
          controllerRef.current = controller;
          controller.addListener('playback_update', (e) => {
            setPlaying(!e.data.isPaused);
          });
          // Esperar a que el iframe del embed termine de cargar
          controller.addListener('ready', () => setReady(true));
        }
      );
    };
  }, []);

  // Arranca la música cuando se abre el sobre (gesto del usuario) y la API está lista
  useEffect(() => {
    if (start && ready) {
      controllerRef.current?.play();
    }
  }, [start, ready]);

  const toggle = () => controllerRef.current?.togglePlay();

  return (
    <>
      <div className={styles.hidden} aria-hidden="true">
        <div id="bg-music-embed" />
      </div>

      {start && ready && (
        <button
          type="button"
          className={styles.fab}
          onClick={toggle}
          aria-label={playing ? 'Pausar música' : 'Reproducir música'}
          title={playing ? 'Pausar música' : 'Reproducir música'}
        >
          {playing ? <FaPause /> : <FaMusic />}
        </button>
      )}
    </>
  );
}
