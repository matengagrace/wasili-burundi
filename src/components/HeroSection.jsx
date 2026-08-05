import {
  Download,
  CarTaxiFront,
  Clock,
  UserCheck,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Feature from "../hooks/Feature";
import { phone } from "../assets/images";
function HeroSection() {
  return (
    <div className="mx-auto pb-10 grid max-w-8xl grid-cols-1 items-center gap-12 px-2 pt-32 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_500px] md:pt-5">
        
        <div className="w-full">
          <h1 className="w-full text-5xl font-extrabold leading-[70px] tracking-tight text-BLACK-COLOR lg:text-[72px]">
            Le confort à chaque Kilomètre
          </h1>
          <p className="mt-6  text-[20px] text-gray-600">
            Téléchargez l'application pour clients sur votre smartphone afin
            de commander facilement une course.
          </p>

          
          <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full">
            <button className="cursor-pointer flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-bold text-gray-900 shadow-sm transition hover:bg-amber-500">
               <Download className="h-5 w-5" />
              Télécharger l'application
            </button>
            <button className="cursor-pointer flex items-center justify-center gap-2 rounded-xl bg-BLACK-COLOR px-6 py-4 font-bold text-white shadow-sm transition hover:bg-BLACK-COLOR/80">
              <CarTaxiFront className="h-5 w-5" />
              Réserver une voiture
            </button>
          </div>

          <hr className="mt-10 border-gray-300 hidden lg:flex" />

          <div className="mt-8 lg:grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 hidden ">
            <Feature icon={Clock} label="Disponible 24h/24" />
            <Feature icon={UserCheck} label="Chauffeurs pros" />
            <Feature icon={ShieldCheck} label="Sécurisé" />
            <Feature icon={Wallet} label="Transparence" />
          </div>
        </div>

    
        <div className="flex justify-center">
          <img src={phone} alt="Phone Mockup" className="w-[350px] md:w-[300px] lg:w-[450px]" />
        </div>
      </div>
  )
}

export default HeroSection

