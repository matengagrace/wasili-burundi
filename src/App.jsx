import AboutSection from "./components/AboutSection";
import DownloadAppSection from "./components/DownloadAppSection";
import CommanderSection from "./components/CommanderSection";
import ServiceSection from "./components/ServiceSection";
import TeamSection from "./components/TeamSection";
import Home from "./pages/Home";
import ForClientsSection from "./components/ForClientsSection";
import PartnersSection from "./components/PartnersSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";
"use client";
import { motion, useSpring, useScroll } from "motion/react";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { useState } from "react";
import { AuthModal, BookingModal } from "./components/ActionModals";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (activeModal === "auth") {
    return <AuthModal isOpen standalone onClose={() => setActiveModal(null)} />;
  }

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "var(--hue-1)",
        }}
      />
     <div className="w-full">
      <Home onBook={() => setActiveModal("booking")} onLogin={() => setActiveModal("auth")} />
        <AboutSection />
        <ServiceSection />
        <DownloadAppSection />
        <TeamSection />
        <CommanderSection />
        <ForClientsSection />
        <PartnersSection />
        <TestimonialsSection />
        <NewsletterSection />
        <ContactSection />
        <FooterSection />
      </div>
      <BookingModal isOpen={activeModal === "booking"} onClose={() => setActiveModal(null)} />
      <AuthModal isOpen={activeModal === "auth"} onClose={() => setActiveModal(null)} />
    </>
  );
}

export default App;

