import AboutSection from "./components/AboutSection"
import DownloadAppSection from "./components/DownloadAppSection"
import CommanderSection from "./components/CommanderSection"
import ServiceSection from "./components/ServiceSection"
import TeamSection from "./components/TeamSection"
import Home from "./pages/Home"
import ForClientsSection from "./components/ForClientsSection"
import PartnersSection from "./components/PartnersSection"
import TestimonialsSection from "./components/TestimonialsSection"
import NewsletterSection from "./components/NewsletterSection"

function App() {
  return (
    <div className="w-full">
      <Home />
      <AboutSection />
      <ServiceSection />
      <DownloadAppSection/>
      <TeamSection />
      <CommanderSection />
      <ForClientsSection />
      <PartnersSection/>
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}

export default App