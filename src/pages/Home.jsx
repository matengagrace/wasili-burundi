import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#EEEEEE] via-[#EEEEEE] to-[#FFCC00]/40 px-4 py-6 sm:px-8 pt-18">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default Home;
