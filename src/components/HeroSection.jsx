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
import { siteTranslations } from "../data/translations";

function HeroSection({ onBook, language = "fr" }) {
  const t = siteTranslations[language]?.hero ?? siteTranslations.fr.hero;
  const ui = siteTranslations[language]?.ui ?? siteTranslations.fr.ui;

  return (
    <div id="hero" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-2 pb-10 pt-32 md:grid-cols-[1fr_300px] md:pt-5 lg:grid-cols-[1fr_500px]">
      <div className="w-full">
        <h1 className="w-full text-5xl font-extrabold leading-[70px] tracking-tight text-BLACK-COLOR lg:text-[72px]">
          {t.title}
        </h1>
        <p className="mt-6 text-[20px] text-gray-600">{t.subtitle}</p>

        <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.mediabox.wasilirider", "_blank")}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-bold text-gray-900 shadow-sm transition hover:bg-amber-500"
          >
            <Download className="h-5 w-5" />
            {t.download}
          </button>
          <button
            onClick={onBook}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-BLACK-COLOR px-6 py-4 font-bold text-white shadow-sm transition hover:bg-BLACK-COLOR/80"
          >
            <CarTaxiFront className="h-5 w-5" />
            {t.book}
          </button>
        </div>

        <hr className="mt-10 hidden border-gray-300 lg:flex" />

        <div className="mt-8 hidden grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid">
          <Feature icon={Clock} label={t.stats[0]} />
          <Feature icon={UserCheck} label={t.stats[1]} />
          <Feature icon={ShieldCheck} label={t.stats[2]} />
          <Feature icon={Wallet} label={t.stats[3]} />
        </div>
      </div>

      <div className="flex justify-center">
        <img src={phone} alt={ui.phoneAlt} className="w-[350px] md:w-[300px] lg:w-[450px]" />
      </div>
    </div>
  );
}

export default HeroSection;

