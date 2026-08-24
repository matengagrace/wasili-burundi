
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

function Home({ onBook, onLogin, language, setLanguage }) {
  return (
    <div className=" bg-gradient-to-tr from-[#EEEEEE] via-[#EEEEEE] to-[#FFCC00]/40 px-4 py-6 sm:px-8 pt-18">
      <Navbar
        onLogin={onLogin}
        language={language}
        setLanguage={setLanguage}
      />
      <HeroSection onBook={onBook} language={language} />
    </div>
  );
}

export default Home;
