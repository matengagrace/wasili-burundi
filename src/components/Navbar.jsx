import { TextAlignJustify } from "lucide-react";
import { logo } from "../assets/images";
function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/90 px-6 py-1 shadow-xs backdrop-blur sm:left-1/2 sm:right-auto sm:w-[calc(100%-3rem)] w-[calc(100%-1rem)] sm:-translate-x-1/2 mt-4">
      <div className="flex items-center">
        <div className="flex h-15 w-15 items-center justify-center rounded-full  text-xl font-bold text-white">
           <img src={logo} alt="Logo"  className="w-full"/>
        </div>
       <h3 className="font-bold text-[#E2B40D] hidden lg:inline">Wasili Burundi</h3>
      </div>

      <div className="hidden items-center gap-8 text-sm font-medium text-BLACK-COLOR lg:flex">
        <a href="#" className="">
          Accueil
        </a>
        <a href="#" className="">
          Services
        </a>
        <a href="#" className="">
          À propos
        </a>
        <a href="#" className="">
          Contact
        </a>
        <a href="#" className="">
          Termes
        </a>
        <a href="#" className="">
          Aide
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
        <TextAlignJustify  className="lg:hidden"/>
      </div>
    </nav>
  );
}

export default Navbar;
