import { TextAlignJustify } from "lucide-react";
import { logo } from "../assets/images";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { siteTranslations } from "../data/translations";

function Navbar({ onLogin, language, setLanguage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const t = siteTranslations[language]?.nav ?? siteTranslations.fr.nav;
  const ui = siteTranslations[language]?.ui ?? siteTranslations.fr.ui;
  const navItems = [
    { label: t.home, href: "#hero" },
    { label: t.services, href: "#services" },
    { label: t.about, href: "#about" },
    { label: t.contact, href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage((current) => (current === "fr" ? "en" : "fr"));
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-99 mx-auto mt-4 flex w-[calc(100%-1rem)] max-w-7xl items-center justify-between rounded-full bg-white/90 px-6 py-1 shadow-xs backdrop-blur sm:left-1/2 sm:right-auto sm:w-[calc(100%-3rem)] sm:-translate-x-1/2">
        <div className="flex items-center">
          <div className="flex h-15 w-15 items-center justify-center rounded-full text-xl font-bold text-white">
            <img src={logo} alt={ui.logoAlt} className="w-full" />
          </div>
          <h3 className="hidden font-bold text-[#E2B40D] lg:inline">Wasili Burundi</h3>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-BLACK-COLOR lg:flex">
          {navItems.map(({ label, href }) => (
            <a key={label + href} href={href} className="transition hover:text-amber-600">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={toggleLanguage}
              className="cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-bold text-gray-900 shadow-sm transition hover:border-amber-400 hover:text-amber-600"
            >
              {language === "fr" ? "FR" : "EN"}
            </button>
            <button
              type="button"
              onClick={onLogin}
              className="cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-amber-500"
            >
              {t.login}
            </button>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            aria-label={ui.openMenu}
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
          >
            <TextAlignJustify className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onLogin={onLogin}
        language={language}
        setLanguage={setLanguage}
      />
    </>
  );
}

export default Navbar;
