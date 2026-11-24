import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import ScheduleSection from './components/ScheduleSection';
import RulesSection from './components/RulesSection';
import CoordinatorsSection from './components/CoordinatorsSection';
import RoomCoordinatorsSection from './components/RoomCoordinatorsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EventModal from './components/EventModal';
import CodewarsSyllabus from './components/CodewarsSyllabus';
import { EVENTS_DATA } from './data/eventsData';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleSelectEventById = (eventId) => {
    const found = EVENTS_DATA.find((e) => e.id === eventId);
    if (found) {
      setSelectedEvent(found);
    }
  };

  const handleOpenSyllabus = () => {
    setIsSyllabusOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Dynamic Animated Particle Canvas - Pure Monochrome */}
      <ParticleBackground />

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <EventsSection
            onSelectEvent={handleSelectEvent}
            onOpenSyllabus={handleOpenSyllabus}
          />
          <ScheduleSection onSelectEventById={handleSelectEventById} />
          <RulesSection />
          <CoordinatorsSection />
          <RoomCoordinatorsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Deep-dive Event Details Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={Boolean(selectedEvent)}
        onClose={() => setSelectedEvent(null)}
        onOpenSyllabus={handleOpenSyllabus}
      />

      {/* Codewars-I 100+ C Programs Catalog Modal */}
      <CodewarsSyllabus
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
      />
    </div>
  );
}

export default App;
