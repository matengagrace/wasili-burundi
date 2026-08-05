import AboutSection from "./components/AboutSection"
import DownloadAppSection from "./components/DownloadAppSection"
import CommanderSection from "./components/CommanderSection"
import ServiceSection from "./components/ServiceSection"
import TeamSection from "./components/TeamSection"
import Home from "./pages/Home"

function App() {
  return (
    <div className="w-full">
      <Home />
      <AboutSection />
      <ServiceSection />
      <DownloadAppSection/>
      <TeamSection />
      <CommanderSection />
    </div>
  )
}

export default App