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
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { useState } from "react";
import { AuthModal, BookingModal } from "./components/ActionModals";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [language, setLanguage] = useState("fr");

  if (activeModal === "auth") {
    return (
      <AuthModal
        isOpen
        standalone
        onClose={() => setActiveModal(null)}
        language={language}
      />
    );
  }

  return (
    <>
      <div className="w-full">
        <Home
          onBook={() => setActiveModal("booking")}
          onLogin={() => setActiveModal("auth")}
          language={language}
          setLanguage={setLanguage}
        />
        <AboutSection language={language} />
        <ServiceSection language={language} />
        <DownloadAppSection language={language} />
        <TeamSection language={language} />
        <CommanderSection language={language} />
        <ForClientsSection language={language} />
        <PartnersSection language={language} />
        <TestimonialsSection language={language} />
        <NewsletterSection language={language} />
        <ContactSection language={language} />
        <FooterSection language={language} />
      </div>
      <BookingModal
        isOpen={activeModal === "booking"}
        onClose={() => setActiveModal(null)}
        language={language}
      />
      <AuthModal
        isOpen={activeModal === "auth"}
        onClose={() => setActiveModal(null)}
        language={language}
      />
    </>
  );
}

export default App;

