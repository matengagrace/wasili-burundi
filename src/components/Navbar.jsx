import { TextAlignJustify } from "lucide-react";
import { logo } from "../assets/images";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/90 px-6 py-1 shadow-xs backdrop-blur sm:left-1/2 sm:right-auto sm:w-[calc(100%-3rem)] w-[calc(100%-1rem)] sm:-translate-x-1/2 mt-4">
        <div className="flex items-center">
          <div className="flex h-15 w-15 items-center justify-center rounded-full  text-xl font-bold text-white">
             <img src={logo} alt="Logo"  className="w-full"/>
          </div>
         <h3 className="font-bold text-[#E2B40D] hidden lg:inline">Wasili Burundi</h3>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-BLACK-COLOR lg:flex">
          <a href="#hero" className="transition hover:text-amber-600">
            Accueil
          </a>
          <a href="#services" className="transition hover:text-amber-600">
            Services
          </a>
          <a href="#about" className="transition hover:text-amber-600">
            À propos
          </a>
          <a href="#contact" className="transition hover:text-amber-600">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <span className="hidden text-sm font-medium text-gray-700 sm:inline cursor-pointer">
              EN
            </span>
            <button className="rounded-full cursor-pointer bg-amber-400 px-6 py-2.5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-amber-500">
              LOGIN
            </button>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Ouvrir le menu"
            className="lg:hidden rounded-lg p-2 hover:bg-gray-100 transition"
          >
            <TextAlignJustify className="h-6 w-6"/>
          </button>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

export default Navbar;
