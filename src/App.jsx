import { useState } from 'react';
import Envelope from './components/Envelope/Envelope.jsx';
import MusicPlayer from './components/MusicPlayer/MusicPlayer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Countdown from './components/Countdown/Countdown.jsx';
import EventInfo from './components/EventInfo/EventInfo.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Playlist from './components/Playlist/Playlist.jsx';
import Rsvp from './components/Rsvp/Rsvp.jsx';
import GiftRegistry from './components/GiftRegistry/GiftRegistry.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  // El sobre se muestra siempre al abrir la web.
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <>
      {!opened && <Envelope onOpen={handleOpen} />}
      <MusicPlayer start={opened} />
      <main>
        <Hero />
        <Countdown />
        <EventInfo />
        <Gallery />
        <Playlist />
        <Rsvp />
        <GiftRegistry />
        <Footer />
      </main>
    </>
  );
}
